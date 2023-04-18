import React from 'react'

export const FormTask = () => {
    return (
        <form className='p-5 mb-7 md:p-10 w-full md:w-1/2 bg-white shadow-lg rounded-xl'>
            <div className='flex flex-col'>
                <label>Titulo</label>
                <input type="text" className='border border-gray-400 rounded-xl px-5 py-2'/>
            </div>

            <div className='flex flex-col'>
                <label>Descripcion</label>
                <textarea name="" id="" className='border border-gray-400 rounded-xl px-5 py-2'></textarea>
            </div>

            <input 
                type="submit"  
                value="Agregar Tarea" 
                className='bg-indigo-600 text-white p-3 w-full mt-4 rounded-xl hover:bg-indigo-700 transition-all cursor-pointer'
            />


        </form>
    )
}
