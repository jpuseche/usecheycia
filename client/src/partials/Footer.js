function Footer() {

    let year = new Date().getFullYear();

    return (
        <footer className="flex justify-center my-5 text-[#27374D]">
            Copyright © Useche &amp; cia {year}
        </footer>
    )
};

export default Footer;