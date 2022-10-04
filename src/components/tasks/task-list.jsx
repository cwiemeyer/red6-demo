import React from "react";
import TaskItem from "./task-item";

/**
 * This component renders a container as a list for compilation of TaskItem components to be displayed.
 */
function TaskList(props) {
    const taskList = props.tasks.map((task) => (
        <TaskItem
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
        />
    ));

    return (
        <ul className="task-list stack-large stack-exception"
            aria-labelledby="list-heading">
            { taskList }
        </ul>
    );
}

export default TaskList;