import React, { useState } from "react";

const initialState = {
  title: "",
  description: "",
};

const TasksForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialState);

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onHandeSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={onHandeSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type={"text"}
        value={formData.title}
        onChange={onHandleChange}
        name="title"
        required
      />
      <label htmlFor="description">Description</label>
      <input
        type={"text"}
        value={formData.description}
        onChange={onHandleChange}
        name="description"
        required
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TasksForm;
