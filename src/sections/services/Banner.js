const publicDir = process.env.PUBLIC_URL;

function Banner() {
    return (
        <section className="flex flex-col py-24 bg-[#DFF6FF]">
            <div className="flex justify-center">
                <div className="flex items-center max-w-screen-xl">
                    <div className="w-[50%] pr-14">
                        <h1 className="text-6xl font-bold text-[#27374D] my-4">Agua Osmotizada</h1>
                        <h2 className="text-4xl text-[#27374D] my-4">Agua Pura y Saludable para tu Hogar u Oficina</h2>
                    </div>
                    <div className="w-[50%]">
                        <img className="rounded-xl" src={publicDir + "/img/services/img-osmotizada.jpeg"} alt="agua osmotizada"></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;