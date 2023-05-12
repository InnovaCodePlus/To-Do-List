import React from 'react'
import { CardTask } from '.'

export const ListTasksCompleted = ({ tasks, setTasks }) => {

    const tasksCompleted = tasks.filter((task) => task.status == true )


    return (
        <>
            <h2 className='text-2xl mb-3'>Tareas completas</h2>
            {
                tasksCompleted.length > 0
                ? (
                    tasksCompleted?.map(task => 
                        // if( task.status ){
                            <CardTask task={task} tasks={tasks}  setTasks={ setTasks } key={ task.id }/>
                        // }
                    )

                )
                : (
                    <h3>No se completo ninguna tarea aun</h3>
                )
            }
        </>
    )
}
