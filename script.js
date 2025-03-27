document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".overlay");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en el fondo borroso
    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });
});