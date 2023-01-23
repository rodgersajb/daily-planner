import { useContext, useEffect, useState } from "react";
import { update, ref, remove, onValue, set, push } from "firebase/database";
import "./ToDoList.scss";
import { firebase } from "./firebase";
import { db } from "./firebase";
import { AuthContext } from "../Contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToDo from "./ToDo";
import { v4 as uuid } from "uuid";

const ToDoList = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [toDos, setToDos] = useState([]);
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    const toDoListsRef = ref(db, `users/${currentUser.uid}/toDo`);
    onValue(toDoListsRef, (snapshot) => {
      const data = snapshot.val();
      const toDos = data ? Object.keys(data).map((key) => {
        return { id: key, ...data[key]};
      })
      : []
      setToDos(toDos)
    })
  }, [])

  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const toDoListsRef = ref(db, `users/${currentUser.uid}/toDo${uuid()}`);
    set(toDoListsRef, {
      description: userInput,
    })
    setUserInput('')
  }





  return (
    <>
    <div className="to-do">
      <ul>
        {toDos.map((toDo) => {
          return (
            <li key={toDo.id}>
              <ToDo {...toDo} />
            </li>
          )
        })}
      </ul>
      <form action="submit" onSubmit={handleFormSubmit}>
        <label htmlFor="newToDo">
          <input type="text" id="newToDo" onChange={handleInputChange} value={userInput} />
          <button onClick={handleSubmit}>Add ToDo</button>
        </label>
      </form>
    </div>
    </>
  )
};

export default ToDoList;
