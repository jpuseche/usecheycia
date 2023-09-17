const publicDir = process.env.PUBLIC_URL;

function Display() {
    return (
        <section id="services" className="flex justify-center py-16 text-[#27374D] px-5">
            <div className="max-w-screen-xl w-full">
                <h3 className="text-center text-2xl lg:text-4xl font-bold my-4">Servicios</h3>
                <h4 className="text-center text-md lg:text-xl">Nuestros servicios de tratamiento de agua garantizan calidad y bienestar</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-full w-[130px] h-[130px]" href="/services/desalinated-water">
                            <img className="text-white" src={publicDir + "/img/icons/flask-solid.svg"} alt="matraz" width="50" heigth="50"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Agua Osmotizada</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-full w-[130px] h-[130px]" href="/services/filtration-and-softening">
                            <img className="text-white" src={publicDir + "/img/icons/filter-solid.svg"} alt="filtro" width="50" heigth="50"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Filtración Y Suavización</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-full w-[130px] h-[130px]" href="/services/clarification">
                            <img className="text-white" src={publicDir + "/img/icons/droplet-solid.svg"} alt="gota de agua" width="40" heigth="40"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Clarificación</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-full w-[130px] h-[130px]" href="/services/chemical-cleaning">
                            <img className="text-white" src={publicDir + "/img/icons/vial-solid.svg"} alt="frasco químico" width="50" heigth="50"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Limpieza Química</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-full w-[130px] h-[130px]" href="/services/cooling">
                            <img className="text-white" src={publicDir + "/img/icons/temperature-arrow-down-solid.svg"} alt="temperatura en descenso" width="60" heigth="60"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Enfriamiento</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-full w-[130px] h-[130px]" href="/services/boilers">
                            <img className="text-white" src={publicDir + "/img/icons/temperature-arrow-up-solid.svg"} alt="temperatura en aumento" width="60" heigth="60"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Calderas</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Display;