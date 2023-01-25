import { useContext } from "react";
import { db } from "./firebase";
import { remove, ref } from "firebase/database";
import { AuthContext } from "../Contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reminder = (props) => {
  const { currentUser } = useContext(AuthContext);

  const reminderRef = ref(db, `users/${currentUser.uid}/reminders/${props.id}`);

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete?")) {
      remove(reminderRef);
    }
  };
  return (
    <>
      <div className="reminder-entry">
        <p>{props.description}</p>
        <div className="garbage">
          <FontAwesomeIcon onClick={handleDelete} icon="fa-solid fa-trash" />
        </div>
      </div>
    </>
  );
};

export default Reminder;
