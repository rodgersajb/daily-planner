import "./Nav.scss";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { firebase } from "./firebase";
import SignIn from "./SignIn";
import Priorities from "./Priorities";
import Reminders from "./Reminders";
import ToDo from "./ToDo";
import Notes from "./Notes";

const Nav = () => {
  const [date, setDate] = useState([]);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  console.log(currentUser, "current user");

  useEffect(() => {
    let theDate = new Date();
    setDate(theDate);
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth(firebase);
    await signOut(auth);
    setCurrentUser(null);
    <Navigate to="/" element={<SignIn />} />;
  };

  return currentUser === null ? (
    <Navigate to="/" />
  ) : (
    <>
      <div className="nav-wrapper">
        <nav>
          <div className="plus">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </div>

          <h1>Daily Planner</h1>

          <p className="date">{date.toLocaleString()}</p>
          <div className="dropdown-menu">
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <div className="dropdown-content">
              <p>Logged in as {currentUser.email}</p>
              <button onClick={handleSignOut}>
                <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                <p>Sign Out</p>
              </button>
            </div>
          </div>
        </nav>
        <div className="display-grid">
          <Priorities />
          <Reminders />
          <ToDo />
          <Notes />
        </div>
      </div>
    </>
  );
};

export default Nav;
