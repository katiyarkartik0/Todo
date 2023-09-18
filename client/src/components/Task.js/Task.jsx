import React, { useState } from 'react';
import "./Task.css"
import Button from 'components/Button/Button';
const Task = ({ task, icon, status }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <div className="task">
      <div className="task-header">
        <img src={icon} width="20px" />
        <h3 className="task-title">{task.title}</h3>
        <Button text={isDescriptionOpen ? 'Hide Description' : 'Show Description'} onClickEvent={toggleDescription} />
        <div className='manipulateTask'>
          <select name="status" id="status" className="status-select">
            <option value="completed" className="status-option">Completed</option>
            <option value="pending" className="status-option" selected>Pending</option>
          </select>
          <Button text="Delete" style={{ "margin-left": "5px", "background-color": "red" }} />
          <Button text="Edit" style={{ "margin-left": "5px", "background-color": "green" }}/>
        </div>
      </div>
      {isDescriptionOpen && (
        <p className="task-description">{task.description}</p>
      )}
    </div>
  );
};

export default Task;
