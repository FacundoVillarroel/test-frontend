import React from "react";

import ListItem from "../listItem/ListItem";

const TasksList = ({ tasks }) => {
  return (
    <div>
      <h3>Tasks List</h3>
      <ul>
        {tasks.map((task) => (
          <ListItem task={task} key={task._id} />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
