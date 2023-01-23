import { AuthContext } from "../Contexts/AuthContext";
import { useEffect, useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebase } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SignIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleSignIn = () => {
    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };
  const authenticateUser = () => {
    // determine if user is logged in
    const auth = getAuth(firebase);
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        <Navigate to="/Home" />;
        setLoggedIn(true);
        const uid = currentUser.uid;
      } else {
        setLoggedIn(false);
      }
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  // const handleUserSignUp = () => {
  //   <Navigate to="/Signup" />;
  // };

  useEffect(() => {
    if (!loggedIn) {
      authenticateUser();
    }
  }, [loggedIn]);

  if (currentUser) {
    return <Navigate to="/Home" />;
  }

  return (
    <div className="form">
      <h3>Daily Planner</h3>
      <form action="" onSubmit={handleClick}>
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

        <button onClick={handleSignIn}>Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/Signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
