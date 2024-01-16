import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../../firebase/config"

const AuthContext = createContext()

export function useAuthContext() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("Auth changed", user)
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
