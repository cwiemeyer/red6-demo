import './App.css';
import TaskList from "./components/tasks/task-list";

/**
 * This component functions as a wrapper of the whole App and for components of the App to be rendered within.
 */
function App(props) {
  return (
    <div className="App">
      <header>
        <h1>RED6 Demo</h1>
        <h2>Task List App</h2>
      </header>
      <TaskList tasks={props.tasks} />
    </div>
  );
}

export default App;
