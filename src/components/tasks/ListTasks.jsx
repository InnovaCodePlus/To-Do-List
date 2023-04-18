import React from 'react'
import { CardTask } from './'

export const ListTasks = ({ tasks }) => {
    return (
        <>
            {
                tasks.map(task => ( 
                    <CardTask task={ task }/>
                ))  
            }
        </>
    )
}
