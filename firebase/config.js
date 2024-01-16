import { v4 } from "uuid"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2nhtKwaqfSH3guh7ACQXPchv_w7uW7ko",
  authDomain: "hectorapp-3a24d.firebaseapp.com",
  projectId: "hectorapp-3a24d",
  storageBucket: "hectorapp-3a24d.appspot.com",
  messagingSenderId: "952480705318",
  appId: "1:952480705318:web:e3f0f946273554e8d7afe7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
export const auth = getAuth(app)
export const db = getFirestore(app)

export async function uploadFile(file) {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}
