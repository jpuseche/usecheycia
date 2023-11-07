function Gallery(props) {
    let cols = props.gallery.length;
    let gridClass = "grid lg:grid-cols-" + cols + " grid-cols-1 max-w-screen-xl lg:px-24 px-20";
    if (props.gallery.length >= 4) {
        gridClass = "grid lg:grid-cols-" + 4 + " grid-cols-1 max-w-screen-xl lg:px-0 px-20";
    };


    return (
        <section className="flex flex-col pb-28 items-center lg:px-5">
            <div className={gridClass}>
                {props.gallery.map(image => (
                    <img key={image.key} className="shadow-xl" src={image.source} alt={image.alt}></img>
                ))}
            </div>
        </section>
    );
};

export default Gallery;