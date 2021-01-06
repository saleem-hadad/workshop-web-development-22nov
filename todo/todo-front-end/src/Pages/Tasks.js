import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

import { addTasks } from '../actions/tasks'
import TaskIndex from '../components/TaskIndex';
import TaskCreate from '../components/TaskCreate';

function Tasks(props) {
    const [isIntialDataLoad, setIsIntialDataLoad] = useState(false);

    useEffect(() => {
        if(! isIntialDataLoad) {
            axios.get("http://localhost:3000/tasks")
            .then(response => {
                props.addTasks(response.data.tasks)
            })
            setIsIntialDataLoad(true)
        }
    })

    return (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full">
                <h1 className="text-3xl text-center font-bold text-gray-800">
                    Tasks to do
                </h1>

                <TaskIndex />

                <TaskCreate />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      tasks: state,
    }
  }
  
const mapDispatchToProps = { addTasks }

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)