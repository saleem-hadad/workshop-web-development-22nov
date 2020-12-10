import React, { useState } from 'react';

import TaskIndex from '../components/TaskIndex';
import TaskCreate from '../components/TaskCreate';

function Tasks() {
    const [tasks, setTasks] = useState([]);

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
        // let newTasks = [...tasks];
        // newTasks.push({
        //     id: '_' + Math.random().toString(36).substr(2, 9),
        //     title: title,
        //     completed: false
        // });
        // setTasks(newTasks);

        setTasks([
            ...tasks, 
            {
                id: '_' + Math.random().toString(36).substr(2, 9),
                title: title,
                completed: false
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