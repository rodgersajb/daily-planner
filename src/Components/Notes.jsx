import { useContext, useEffect, useState } from "react";
import { update, ref, remove, onValue, set, push } from "firebase/database";
import "./ToDoList.scss";
import { db } from "./firebase";
import { AuthContext } from "../Contexts/AuthContext";
import "./Notes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Note from "./Note";

const Notes = () => {
  const { currentUser } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const notesRef = ref(db, `users/${currentUser.uid}/notes`);
    onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data, "DATA");
      const notes = data
        ? Object.keys(data).map((key) => {
            return { id: key, ...data[key] };
          })
        : [];
      setNotes(notes);
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
    const notesRef = ref(db, `users/${currentUser.uid}/notes`);
    push(notesRef, {
      description: userInput,
    });
    setUserInput("");
  };

  return (
    <div className="notes span-2-col">
      <h2>
        Notes
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
      <div className="notes-background">
        <ul>
          {notes.map((note) => {
            return (
              <li key={note.id}>
                <Note {...note} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
