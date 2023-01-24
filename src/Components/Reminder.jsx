import { useContext } from "react";
import { db } from "./firebase";
import { remove, ref } from "firebase/database";
import { AuthContext } from "../Contexts/AuthContext";

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
        <button onClick={handleDelete}>Remove</button>
      </div>
    </>
  );
};

export default Reminder;