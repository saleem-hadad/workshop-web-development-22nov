function Task(props) {
    const { id, title, completed } = props.task;
    let completeButton;


    if(! completed) {
        completeButton = <button onClick={() => props.buttonClicked(id)}><svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg></button>
    }
    
    return (
        <>
            <div className={"border-l-8 w-full justify-between h-20 flex items-center px-4 " + (completed ? "border-green-500" : "border-gray-300")}>
                <p className="text-xl font-bold">{title}</p>

                {completeButton}
            </div>

            <hr/>
        </>
    )
}

export default Task;