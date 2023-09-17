function Summary(props) {
    return (
        <section className="flex flex-col items-center py-24 px-5">
            <div className="max-w-screen-xl text-[#27374D] font-bold mb-2">
                Servicio de {props.title}
            </div>
            <div className="max-w-screen-xl text-[#27374D]">
                {props.summary}
            </div>
        </section>
    );
};

export default Summary;