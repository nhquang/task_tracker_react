import React, { useState } from 'react'
import { userState } from 'react'
import Task from './Task'


function Tasks(props) {
    
    return (
        <>
          {props.tasks.map((task) => (
              <Task key = {task.id} task = {task} onToggleReminder = {props.onToggleReminder} onDelete = {props.onDelete}/>
          ))}  
        </>
    )
}

export default Tasks

