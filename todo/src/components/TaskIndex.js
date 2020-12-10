import React, { useState } from 'react';

import Task from './Task';

function TaskIndex() {
    const [tasks, setTasks] = useState([
        {
            title: "Learn HTML",
            completed: true
        },
        {
            title: "Learn React",
            completed: false
        },
        {
            title: "Learn CSS",
            completed: true
        }
    ]);

    const tasksList = tasks.map(task => {
        return <Task title={task.title} completed={task.completed} />
    })
    
    return (
        <div className="mt-6 bg-white shadow w-1/2 mx-auto">
          {tasksList}
        </div>
    )
}

export default TaskIndex; 