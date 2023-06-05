class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="/"><img src="assets/img/navbar-title.png" alt="..." /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="/services">Servicios</a></li>
                        <li class="nav-item"><a class="nav-link" href="/products">Productos</a></li>
                        <!--
                            <li class="nav-item"><a class="nav-link" href="#">Nosotros</a></li>
                        -->
                        <li class="nav-item"><a class="nav-link" href="https://www.instagram.com/usecheycompania/?igshid=NmE0MzVhZDY%3D">Contactenos</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
    }
}

class Modal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="portfolio-modal modal fade" id=${this.getAttribute("modal-id")} tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="text-uppercase text-center modal-title-text">${this.getAttribute("modal-title")}</div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <img class="img-fluid d-block mx-auto modal-image" src="${this.getAttribute("modal-image")}" alt="..." />
                                    ${this.getAttribute("modal-data")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

var today = new Date();
var year = today.getFullYear();
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer py-4 fixed-bottom bg-white">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Copyright &copy; Useche & cia `+ year +`</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="https://www.instagram.com/usecheycompania/?igshid=NmE0MzVhZDY%3D" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <!--
                        <div class="col-lg-4 text-lg-end">
                            <a class="link-dark text-decoration-none me-3" href="#!">Política de Privacidad</a>
                            <a class="link-dark text-decoration-none" href="#!">Términos de Uso</a>
                        </div>
                    -->
                </div>
            </div>
        </footer>
        `;
    }
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

customElements.define('main-header', Header);
customElements.define('main-modal', Modal);
customElements.define('main-footer', Footer);