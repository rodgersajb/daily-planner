import "./Priorities.scss";
import { useState, useContext, useEffect } from "react";
import { update, remove, ref, onValue } from "firebase/database";
import { firebase, db } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../Contexts/AuthContext";

const Priorities = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  // database reference

  const priorityRef = ref(db, "users/" + currentUser.uid + "/priorities");
  //update database
  // priorities, setPriorities in state
  // add new priority button
  // map through priorities in return

  // button on click will create a priority with radio button
  // if radio button checked then priority task is removed

  useEffect(() => {
    onValue(priorityRef, (snapshot) => {
      const data = snapshot.val();
    });
  }, []);

  const [priorities, setPriorities] = useState([]);

  const addPriority = (event) => {
    // create new instance of priorities

    update(priorityRef, {
      updated: Date.now(),
    });

    let priority = [...priorities];
    setPriorities(priority);
  };

  const handleChange = (event, index) => {
    let inputData = [...priorities];
    inputData[index] = event.target.value;
  };

  const handleDelete = (index) => {
    // remove(priorityRef(index));
    let deleteData = [...priorities];
    deleteData.splice(index, 1);
    setPriorities(deleteData);
  };

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
            <div key={index}>
              <input
                type="text"
                // value={priority}
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

// {
//   "rules": {
//     "users": {
//       "$uid": {
//         ".read": "$uid === auth.uid",
//         ".write": "$uid === auth.uid"
//       }
//     }
//   }
// }
