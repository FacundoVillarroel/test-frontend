import React from "react";

import { ItemContainer, H4, P, Button } from "./listItem.styles";

const ListItem = ({ task, setEditTask, onDelete }) => {
  return (
    <ItemContainer key={task._id}>
      <H4>Title: </H4>
      <P>{task.title}</P>
      <H4>Description: </H4>
      <P>{task.description}</P>
      <Button onClick={() => setEditTask(task)}>Edit</Button>
      <Button onClick={() => onDelete(task._id)}>Delete</Button>
    </ItemContainer>
  );
};

export default ListItem;
