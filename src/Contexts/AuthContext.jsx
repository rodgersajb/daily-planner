import { getAuth } from "firebase/auth";
import { useState, useEffect, createContext } from "react";
import firebase from "../Components/firebase";
import { onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebase);
    auth.onAuthStateChanged(setCurrentUser)
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
      >
        {children}
      </AuthContext.Provider>
  );
};