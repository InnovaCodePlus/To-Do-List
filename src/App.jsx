import { useEffect, useState } from 'react'

import { MainLayout } from './Layouts/MainLayout'
import { FormTask, ListTasksCompleted, ListTasksPending } from './components'

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getAllTasksFromLS = () => {
            const tasksLocalStorage = JSON.parse(localStorage.getItem('tasks')) ?? [];
            setTasks( tasksLocalStorage );
        }

        getAllTasksFromLS();
    }, [])
       

    return (
        <MainLayout>
            <FormTask tasks={ tasks } setTasks={ setTasks }/>
            <ListTasksPending tasks={ tasks } setTasks={ setTasks }/>
            <ListTasksCompleted tasks={ tasks } setTasks={ setTasks }/>     
        </MainLayout>
    )
}

export default App