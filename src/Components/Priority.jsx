import { useContext } from "react";
import { db } from "./firebase";
import { ref, remove } from "firebase/database";
import { AuthContext } from "../Contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

const Priority = (props) => {

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'priority',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))
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
      <div className="priority-entry"
      drag={ref}>
        <p>{props.description}</p>
        <div className="garbage">
          <FontAwesomeIcon onClick={handleDelete} icon="fa-solid fa-trash" />
        </div>
      </div>
    </>
  );
};

export default Priority;
