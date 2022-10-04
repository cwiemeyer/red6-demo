import React from "react";

export default function TaskItem(props) {
    return (
        <li className="task stack-small">
            <div className="c-cb">
                <input id="task-0" type="checkbox" defaultChecked={props.completed} />
                <label className="task-label" htmlFor="task-0">
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
    );
}