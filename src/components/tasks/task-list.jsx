import React from "react";
import TaskItem from "./task-item";

export default function TaskList() {
    return (
        <ul className="task-list stack-large stack-exception"
            aria-labelledby="list-heading">
            <TaskItem name="essen" completed={true} />
            <TaskItem name="schlafen" completed={false} />
            <TaskItem name="arbeiten" completed={false} />
        </ul>
    );
}