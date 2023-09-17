function Footer() {

    let year = new Date().getFullYear();

    return (
        <footer className="flex justify-center py-5 md:fixed md:bottom-0 w-full bg-gradient-to-r from-[#27374D] to-[#1b2635] text-white z-10">
            Copyright © Useche &amp; cia {year}
        </footer>
    )
};

export default Footer;