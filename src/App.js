import './App.css';
import TaskList from "./components/tasks/task-list";
import TaskForm from "./components/tasks/task-form";

/**
 * This component functions as a wrapper of the whole App and for components of the App to be rendered within.
 */
function App(props) {
  return (
    <div className="task-app">
        <header>
            <h1>RED6 Demo</h1>
            <h2>Task List App</h2>
        </header>
        <TaskForm />
        <TaskList tasks={props.tasks} />
    </div>
  );
}

export default App;
