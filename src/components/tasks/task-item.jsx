import React, {useState} from "react";

/**
 * This component renders a single task item to be displayed within the TaskList component.
 */
function TaskItem(props) {
    // Handling the editing mode and name update of the component via state
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleNameChange(event) {
        setNewName(event.target.value);
    }

    function handleNameSubmit(event) {
        event.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    // Template markup of component for editing state
    const editingTemplate = (
        <form className="stack-small" onSubmit={handleNameSubmit}>
            <div className="form-group">
                <label className="task-label" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input
                    id={props.id}
                    className="task-text"
                    type="text"
                    value={newName}
                    onChange={handleNameChange}
                />
            </div>
            <div className="btn-group">
                <button type="button" className="btn task-cancel" onClick={() => setEditing(false)}>
                    Cancel
                    <span className="visually-hidden">renaming {props.name}</span>
                </button>
                <button type="submit" className="btn btn__primary task-edit">
                    Save
                    <span className="visually-hidden">new name for {props.name}</span>
                </button>
            </div>
        </form>
    );

    // Template markup of component for viewing state
    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="task-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setEditing(true)}>
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );
    
    // Conditional rendering the component template markup here in relation to it's state: editing or viewing mode
    return (
        <li className="task">{isEditing ? editingTemplate : viewTemplate}</li>
    );
}

export default TaskItem;