

export const MainLayout = ({ children }) => {
    return (
        <main className="p-5 md:p-8 lg:p-14 flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl md:text-5xl mb-5">Mi listado de tareas</h1>           
            { children }
        </main>
    )
}
