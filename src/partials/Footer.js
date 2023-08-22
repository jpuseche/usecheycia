function Footer() {

    let year = new Date().getFullYear();

    return (
        <footer className="flex justify-center py-5 bg-gradient-to-r from-[#27374D] to-[#1b2635] text-white">
            Copyright © Useche &amp; cia {year}
        </footer>
    )
};

export default Footer;