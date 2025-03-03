import React, { useEffect, useState } from "react";
import TasksForm from "../components/tasksForm/TasksForm";
import TasksList from "../components/tasksList/TasksList";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

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
      //if ID then send PUT to update
      if (formData._id) {
        const response = await fetch(
          `http://localhost:8080/api/tasks/${formData._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: formData.title,
              description: formData.description,
            }),
          }
        );
        const edittedTask = await response.json();

        const updatedTasksList = tasks.map((task) => {
          if (task._id === edittedTask._id) {
            return edittedTask;
          } else {
            return task;
          }
        });
        setTasks(updatedTasksList);
        setEditTask(null);
        //If new task send POST to save it
      } else {
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/tasks/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error deleting task");
      }
      await response.json();
      const newTasksList = tasks.filter((task) => task._id !== id);
      setTasks(newTasksList);
      window.alert("Task deleted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TasksForm onSubmit={onSubmit} editTask={editTask} />
      <TasksList tasks={tasks} setEditTask={setEditTask} onDelete={onDelete} />
    </div>
  );
};

export default Home;
