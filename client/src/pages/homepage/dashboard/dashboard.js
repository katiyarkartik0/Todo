import CreateTask from "components/CreateTask/CreateTask";
import Task from "components/Task.js/Task";
import React, { useCallback, useEffect, useState } from "react";
import "./dashboard.css";
import { fetchTasks } from "api/task";
import { useSelector } from "react-redux";
import { getAccessToken } from "helpers/selector";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const accessToken = useSelector(getAccessToken);

  useEffect(() => {
    const getTasks = async () => {
      await fetchTasks(accessToken)
        .then(async (res) => {
          const { tasks } = await res.json();
          setTasks(tasks);
        })
        .catch((err) => alert(err));
    };
    getTasks();
  }, [accessToken]);

  const handleTaskCreate = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const renderTasks = useCallback(() => {
    const completedTasks = [];
    const pendingTasks = [];
    tasks.forEach((task, index) => {
      const { isCompleted, taskSignature } = task;
      if (isCompleted) {
        completedTasks.push(
          <Task key={taskSignature} task={task} status="Completed" />
        );
      } else {
        pendingTasks.push(
          <Task key={taskSignature} task={task} status="Pending" />
        );
      }
    });
    return (
      <div className="task-list">{[...pendingTasks, ...completedTasks]}</div>
    );
  }, [tasks]);

  return (
    <div className="dashboard">
      <CreateTask onTaskCreate={handleTaskCreate} />
      <br></br>
      {renderTasks()}
    </div>
  );
};

export default Dashboard;
