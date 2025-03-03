import React, { useEffect, useState } from "react";
import TasksForm from "../components/TasksForm";

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

  console.log(tasks);

  useEffect(() => {
    fetchTasks();
  }, []);

  const onSubmit = async (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <TasksForm onSubmit={onSubmit} />
    </div>
  );
};

export default Home;
