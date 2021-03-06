import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'

function AddTask(props) {
    const [text, setText] = useState("");
    const [datetime, setDatetime] = useState("");
    const [reminder, setReminder] = useState(false);
    let onSubmit = (e) => {
        if(!text) { alert("Please add a task name!!!"); return;} 
    };
    return (
        <form className = "add-form" onSubmit={onSubmit}>
            <div className = "form-control">
                <label>Task</label>
                <input type="text" placeholder="Task name" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className = "form-control">
                <label>Date and Time</label>
                <input type="text" placeholder="Task date and time" value={datetime} onChange={(e) => setDatetime(e.target.value)}/>
            </div>
            <div className = "form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value ="Save" className="btn btn-block"/>
        </form>
    )
}

AddTask.propTypes = {

}

export default AddTask

