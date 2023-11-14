const publicDir = process.env.PUBLIC_URL;

function Highlights() {
    return (
        <section className="flex py-24 justify-center px-8 md:px-32 lg:px-5">
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:justify-center max-w-screen-xl lg:mr-5 px-5">
                <a className="flex flex-col bg-[#c8eefd] hover:scale-95 transition w-full lg:w-1/3 rounded-xl shadow-xl p-10 cursor-pointer" href="/services/filtration-and-softening">
                    <h3 className="text-2xl lg:text-2xl text-[#27374D] font-semibold mb-5">Échale un ojo a nuestro servicio de filtración</h3>
                    <img className="rounded-xl shadow-xl" src={publicDir + "/img/services/planta_clasificacion_agua.jpg"} alt="filtros multimedia acero inoxidable" ></img>
                </a>
                <a className="flex flex-col bg-[#c8eefd] hover:scale-95 transition w-full lg:w-1/3 rounded-xl shadow-xl p-10 cursor-pointer" href="/services/boilers">
                    <h3 className="text-2xl lg:text-2xl text-[#27374D] font-semibold mb-5">Revisa támbien nuestros servicios para calderas</h3>
                    <img className="rounded-xl shadow-xl" src={publicDir + "/img/services/caldera_acuotubular.jpg"} alt="filtros multimedia acero inoxidable" ></img>
                </a>
            </div>
        </section>
    );
};

export default Highlights;