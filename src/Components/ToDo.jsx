import { useState } from "react";
import { update, ref, remove } from "firebase/database";
import "./ToDo.scss";
import { firebase } from "./firebase";

const ToDo = () => {
  const [toDo, setToDo] = useState([]);

  const addToDo = (event) => {
    // create new instance of priorities

    // update(priorityRef, {
    //   // description: event.target.value,
    //   updated: Date.now(),
    // });
    let data = [...toDo, []];
    setToDo(data);
  };

  const handleChange = (event, index) => {
    let inputData = [...toDo];
    inputData[index] = event.target.value;
  };

  const handleDelete = (index) => {
    remove(priorityRef(index));
    let deleteData = [...toDo];
    deleteData.splice(index, 1);
    setPriorities(deleteData);
  };

  return (
    <div className="to-do span-2-row">
      <h2>
        To Do
        <button onClick={addToDo}></button>
      </h2>
      <div className="to-do-background">
        {toDo.map((data, index) => {
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

export default ToDo;
