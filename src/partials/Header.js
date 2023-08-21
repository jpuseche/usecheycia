const publicDir = process.env.PUBLIC_URL;

function Header() {
    return (
        <header className="flex justify-center bg-gradient-to-r from-[#27374D] to-[#1b2635] py-8 px-5">
            <div className="flex items-center max-w-screen-xl w-full">
                <a className="w-1/2" href="/"><img className="h-8" src={publicDir + "/img/header-title.png"} alt="titulo encabezado" /></a>
                <div className="flex flex-row text-lg justify-end text-white gap-10 w-1/2">
                    <a className="hover:text-[#1cbef0] transition" href="/">Inicio</a>
                    <a className="hover:text-[#1cbef0] transition" href="/services">Servicios</a>
                    <a className="hover:text-[#1cbef0] transition" href="/products">Productos</a>
                    <a className="hover:text-[#1cbef0] transition" href="https://www.instagram.com/usecheycompania/?igshid=NmE0MzVhZDY%3D">Contactenos</a>
                </div>
            </div>
        </header>
    )
};

export default Header;