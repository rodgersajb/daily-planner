import { AuthContext } from "../Contexts/AuthContext";
import { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import firebase from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SignIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(firebase);

  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });

    const authenticateUser = () => {
      // determine if user is logged in
      const auth = getAuth(firebase);
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setLoggedIn(true);
          const uid = currentUser.uid;
        } else {
          setLoggedIn(false);
        }
      });
    };
  };

  useEffect(() => {
    if (!loggedIn) {
      authenticateUser();
    }
  }, [loggedIn]);

  console.log({ currentUser }, "hey");

  if (currentUser) {
    return <Navigate to="/Home" />;
  }

  return (
    <div className="form">
      <h3>Daily Planner</h3>
      <form action="" onSubmit={handleSignIn}>
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
        <input
          type={"email"}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <span className="underline"></span>
        <FontAwesomeIcon icon="fa-solid fa-lock" />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <span className="underline"></span>
        <FontAwesomeIcon icon="fa-solid fa-lock" />
        <input
          type="text"
          onChange={(event) => event.target.value}
          placeholder="Confirm password"
        />
        <span className="underline"></span>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
