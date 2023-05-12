import { CardTask } from './CardTask'

export const ListTasksPending = ({ tasks, setTasks }) => {
    
    const tasksPending = tasks.filter((task) => task.status == false )


    return (
        <>
            <h2 className='text-2xl mb-3'>Tareas Pendientes</h2>
            {
                tasksPending.length > 0
                ? (
                    tasksPending?.map(task =>
                        <CardTask task={task} tasks={tasks} setTasks={ setTasks } key={ task.id }/>
                    )
                )
                : (
                    <h3>No hay tareas pendientes</h3>
                )
            }
        </>
    )
}
