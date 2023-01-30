import "./Priorities.scss";
import { useState, useContext, useEffect } from "react";
import { ref, onValue, push } from "firebase/database";
import { db } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../Contexts/AuthContext";
import Priority from "./Priority";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useCallback } from "react";

const Priorities = () => {
  const { currentUser } = useContext(AuthContext);
  const [priorities, setPriorities] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const prioritiesRef = ref(db, `users/${currentUser.uid}/priorities`);
    onValue(prioritiesRef, (snapshot) => {
      const data = snapshot.val();
      const priority = data
        ? Object.keys(data).map((key) => {
            return { id: key, ...data[key] };
          })
        : [];
      setPriorities(priority);
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
    const prioritiesRef = ref(db, `users/${currentUser.uid}/priorities`);
    push(prioritiesRef, {
      description: userInput,
    });
    setUserInput("");
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="priorities">
          <h2>
            Priorities
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
          <div className="priorities-background">
            <ul>
              {priorities.map((priority) => {
                return (
                  <li key={priority.id}>
                    <Priority {...priority} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default Priorities;

// {
//   "rules": {
//     "users": {
//       "$uid": {
//         ".read": "$uid === auth.uid",
//         ".write": "$uid === auth.uid"
//       }
//     }
//   }
// }
