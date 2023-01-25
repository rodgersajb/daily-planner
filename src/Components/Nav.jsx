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
import ToDoList from "./ToDoList";
import Notes from "./Notes";

const Nav = () => {
  const [date, setDate] = useState([]);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

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
      <section className="nav">
        <div className="nav-wrapper">
          <nav>
            {/* <div className="dropdown-menu"> */}
            <div className="dropdown-content">
              <FontAwesomeIcon icon="fa-solid fa-user" />
              <p>{currentUser.email}</p>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
            {/* </div> */}

            <h1>Daily Planner</h1>

            <p className="date">{date.toLocaleString()}</p>
          </nav>
          <div className="display-grid">
            <Priorities />
            <Reminders />
            <ToDoList />
            <Notes />
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
