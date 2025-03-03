import React, { useEffect, useState } from "react";
import TasksForm from "../components/tasksForm/TasksForm";
import TasksList from "../components/tasksList/TasksList";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/tasks");
      if (!response.ok) {
        throw new Error("Error getting tasks");
      }
      const tasks = await response.json();
      setTasks(tasks);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost:8080/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Error saving task");
      }
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TasksForm onSubmit={onSubmit} />
      <TasksList tasks={tasks} />
    </div>
  );
};

export default Home;
