const publicDir = process.env.PUBLIC_URL;

function Display() {
    return (
        <section id="products" className="flex justify-center lg:h-[calc(100%-150px)] py-20 bg-gradient-to-r from-[#2C74B3] to-[#0A2647] text-white px-5">
            <div className="max-w-screen-xl w-full">
                <h3 className="text-center text-2xl lg:text-4xl font-bold my-4">Productos</h3>
                <h4 className="text-center text-md lg:text-xl">Nuestra Gama de Productos de Tratamiento de Agua para una Calidad Inigualable</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center items-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-xl w-[110px] h-[110px]" href="/products/antifoam">
                            <img className="text-white h-[80px]" src={publicDir + "/img/icons/antifoam.png"} alt="antiespuma"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Antiespumas</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center items-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-xl w-[110px] h-[110px]" href="/products/boiler-chemicals">
                            <img className="text-white h-[70px]" src={publicDir + "/img/icons/boiler-chemical.png"} alt="quimicos calderas"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Químicos para Calderas</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center items-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-xl w-[110px] h-[110px]" href="/products/coagulants">
                            <img className="text-white h-[70px]" src={publicDir + "/img/icons/coagulant.png"} alt="coagulante"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Coagulantes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center items-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-xl w-[110px] h-[110px]" href="/products/desinfectants">
                            <img className="text-white h-[80px]" src={publicDir + "/img/icons/desinfectant.png"} alt="desinfectante"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Desinfectantes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center items-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-xl w-[110px] h-[110px]" href="/products/floculants">
                            <img className="text-white h-[80px]" src={publicDir + "/img/icons/floculants.png"} alt="floculants"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Floculantes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="flex justify-center items-center bg-[#1cbef0] hover:bg-[#3994af] transition rounded-xl w-[110px] h-[110px]" href="/products/oxygen-cleaners">
                            <img className="text-white h-[80px]" src={publicDir + "/img/icons/oxygen-cleaner.png"} alt="temperatura en aumento"></img>
                        </a>
                        <span className="my-3 pt-4 text-lg lg:text-2xl font-semibold">Limpiadores de Oxygeno</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Display;