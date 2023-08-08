const publicDir = process.env.PUBLIC_URL;

function Services() {
    return (
        <section className="flex justify-center py-16 text-[#27374D]">
            <div class="max-w-screen-xl w-full">
                <h3 class="text-center text-4xl font-bold my-4">Servicios</h3>
                <h4 class="text-center text-xl">Brindamos los mejores servicios para el tratamiento de agua.</h4>
                <div class="grid grid-cols-3 gap-10 place-items-center my-16">
                    <div class="flex flex-col items-center">
                        <a class="flex justify-center bg-[#1cbef0] hover:bg-[#01a4cd] transition rounded-full w-[130px] h-[130px]" href="/services">
                            <img class="text-white" src={publicDir + "/img/icons/flask-solid.svg"} width="50" heigth="50"></img>
                        </a>
                        <span class="my-3 pt-4 text-2xl font-semibold">Agua Osmotizada</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <a class="flex justify-center bg-[#1cbef0] hover:bg-[#01a4cd] transition rounded-full w-[130px] h-[130px]" href="/services">
                            <img class="text-white" src={publicDir + "/img/icons/filter-solid.svg"} width="50" heigth="50"></img>
                        </a>
                        <span class="my-3 pt-4 text-2xl font-semibold">Filtración Y Suavización</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <a class="flex justify-center bg-[#1cbef0] hover:bg-[#01a4cd] transition rounded-full w-[130px] h-[130px]" href="/services">
                            <img class="text-white" src={publicDir + "/img/icons/droplet-solid.svg"} width="40" heigth="40"></img>
                        </a>
                        <span class="my-3 pt-4 text-2xl font-semibold">Clarificación</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <a class="flex justify-center bg-[#1cbef0] hover:bg-[#01a4cd] transition rounded-full w-[130px] h-[130px]" href="/services">
                            <img class="text-white" src={publicDir + "/img/icons/vial-solid.svg"} width="50" heigth="50"></img>
                        </a>
                        <span class="my-3 pt-4 text-2xl font-semibold">Limpieza Química</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <a class="flex justify-center bg-[#1cbef0] hover:bg-[#01a4cd] transition rounded-full w-[130px] h-[130px]" href="/services">
                            <img class="text-white" src={publicDir + "/img/icons/temperature-arrow-down-solid.svg"} width="50" heigth="50"></img>
                        </a>
                        <span class="my-3 pt-4 text-2xl font-semibold">Enfriamiento</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <a class="flex justify-center bg-[#1cbef0] hover:bg-[#01a4cd] transition rounded-full w-[130px] h-[130px]" href="/services">
                            <img class="text-white" src={publicDir + "/img/icons/temperature-arrow-up-solid.svg"} width="50" heigth="50"></img>
                        </a>
                        <span class="my-3 pt-4 text-2xl font-semibold">Calderas</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;