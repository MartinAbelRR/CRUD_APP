
export const Header = () => {
  return (
    <section className="bg-slate-800">
        <nav className="flex justify-between w-[98%] h-16 mx-auto items-center text-white max-w-7xl">            
            <h1 className="font-bold text-3xl">CRUD Django React</h1>            
            <div className="font-bold flex justify-center items-center gap-2">
                <a href="#" className="px-5 py-2 hover:text-green-500 hover:text-3xl hover:transition-all">Producto</a>
                <a href="#" className="px-5 py-2 hover:text-gray-900 hover:text-3xl hover:transition-all">Contacto</a>
                <a href="#" className="px-5 py-2 hover:text-red-500 hover:text-3xl hover:transition-all">Acerca De</a>
            </div>
        </nav>
    </section>
  )
}
