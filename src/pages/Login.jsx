import { json, redirect, Navigate } from "react-router-dom";
import { loginSchema, passwordSchema } from "../validation";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { useAuthContext } from "../context/authContext";
import LoginForm from "../components/LoginForm";
import MainNavigation from "../components/MainNavigation";

export default function Login() {
  const { currentUser } = useAuthContext();
  if (currentUser) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <MainNavigation />
      <LoginForm />
    </>
  );
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");

  if (mode && mode !== "password") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }
  const formData = await request.formData();

  let data = Object.fromEntries(formData.entries());

  let validations;
  if (!mode) {
    validations = loginSchema.safeParse(data);
  } else {
    validations = passwordSchema.safeParse(data);
  }

  if (!validations.success) {
    const errors = {};
    for (const error of validations.error.errors) {
      if (!errors[error.path[0]]) errors[error.path[0]] = [error.message];
      else errors[error.path[0]].push(error.message);
    }
    return json({ message: "Validation failed", errors }, { status: 422 });
  }

  data = validations.data;

  let userCredentials;
  try {
    if (!mode) {
      userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
    } else {
      await sendPasswordResetEmail(auth, data.email, {
        url: "http://localhost:5173/login",
      });
      return redirect("/login?passwordReset=true");
    }
  } catch (e) {
    if (e.code === "auth/invalid-email") {
      return json({ message: "Email no válido" }, { status: 422 });
    } else if (e.code === "auth/weak-password") {
      return json(
        {
          message:
            "Debes introducir una contraseña que tenga al menos 6 caracteres",
        },
        { status: 422 }
      );
    } else if (e.code === "auth/invalid-credential") {
      return json(
        { message: "Email y/o contraseña no válidos" },
        { status: 422 }
      );
    } else if (e.code === "auth/too-many-requests") {
      return json(
        {
          message:
            "Cuenta bloqueada temporalmente debido a múltiples intentos de inicio de sesión fallidos. Restablece tu contraseña para desbloquear tu cuenta.",
        },
        { status: 422 }
      );
    } else throw e;
  } finally {
    if (userCredentials && !mode) {
      return redirect("/");
    }
  }
}
