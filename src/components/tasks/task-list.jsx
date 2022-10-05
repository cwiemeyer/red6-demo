import React from "react";
import TaskItem from "./task-item";

/**
 * This component renders a container as a list for compilation of TaskItem components to be displayed.
 */
function TaskList(props) {
    // Iterating over the tasks and render a single TaskItem component for each single task
    const taskList = props.tasks && props.tasks.map((task) => (
        <TaskItem
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={props.toggleTaskCompleted}
            deleteTask={props.deleteTask}
            editTask={props.editTask}
        />
    ));

    // Rendering the task list component that contains the task items with this component template markup
    return (
        <ul
            className="task-list stack-large stack-exception"
            aria-labelledby="list-heading"
        >
            { taskList }
        </ul>
    );
}

export default TaskList;