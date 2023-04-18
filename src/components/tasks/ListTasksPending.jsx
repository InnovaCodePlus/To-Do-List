import { CardTask } from './CardTask'

export const ListTasksPending = ({ tasks, setTasks }) => {
    return (
        <>
            <h2>Tareas Pendientes</h2>
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
