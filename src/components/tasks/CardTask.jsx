import React from 'react'

export const CardTask = ({ task, setTasks, tasks }) => {
    
    const handleChange = () => {
        task.status = !task.status 
        const newArrayTask =  tasks.filter((taskItem) => 
            taskItem.id != task.id
        );
        setTasks([...newArrayTask, task]);

    }

    return (
        <form 
            className='hover:shadow-lg w-full md:w-1/2 
            py-3 px-5 mb-5 
            rounded-lg transition-all 
            hover:scale-105 flex gap-2'
        >
            <input 
                type="checkbox" 
                value={ task.id }  
                checked={ task.status }
                onChange={ handleChange }
            />
            <div>
                <h3 className='font-medium text-xl'>
                    {task.title}
                </h3>
                <p className='font-light'>
                    { task.description }
                </p>
            </div>
        </form>
    )
}
