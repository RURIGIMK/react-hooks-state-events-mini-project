import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  // Add your component logic here

  return (
    <div>
      <h1>Task List</h1>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={TASKS} />
    </div>
  );
}

export default App;
