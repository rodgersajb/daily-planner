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
  // const [priorities, setPriorities] = useState([]);
  // const [reminders, setReminders] = useState([]);
  // const [todo, setTodo] = useState([]);
  // const [notes, setNotes] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [post, setPost] = useState("");

  console.log(currentUser, "current user");
  // console.log(priorities, "priorities");
  // console.log(todo, "to do");
  // console.log(reminders, "reminders");
  // console.log(notes, "notes");
  // console.log(post, "post");
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
            <div className="plus-container">
              <div
                className="plus-trigger"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-plus" />
              </div>
            </div>
            {/* <div className={`plus-dropdown ${open ? "active" : "inactive"}`}>
              <label htmlFor=""></label>
              <input
                type="text"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
              <select name="" id="">
                <option value="">Add to...</option>
                <option value="" onClick={() => setPriorities(post)}>
                  Top Priorities{priorities}{" "}
                </option>
                <option value="" onChange={() => setTodo(post)}>
                  To Do{todo}
                </option>
                <option value="" onChange={() => setReminders(post)}>
                  Reminders{reminders}
                </option>
                <option value="" onChange={() => setNotes(post)}>
                  Notes{notes}
                </option>
              </select>
            </div> */}

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
      </section>
    </>
  );
};

export default Nav;
