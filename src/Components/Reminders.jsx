import "./Reminders.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  const addReminder = (event) => {
    // create new instance of priorities

    // update(priorityRef, {
    //   // description: event.target.value,
    //   updated: Date.now(),
    // });
    let data = [...reminders, []];
    setReminders(data);
  };

  const handleChange = (event, index) => {
    let inputData = [...reminders];
    inputData[index] = event.target.value;
  };

  const handleDelete = (index) => {
    remove(priorityRef(index));
    let deleteData = [...reminders];
    deleteData.splice(index, 1);
    setReminders(deleteData);
  };
  return (
    <div className="container">
      <h2>
        Reminders
        <button onClick={addReminder}>
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </button>
      </h2>
      <div>
        {reminders.map((reminder, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                value={reminder}
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

export default Reminders;
