import React from "react";

const TasksList = ({ tasks }) => {
  return (
    <div>
      <h3>Tasks List</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h4>Title: </h4>
            <p>{task.title}</p>
            <h4>Description: </h4>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
