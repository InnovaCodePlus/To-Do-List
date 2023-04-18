import React from 'react'
import { CardTask } from '.'

export const ListTasksCompleted = ({ tasks, setTasks }) => {
    return (
        <>
            <h2>Tareas completas</h2>
            {
                tasks?.map(task => {
                    if( task.status ){
                        return <CardTask task={task} tasks={tasks}  setTasks={ setTasks } key={ task.id }/>
                    }
                })
            }
        </>
    )
}
