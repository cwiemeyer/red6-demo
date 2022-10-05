import React, {useState} from "react";

/**
 * This component renders a form to edit the Task List.
 */
function TaskForm(props) {
    // Handling the name of each task with the component via state
    const [name, setName] = useState('');

    // Handling the change event of the form
    function handleFormChange(event) {
        setName(event.target.value);
    }

    // Handling the submitting event of the form
    function handleFormSubmit(event) {
        event.preventDefault();
        props.addTask(name);
        setName("");
    }

    // Rendering the form component with this component template markup
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