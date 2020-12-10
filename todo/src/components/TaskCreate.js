function TaskCreate() {
    return (
        <>
            <div className="flex justify-center">
            <input type="text" placeholder="Type here.." className="mt-8 p-4 border shadow rounded w-1/2" />
            </div>
            
            <div className="w-1/2 flex justify-end mx-auto">
            <button className="bg-blue-500 px-4 py-2 rounded shadow mt-4 text-white">Add task</button>
            </div>
        </>
    )
}

export default TaskCreate;