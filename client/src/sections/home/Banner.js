function Banner() {
    return (
        <section className="flex flex-col bg-gradient-to-r from-[#DFF6FF] to-[#47B5FF]">
            <div className="flex justify-center">
                <div className="flex items-center max-w-screen-xl">
                    <div className="w-full">
                        <h1 className="text-6xl font-bold text-[#27374D] my-4">Expertos en tratamiento de agua</h1>
                        <h2 className="text-4xl text-[#27374D] my-4">Servicios y Productos de calidad!</h2>
                        <div className="my-10">
                            <a className="text-xl bg-[#1cbef0] rounded-lg py-3 px-6 text-white" href="/services">Cuentame mas</a>
                        </div>
                    </div>
                    <img className="rotating" src={process.env.PUBLIC_URL + '/img/whirlpool.png'} alt="whirlpool image"></img>
                </div>
            </div>
            <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="50" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="50" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="50" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="50" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default Banner;