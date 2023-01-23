import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Fontawesome";
import { firebase, db } from "./firebase";
import { set, ref } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignUp.scss";
import { validateEmail } from "./ValidateEmail";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = () => {
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;

        // Signed in

        console.log(user, "USERRRR");
        alert("Successfully signed up!");
        set(ref(db, "users/" + user.uid), {
          email: email,
          displayName: name,
        });

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

    !validateEmail ? alert("Please enter a valid email") : true;
    // !validateEmail ? alert('enter a proper email!) or invoke code
    // if not validate, you're wrong!
    // if validate, you're validated!
  };

  return (
    <div className="wrapper">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="planner-container">
          <h3>Daily Planner</h3>
        </div>
        <div className="form-container">
          <div className="input">
            <FontAwesomeIcon icon="fa-solid fa-signature" />
            <input
              type={"text"}
              onChange={(event) => setName(event.target.value)}
              placeholder="name"
            />
            <span className="underline"></span>
          </div>
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
          <p>
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
