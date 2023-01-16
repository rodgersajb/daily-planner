import { useState } from "react";
import "./Notes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (event) => {
    // create new instance of priorities

    // update(priorityRef, {
    //   // description: event.target.value,
    //   updated: Date.now(),
    // });
    let data = [...notes, []];
    setNotes(data);
  };

  const handleChange = (event, index) => {
    let inputData = [...notes];
    inputData[index] = event.target.value;
  };

  const handleDelete = (index) => {
    remove(priorityRef(index));
    let deleteData = [...notes];
    deleteData.splice(index, 1);
    setNotes(deleteData);
  };
  return (
    <div className="notes span-2-col">
      <h2>
        Notes
        <button onClick={addNote}>
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </button>
      </h2>
      <div className="notes-background">
        {notes.map((note, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                value={note}
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

export default Notes;
