import "./Priorities.scss";
import { useState, useContext } from "react";
import { update, remove, ref } from "firebase/database";
import { firebase, db } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../Contexts/AuthContext";

const Priorities = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  console.log(currentUser, "PRIORITIES");
  // database reference

  // const priorityRef = ref(db, "users/" + user.id + "/priorities");
  //update database
  // priorities, setPriorities in state
  // add new priority button
  // map through priorities in return

  // button on click will create a priority with radio button
  // if radio button checked then priority task is removed
  const [priorities, setPriorities] = useState([]);

  const addPriority = (event) => {
    // create new instance of priorities

    // update(priorityRef, {
    //   // description: event.target.value,
    //   updated: Date.now(),
    // });
    let data = [...priorities, []];
    setPriorities(data);
  };

  const handleChange = (event, index) => {
    let inputData = [...priorities];
    inputData[index] = event.target.value;
  };

  const handleDelete = (index) => {
    remove(priorityRef(index));
    let deleteData = [...priorities];
    deleteData.splice(index, 1);
    setPriorities(deleteData);
  };

  console.log(priorities, "PRIORITIES");

  return (
    <div className="container">
      <h2>
        Top Priorities
        <button onClick={addPriority}>
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </button>
      </h2>
      <div>
        {priorities.map((priority, index) => {
          return (
            <div>
              <input
                type="text"
                onChange={(event) => handleChange(event, index)}
              />
              <button onClick={() => handleDelete(index)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Priorities;
