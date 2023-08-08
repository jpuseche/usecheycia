function Header() {
    return (
        <header className="flex justify-center bg-gradient-to-r from-[#27374D] to-[#1b2635] py-8 px-5">
            <div className="flex items-center max-w-screen-xl w-full">
                <a className="w-1/2" href="/"><img className="h-8" src="img/header-title.png" alt="titulo encabezado" /></a>
                <ul className="flex flex-row text-lg justify-end text-white gap-10 w-1/2">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/services">Servicios</a></li>
                    <li><a href="/products">Productos</a></li>
                    <li><a href="https://www.instagram.com/usecheycompania/?igshid=NmE0MzVhZDY%3D">Contactenos</a></li>
                </ul>
            </div>
        </header>
    )
};

export default Header;