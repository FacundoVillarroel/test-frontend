import React from "react";

import { ItemContainer, H4, P, Button } from "./listItem.styles";

const ListItem = ({ task }) => {
  return (
    <ItemContainer key={task._id}>
      <H4>Title: </H4>
      <P>{task.title}</P>
      <H4>Description: </H4>
      <P>{task.description}</P>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </ItemContainer>
  );
};

export default ListItem;
