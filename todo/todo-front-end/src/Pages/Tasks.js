import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TaskIndex from '../components/TaskIndex';
import TaskCreate from '../components/TaskCreate';

function Tasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/tasks")
            .then(response => {
                setTasks(response.data.tasks);
            })
    })

    function markAsCompleted(id) {
        let newTasks = tasks.map(task => {
            if(task.id === id) {
                task.completed = true;
            }

            return task;
        })
        
        setTasks(newTasks);
    }

    function createNewTask(title) {
        // send the data to the backend to save it
        fetch("http://localhost:3000/tasks", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title
            })
        });

        setTasks([
            ...tasks, 
            {
                id: '_' + Math.random().toString(36).substr(2, 9),
                title: title,
                is_completed: false
            }
        ])
    }

    return (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full">
                <h1 className="text-3xl text-center font-bold text-gray-800">
                    Tasks to do
                </h1>

                <TaskIndex tasks={tasks} buttonClicked={markAsCompleted} />

                <TaskCreate createNewTask={createNewTask} />
            </div>
        </div>
    )
}

export default Tasks;