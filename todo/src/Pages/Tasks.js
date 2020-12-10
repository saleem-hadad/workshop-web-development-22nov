import TaskIndex from '../components/TaskIndex';
import TaskCreate from '../components/TaskCreate';

function Tasks() {
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

export default Tasks;