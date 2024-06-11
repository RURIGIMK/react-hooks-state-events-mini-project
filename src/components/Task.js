// Task.js
import React from "react";

function Task({ task, onDeleteTask }) {
  const handleDelete = () => {
    onDeleteTask(task.text);
  };

  return (
    <div>
      <div>{task.text}</div>
      <div>{task.category}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
