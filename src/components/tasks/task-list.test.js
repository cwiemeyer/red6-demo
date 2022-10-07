import { render, fireEvent, screen } from "@testing-library/react";
import TaskList from "./task-list";

// Mocking backend data object of tasks for task list component
const TESTDATA = [
    { id: "todo-0", name: "Work", completed: true },
    { id: "todo-1", name: "Push", completed: false },
    { id: "todo-2", name: "Test", completed: false }
];

//test block
test("renders task list component", () => {
// render the component with the whole app on virtual dom
    render(<TaskList tasks={TESTDATA} />);

//select the elements you want to interact with
    const taskList = screen.getByTestId("task-list");

//assert the expected result
    expect(taskList).toBeInTheDocument();
});

//test block
test("renders task items according to mocked data", () => {
// render the component with the whole app on virtual dom
    render(<TaskList tasks={TESTDATA} />);

//select the first found element of task item
    const taskItem = screen.queryAllByTestId("task-item")[0];

//assert the expected result;
    expect(taskItem).toBeInTheDocument();
});