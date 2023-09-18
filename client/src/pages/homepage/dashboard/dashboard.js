import CreateTask from "components/CreateTask/CreateTask";
import Task from "components/Task.js/Task";
import React, { useEffect, useState } from "react";
import "./dashboard.css";
import pendingClock from "utils/icons/pendingClock.png";
import completed from "utils/icons/completedIcon.png";
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

  const renderTasks = () => {
    const completedTasks = [];
    const pendingTasks = [];
    tasks.forEach((task, index) => {
      if (task.isCompleted) {
        completedTasks.push(
          <Task key={index} task={task} status="Completed" icon={completed} />
        );
      } else {
        pendingTasks.push(
          <Task key={index} task={task} status="Pending" icon={pendingClock} />
        );
      }
    });
    return (
      <div className="task-list">{[...pendingTasks, ...completedTasks]}</div>
    );
  };

  return (
    <div className="dashboard">
      <CreateTask onTaskCreate={handleTaskCreate} />
      <br></br>
      {renderTasks()}
    </div>
  );
};

export default Dashboard;
