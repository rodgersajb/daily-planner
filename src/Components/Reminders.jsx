import "./Reminders.scss";
import { useState, useContext, useEffect } from "react";
import { update, remove, ref, onValue, push } from "firebase/database";
import { firebase, db } from "./firebase";
import Reminder from "./Reminder";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../Contexts/AuthContext";

const Reminders = () => {
  const { currentUser } = useContext(AuthContext);
  const [reminders, setReminders] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const reminderRef = ref(db, `users/${currentUser.uid}/reminders`);
    onValue(reminderRef, (snapshot) => {
      const data = snapshot.val();
      const reminder = data
        ? Object.keys(data).map((key) => {
            return { id: key, ...data[key] };
          })
        : [];
      setReminders(reminder);
    });
  }, []);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reminderRef = ref(db, `users/${currentUser.uid}/reminders`);
    push(reminderRef, {
      description: userInput,
    });
    setUserInput("");
  };

  return (
    <>
      <div className="reminders">
        <h2>
          Reminders
          <form action="submit" onSubmit={handleFormSubmit}>
            <label htmlFor="newToDo">
              <input
                type="text"
                id="newToDo"
                onChange={handleInputChange}
                value={userInput}
              />
            </label>

            <button onClick={handleSubmit}>
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </button>
          </form>
        </h2>
        <div className="reminders-background">
          <ul>
            {reminders.map((reminder) => {
              return (
                <li key={reminder.id}>
                  <Reminder {...reminder} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Reminders;
