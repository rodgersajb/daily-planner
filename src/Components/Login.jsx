import { useState } from 'react';
import './Fontawesome'
import firebase from './firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import './Login.scss'

const LogIn = () => {
    const auth = getAuth(firebase);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [user, setUser] = useState([])

    const signUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
    setUser(userCredential.user);
    console.log(user)
    
      // ...
    })
    .catch((error) => {
        const errorCode = error.code;
      // const errorMessage = error.message;
        alert(errorCode)
      // ..
    });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
    }

    return (
      
         <div className="wrapper">
 
  <form action="" onSubmit={handleOnSubmit}>
    <div className="planner-container">

    <h3>Daily Planner</h3>
    </div>
    <div className="form-container">
      <div className="input">
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
        <input type={"email"}  onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
        <span className="underline"></span>

      </div>
      <div className="input">
        <FontAwesomeIcon icon="fa-solid fa-lock" />
        <input type="text"  onChange={(event) => setPassword(event.target.value)} placeholder="Password"/>
        <span className="underline"></span>

      </div>
      <div className="input"> 
        <FontAwesomeIcon icon="fa-solid fa-lock" />     
        <input type="text" onChange={(event) => event.target.value} placeholder="Confirm password" />
        <span className="underline"></span>

      </div>
      <div className="button">

        <button onClick={signUp}>Sign Up</button>
        <button>Sign In</button>
      </div>


    </div>
  </form>

  
 </div>
    )
}

export default LogIn