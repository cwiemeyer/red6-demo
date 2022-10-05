import React, {useState} from "react";

/**
 * This component renders a form to edit the Task List.
 */
function TaskForm(props) {
    const [name, setName] = useState('Use hooks!');

    function handleFormChange(event) {
        setName(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
        <form className="new-task-form" onSubmit={handleFormSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-task-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-task-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleFormChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

export default TaskForm;