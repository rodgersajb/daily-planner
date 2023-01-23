import { useState, useContext, useEffect } from "react";
import { db } from "./firebase";
import { ref, update, onValue, set } from "firebase/database";
import { AuthContext } from "../Contexts/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDo = (props) => {
  const toDoRef = ref(db, `users/${currentUser.uid}/toDo/${props.id}`);

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete?")) {
      remove(toDoRef);
    }
  };

  return (
    <div>
      {props.description}
      <button onClick={handleDelete}>Remove ToDo</button>
    </div>
  );
};

export default ToDo;
