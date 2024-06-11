import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />);

  fireEvent.change(getByLabelText(/task/i), { target: { value: "New Task" } });
  fireEvent.change(getByLabelText(/category/i), { target: { value: "Code" } });
  fireEvent.click(getByText(/add task/i));

  expect(onTaskFormSubmit).toHaveBeenCalledWith({
    text: "New Task",
    category: "Code"
  });
});
