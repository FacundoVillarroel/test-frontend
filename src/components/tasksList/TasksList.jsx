import React from "react";

import ListItem from "../listItem/ListItem";

const TasksList = ({ tasks, setEditTask, onDelete }) => {
  return (
    <div>
      <h3>Tasks List</h3>
      <ul>
        {tasks.map((task) => (
          <ListItem
            task={task}
            key={task._id}
            setEditTask={setEditTask}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
