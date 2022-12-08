import { useState } from 'react'
import './App.scss'
import './setUp.scss'
import './Components/Fontawesome'
import firebase from './Components/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';



function App() {
  
  const auth = getAuth(firebase);

  const signUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
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
  

  return (
 <>
 <body>
  
 <div className="wrapper">
 
  <form action="">
    <div className="container">
      <div className="input">
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
        <input type={"email"}  onChange={(event) => event.target.value} placeholder="Email" />
      </div>
      <div className="input">
        <FontAwesomeIcon icon="fa-solid fa-lock" />
        <input type="text"  onChange={(event) => event.target.value} placeholder="Password"/>
      </div>
      <div className="input"> 
        <FontAwesomeIcon icon="fa-solid fa-key" />     
        <input type="text" onChange={(event) => event.target.value} placeholder="Confirm password" />
      </div>

    <button onClick={signUp}>Sign Up</button>
    <button>Sign In</button>

    </div>
  </form>

  
 </div>
 </body>
 </>
  )
}

export default App
