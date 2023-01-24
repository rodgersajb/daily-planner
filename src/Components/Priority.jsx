import {  useContext } from "react";
import { db } from "./firebase";
import { ref, remove } from "firebase/database";
import { AuthContext } from "../Contexts/AuthContext";

const Priority = (props) => {
  const { currentUser } = useContext(AuthContext);

  const priorityRef = ref(
    db,
    `users/${currentUser.uid}/priorities/${props.id}`
  );

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete?")) {
      remove(priorityRef);
    }
  };
  return (
    <>
      <div className="priority-entry">
        <p>{props.description}</p>
        <button onClick={handleDelete}>Remove</button>
      </div>
    </>
  );
};

export default Priority;
