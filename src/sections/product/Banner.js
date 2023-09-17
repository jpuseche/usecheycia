function Banner(props) {
    return (
        <section className="flex flex-col py-24 bg-gradient-to-r from-[#2C74B3] to-[#0A2647] px-5">
            <div className="flex justify-center">
                <div className="flex flex-col lg:flex-row items-center max-w-screen-xl">
                    <div className="flex flex-col items-center lg:items-start lg:w-[50%] pb-8 lg:pr-14">
                        <h1 className="text-4xl lg:text-6xl text-center lg:text-start font-bold text-white my-4">{props.title}</h1>
                        <h2 className="text-2xl lg:text-3xl text-center lg:text-start text-white my-4">{props.subtitle}</h2>
                    </div>
                    <div className="lg:w-[50%]">
                        <img className="rounded-xl shadow-xl" width="640px" height="370px" src={props.imageSrc} alt={props.imageAlt}></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;