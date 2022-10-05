import './App.css';
import TaskList from "./components/tasks/task-list";
import TaskForm from "./components/tasks/task-form";
import { useState } from "react";
import { nanoid } from "nanoid";

/**
 * This component functions as a wrapper of the whole App and for components of the App to be rendered within.
 */
function App(props) {
    // Setting constants to cache them for usage inside the app and ensure updating correctly
    const [tasks, setTasks] = useState(props.tasks);
    const allTasks = tasks.length;
    const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
    const headingText = `${allTasks} ${tasksNoun} remaining`;

    const completedTasks = tasks.filter(task => task.completed === true).length;
    const openTasks = allTasks - completedTasks;

    // Adding a new task with this function. Uses nanoid plugin to generate simple unique IDs for tasks
    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };
        setTasks([...tasks, newTask]);
    }

    // Functionality to toggle a task completed (boolean) and mark it as completed via clicking the checkbox form input
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

    // Functionality to edit a task when the "edit"-button is clicked
    function editTask(id, newName) {
        const editedTaskList = tasks.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                //
                return {...task, name: newName}
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    // Functionality to delete a task when "delete"-button is clicked
    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

    // Renders the app with all subcomponents using the state properties
    return (
        <div className="task-app">
            <header>
                <h1>RED6 Demo</h1>
                <h2>Task List App</h2>
            </header>
            <h2 id="list-heading">{headingText}</h2>
            <div className="task-summary">
                <h3 className="task-summary-headline">Tasks total: <b>{allTasks}</b></h3>
                <h3 className="task-summary-headline">Tasks completed: <b>{completedTasks}</b></h3>
                <h3 className="task-summary-headline">Tasks open: <b>{openTasks}</b></h3>
            </div>
            <TaskForm addTask={addTask} />
            <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTaskCompleted={toggleTaskCompleted}
                editTask={editTask}
            />
        </div>
    );
}

export default App;
