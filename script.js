document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".overlay");
    const closeIcon = document.querySelector(".close-menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Función para cerrar el menú al hacer clic en la "X"
    closeIcon.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove('active');
    });

    // Cerrar menú al hacer clic en el fondo borroso
    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Cerrar el menú y quitar fondo borroso al hacer click en cualquier link del menu
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
    
});