// --- LÓGICA PARA INTERACTIVIDAD DE LA PÁGINA ---

// Menú Hamburguesa para móviles
const navbarToggle = document.getElementById('navbar-toggle');
const navbarCollapse = document.getElementById('navbar-collapse-basic');

navbarToggle.addEventListener('click', () => {
    navbarCollapse.classList.toggle('hidden');
});

// Animación de aparición de elementos al hacer scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Distancia para que el elemento sea visible

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Ejecuta la función una vez al cargar para mostrar los elementos visibles

// Carrusel de imágenes
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
let intervalId;

function showSlide(index) {
    carouselItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}

function startCarousel() {
    // Cambia de imagen automáticamente cada 5 segundos
    intervalId = setInterval(nextSlide, 5000); 
}

function stopCarousel() {
    clearInterval(intervalId);
}

// Reinicia el carrusel automático si el usuario interactúa con los botones
nextBtn.addEventListener('click', () => {
    nextSlide();
    stopCarousel();
    startCarousel();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopCarousel();
    startCarousel();
});

// Inicia el carrusel al cargar la página
startCarousel();
// --- Lógica para el Menú Desplegable de Docentes ---
const docentesMenuButton = document.getElementById('docentes-menu-button');
const docentesDropdown = document.getElementById('docentes-dropdown');

if (docentesMenuButton) {
    docentesMenuButton.addEventListener('click', (event) => {
        // Evita que el clic en el botón cierre el menú inmediatamente
        event.stopPropagation(); 
        docentesDropdown.classList.toggle('hidden');
    });
}

// Cierra el menú si se hace clic en cualquier otro lugar de la página
window.addEventListener('click', () => {
    if (!docentesDropdown.classList.contains('hidden')) {
        docentesDropdown.classList.add('hidden');
    }
});