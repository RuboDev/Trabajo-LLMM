function updateAdImages() {
    const ads = document.querySelectorAll(".ad img");
    const isDesktop = window.innerWidth >= 768;

    ads.forEach(img => {
        img.src = isDesktop 
            ? "https://placehold.co/300x600" // Imagen vertical
            : "https://placehold.co/300x150"; // Imagen horizontal
        
        // Espera a que la imagen se cargue antes de hacerla visible
        img.onload = () => {
            img.style.visibility = "visible";
        };
    });
}

// Ejecutar al cargar y cuando se cambie el tamaño de la pantalla
window.addEventListener("load", updateAdImages);
window.addEventListener("resize", updateAdImages);
