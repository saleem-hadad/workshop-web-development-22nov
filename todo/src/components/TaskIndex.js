import Task from './Task';

function TaskIndex(props) {
    const tasksList = props.tasks.map(task => {
        return <Task key={task.id} task={task} buttonClicked={(id) => props.buttonClicked(id)} />
    })
    
    return (
        <div className="mt-6 bg-white shadow w-1/2 mx-auto">
          {tasksList}
        </div>
    )
}

export default TaskIndex; 