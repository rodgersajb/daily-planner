import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Fontawesome";
import firebase from "./firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignUp.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const handleSignUp = () => {
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        // setLoggedIn(true);

        console.log(user);
        alert("Successfully signed up!");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="planner-container">
          <h3>Daily Planner</h3>
        </div>
        <div className="form-container">
          <div className="input">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
            <input
              type={"email"}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
            <span className="underline"></span>
          </div>
          <div className="input">
            <FontAwesomeIcon icon="fa-solid fa-lock" />
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <span className="underline"></span>
          </div>
          <div className="input">
            <FontAwesomeIcon icon="fa-solid fa-lock" />
            <input
              type="password"
              onChange={(event) => event.target.value}
              placeholder="Confirm password"
            />
            <span className="underline"></span>
          </div>
          <div className="button">
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
        <p>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
