import './App.css';
import TaskList from "./components/tasks/task-list";
import TaskForm from "./components/tasks/task-form";
import { useState } from "react";
import { nanoid } from "nanoid";

/**
 * This component functions as a wrapper of the whole App and for components of the App to be rendered within.
 */
function App(props) {
    const [tasks, setTasks] = useState(props.tasks);
    const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
    const headingText = `${tasks.length} ${tasksNoun} remaining`;

    // Adding a new task with this function. Uses nanoid plugin to generate simple unique IDs for tasks
    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };
        setTasks([...tasks, newTask]);
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                // use object spread to make a new object
                // whose `completed` prop has been inverted
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

  return (
    <div className="task-app">
        <header>
            <h1>RED6 Demo</h1>
            <h2>Task List App</h2>
        </header>
        <h2 id="list-heading">{headingText}</h2>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted} />
    </div>
  );
}

export default App;
