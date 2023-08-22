function Banner(props) {
    return (
        <section className="flex flex-col py-24 bg-[#DFF6FF]">
            <div className="flex justify-center">
                <div className="flex items-center max-w-screen-xl">
                    <div className="w-[50%] pr-14">
                        <h1 className="text-6xl font-bold text-[#27374D] my-4">{props.title}</h1>
                        <h2 className="text-3xl text-[#27374D] my-4">{props.subtitle}</h2>
                    </div>
                    <div className="w-[50%]">
                        <img className="rounded-xl" width="640px" height="370px" src={props.imageSrc} alt={props.altSrc}></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;