import { useContext } from "react";
import { db } from "./firebase";
import { ref, remove } from "firebase/database";
import { AuthContext } from "../Contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="garbage">
          <FontAwesomeIcon onClick={handleDelete} icon="fa-solid fa-trash" />
        </div>
      </div>
    </>
  );
};

export default Note;
