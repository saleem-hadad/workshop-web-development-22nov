import React, { useState } from 'react';

function TaskCreate(props) {
    const [title, setTitle] = useState("");

    function createNewTask() {
        if(title.length > 0) {
            props.createNewTask(title);
            setTitle("");
        }
    }

    return (
        <>
            <div className="flex justify-center">
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Type here.." className="mt-8 p-4 border shadow rounded w-1/2" />
            </div>
            
            <div className="w-1/2 flex justify-end mx-auto">
                <button onClick={createNewTask} className="bg-blue-500 px-4 py-2 rounded shadow mt-4 text-white">Add task</button>
            </div>
        </>
    )
}

export default TaskCreate;