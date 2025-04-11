document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".overlay");
    const closeIcon = document.querySelector(".close-menu");
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    // Esconder header al hacer scroll hacia abajo, reaparece hacia arriba
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 150) {
            // Scroll hacia abajo
            header.classList.add('hide');
        } else {
            // Scroll hacia arriba
            header.classList.remove('hide');
        }

        lastScrollY = currentScrollY;
    });


    // Ajustar Paddings de main y sidebar para poder tener el header fixed
    window.addEventListener('load', adjustMainPadding);
    window.addEventListener('resize', adjustMainPadding);

    if (document.querySelector(".sidebar")) {
        window.addEventListener('load', adjustSidebarPadding);
        window.addEventListener('resize', adjustSidebarPadding);
    }


    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
        menuToggle.setAttribute('aria-expanded', 'true'); // Actualizar aria-expanded a true
    });

    // Función para cerrar el menú al hacer clic en la "X"
    closeIcon.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false'); // Actualizar aria-expanded a false
    });

    // Cerrar menú al hacer clic en el fondo borroso
    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false'); // Actualizar aria-expanded a false
    });

    // Cerrar el menú y quitar fondo borroso al hacer click en cualquier link del menu
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false'); // Actualizar aria-expanded a false
        });
    });

    /* Quitar active a menu desplegable y fondo borroso 
     al cambiar a un tamaño grande de pantalla > 1024 */
    window.addEventListener("resize", function () {
        if (window.innerWidth > 1024) { // Ajusta según tu breakpoint
            menu.classList.remove("active"); // Oculta el menú
            overlay.classList.remove("active"); // Quita fondo borroso
            menuToggle.setAttribute('aria-expanded', 'false'); // Actualizar aria-expanded a false
        }
    });
});

function adjustMainPadding() {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const headerHeight = header.offsetHeight;
    main.style.paddingTop = `${headerHeight}px`;
}

function adjustSidebarPadding() {
    const header = document.querySelector('.header');
    const sidebar = document.querySelector('.sidebar');
    const headerHeight = header.offsetHeight;
    sidebar.style.paddingTop = `${headerHeight}px`;
}