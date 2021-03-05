import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

function Task(props) {
    return (
        <div className="task">
            <h3>{props.task.text} <FaTimes onClick={()=> props.onDelete(props.task.id)} style={{color:"red", cursor:"pointer"}}/></h3>
            <p>{props.task.day}</p>
        </div>
    )
}

export default Task

