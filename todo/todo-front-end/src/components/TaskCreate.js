import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { addTasks } from '../actions/tasks'

function TaskCreate(props) {
    const [title, setTitle] = useState('');

    function createNewTask() {
        if(title == '') { return; }

        // send the data to the backend to save it
        axios.post("http://localhost:3000/tasks", {title})
            .then(response => {
                props.addTasks(response.data.task)
            })

        setTitle('');
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

  
const mapDispatchToProps = { addTasks }

export default connect(null, mapDispatchToProps)(TaskCreate)