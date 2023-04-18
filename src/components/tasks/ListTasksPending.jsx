import { CardTask } from './CardTask'

export const ListTasksPending = ({ tasks, setTasks }) => {
    return (
        <>
            <h2 className='text-2xl mb-3'>Tareas Pendientes</h2>
            {
                tasks?.map(task => {
                    if( !task.status ){
                        return <CardTask task={task} tasks={tasks} setTasks={ setTasks } key={ task.id }/>
                    }
                })
            }
        </>
    )
}
