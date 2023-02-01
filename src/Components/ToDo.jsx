import { useContext } from "react";
import { db } from "./firebase";
import { ref, remove } from "firebase/database";
import { AuthContext } from "../Contexts/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDo = (props) => {
  console.log(props, "TO DO PROPS");
  const { currentUser } = useContext(AuthContext);

  const toDoRef = ref(db, `users/${currentUser.uid}/toDo/${props.id}`);

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete?")) {
      remove(toDoRef);
    }
  };

  return (
    <div className="to-do-entry">
      <p>{props.description}</p>
      <div className="garbage">
        <FontAwesomeIcon onClick={handleDelete} icon="fa-solid fa-trash" />
      </div>
    </div>
  );
};

export default ToDo;
