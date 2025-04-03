function updateAdImages() {
    const ads = document.querySelectorAll(".ad img");
    const isDesktop = window.innerWidth >= 768;

    ads.forEach(img => {
        img.src = isDesktop 
            ? "img/300x600.svg" // Imagen vertical
            : "img/300x150.svg"; // Imagen horizontal
        
        // Espera a que la imagen se cargue antes de hacerla visible
        img.onload = () => {
            img.style.visibility = "visible";
        };
    });
}

// Ejecutar al cargar y cuando se cambie el tamaño de la pantalla
window.addEventListener("load", updateAdImages);
window.addEventListener("resize", updateAdImages);
