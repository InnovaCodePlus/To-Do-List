import { useState } from 'react'
import { tasksConstants } from './constants';

import { MainLayout } from './Layouts/MainLayout'
import { ListTasksCompleted, ListTasksPending } from './components'

const App = () => {

    const [tasks, setTasks] = useState( tasksConstants );


    return (
        <MainLayout>
            <ListTasksPending tasks={ tasks } setTasks={ setTasks }/>
            <ListTasksCompleted tasks={ tasks } setTasks={ setTasks }/>
        </MainLayout>
    )
}

export default App