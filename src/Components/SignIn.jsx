import { AuthContext } from "../Contexts/AuthContext";
import { useEffect, useState } from "react";
const SignIn = () => {
      const signIn = () => {
      const auth = getAuth(firebase);
      
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user)
      
      
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      })

    }
       const authenticateUser = () => {
      // determine if user is logged in
      const auth = getAuth(firebase);
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setLoggedIn(true)
          const uid = currentUser.uid;
          
        }
        else {
          setLoggedIn(false)
        }
      })
    }

    useEffect(() => {
      if (!loggedIn) {
        authenticateUser();
      }
    }, [loggedIn])

    const { currentUser } = useContext(AuthContext);

    console.log({ currentUser }, 'hey')

    if (currentUser) {
        return <Navigate to="/Home" />

    }

}

export default SignIn;