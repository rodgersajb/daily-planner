import { useContext } from "react";
import { db } from "./firebase";
import { ref, remove } from "firebase/database";
import { AuthContext } from "../Contexts/AuthContext";

const Note = (props) => {
  const { currentUser } = useContext(AuthContext);
  const noteRef = ref(db, `users/${currentUser.uid}/notes/${props.id}`);

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete?")) {
      remove(noteRef);
    }
  };
  return (
    <>
      <div className="note-entry">
        <p>{props.description}</p>
        <button onClick={handleDelete}>Remove</button>
      </div>
    </>
  );
};

export default Note;