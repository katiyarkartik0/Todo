import React, { useState } from 'react';
import "./CreateTask.css"
import { createTask } from 'api/task';
import { useSelector } from 'react-redux';
import { getAccessToken } from 'helpers/selector';
const CreateTask = ({ onTaskCreate }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const accessToken = useSelector(getAccessToken)

  const handleTaskCreate = async () => {
    if (taskTitle.trim() !== '') {
      const task = { title: taskTitle, description: taskDescription }
      onTaskCreate(task);
      setTaskTitle('');
      setTaskDescription('');
      await createTask({ accessToken, task: { ...task, taskSignature: "LL" } })
    }
  };

  return (
    <div className="create-task-form">
      <h2>Create Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="task-title-input"
      />
      <br></br>
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="task-description-input"
      />
      <br></br>
      <button onClick={handleTaskCreate} className="create-button">
        Create Task
      </button>
    </div>
  );
};

export default CreateTask;
