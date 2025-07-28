// ===== SLIDER AUTOMÁTICO =====
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlideFunc() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlideFunc);
setInterval(nextSlide, 5000);

// ===== MENÚ HAMBURGUESA =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.menu-final');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.menu-final a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// ===== MULTISELECT PERSONALIZADO =====
const multiselect = document.querySelector('.custom-multiselect');
const selectedDiv = multiselect.querySelector('.selected');
const optionsDiv = multiselect.querySelector('.options');
let selectedValues = [];

selectedDiv.addEventListener('click', () => {
    multiselect.classList.toggle('open');
});

optionsDiv.querySelectorAll('div').forEach(option => {
    option.addEventListener('click', () => {
        const value = option.getAttribute('data-value');
        if (selectedValues.includes(value)) {
            selectedValues = selectedValues.filter(v => v !== value);
            option.classList.remove('selected-option');
        } else {
            selectedValues.push(value);
            option.classList.add('selected-option');
        }
        selectedDiv.firstChild.textContent = selectedValues.length > 0 ? selectedValues.join(', ') : 'Seleccionar servicios';
    });
});

document.addEventListener('click', (e) => {
    if (!multiselect.contains(e.target)) {
        multiselect.classList.remove('open');
    }
});

// ===== FORMULARIO A WHATSAPP =====
document.getElementById('enviar-whatsapp').addEventListener('click', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const servicios = selectedValues.join(', ');

    const texto = `Hola, soy ${nombre}.%0AQuiero solicitar un servicio.%0A` +
                  `Teléfono: ${telefono}%0A` +
                  `Email: ${email}%0A` +
                  `Servicios: ${servicios}%0A` +
                  `Mensaje: ${mensaje}`;

    const url = `https://wa.me/5491134520027?text=${texto}`;
    window.open(url, '_blank');
});

// ===== ANIMACIONES FADE-IN =====
const sections = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// ===== BLOG SLIDER =====
const blogCards = document.querySelectorAll('.blog-card');
const blogPrevBtn = document.querySelector('.slider-btn.prev');
const blogNextBtn = document.querySelector('.slider-btn.next');
let currentBlogIndex = 0;

function showBlog(index) {
    blogCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });
}

blogPrevBtn.addEventListener('click', () => {
    currentBlogIndex = (currentBlogIndex - 1 + blogCards.length) % blogCards.length;
    showBlog(currentBlogIndex);
});

blogNextBtn.addEventListener('click', () => {
    currentBlogIndex = (currentBlogIndex + 1) % blogCards.length;
    showBlog(currentBlogIndex);
});

// Inicializar el slider
showBlog(currentBlogIndex);

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.lightbox .close');

// Detectar clic en las imágenes
document.querySelectorAll('.blog-card img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Cerrar con la X
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Cerrar haciendo clic afuera
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
