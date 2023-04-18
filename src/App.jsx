import { useState } from 'react'
import { tasksConstants } from './constants';

import { MainLayout } from './Layouts/MainLayout'
import { ListTasks } from './components'

const App = () => {

    const [tasks, setTasks] = useState( tasksConstants );


    return (
        <MainLayout>
            <ListTasks tasks={ tasks }/>
        </MainLayout>
    )
}

export default App