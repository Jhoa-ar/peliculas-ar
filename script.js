// JavaScript para la página Cuevana Clone

document.addEventListener('DOMContentLoaded', function () {
    // Configuración de las pestañas
    const tabSections = [
        {
            links: document.querySelectorAll('.tab-link'),
            contents: document.querySelectorAll('.tab-content')
        },
        {
            links: document.querySelectorAll('.tab-link-featured'),
            contents: document.querySelectorAll('.tab-content-featured')
        },
        {
            links: document.querySelectorAll('.tab-link-series'),
            contents: document.querySelectorAll('.tab-content-series')
        }
    ];

    // Configurar el comportamiento de las pestañas
    tabSections.forEach(section => {
        section.links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                section.links.forEach(link => link.classList.remove('active'));
                section.contents.forEach(content => content.classList.remove('active'));
                this.classList.add('active');
                const tabId = this.getAttribute('href').substring(1);
                section.contents.forEach(tabContent => {
                    if (tabContent.id === tabId) {
                        tabContent.classList.add('active');
                    }
                });
            });
        });
    });

    // Carrusel
    const carouselImages = [
        {
            src: 'images/p1.jpg',
            title: 'Robot salvaje',
            description: 'Un robot - ROZZUM unidad 7134, "Roz" para abreviar - naufraga en una isla deshabitada y debe aprender a adaptarse al duro entorno, estableciendo gradualmente relaciones con los animales de la isla y convirtiéndose...'
        },
        {
            src: 'images/p2.jpg',
            title: 'Película 2',
            description: 'Descripción de la película 2.'
        },
        {
            src: 'images/l9.jpg',
            title: 'Película 3',
            description: 'Descripción de la película 3.'
        }
    ];

    let currentCarouselIndex = 0;
    const carouselImageElement = document.querySelector('.carousel img');
    const carouselTitleElement = document.querySelector('.carousel-content h1');
    const carouselDescriptionElement = document.querySelector('.carousel-content p');

    function updateCarousel() {
        const currentData = carouselImages[currentCarouselIndex];
        carouselImageElement.style.opacity = '1';
        setTimeout(() => {
            carouselImageElement.src = currentData.src;
            carouselTitleElement.textContent = currentData.title;
            carouselDescriptionElement.textContent = currentData.description;
            carouselImageElement.style.opacity = '1';
        }, 500);
        currentCarouselIndex = (currentCarouselIndex + 1) % carouselImages.length;
    }

    setInterval(updateCarousel, 3000);

    // Mostrar detalles de la película o serie al pasar el cursor
    document.querySelectorAll('.movie-item, .series-item').forEach(item => {
        item.addEventListener('mouseenter', function () {
            const detail = this.querySelector('.movie-detail, .series-detail');
            if (detail) {
                detail.style.display = 'block';
                setTimeout(() => {
                    detail.style.opacity = '1';
                }, 10);
            }
        });

        item.addEventListener('mouseleave', function () {
            const detail = this.querySelector('.movie-detail, .series-detail');
            if (detail) {
                detail.style.opacity = '0';
                setTimeout(() => {
                    detail.style.display = 'none';
                }, 300);
            }
        });
    });

    // Preguntas Frecuentes desplegables
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
            const span = this.querySelector('span');
            if (span) {
                if (span.textContent === '+') {
                    span.textContent = '-';
                } else {
                    span.textContent = '+';
                }
            }
        });
    });

    // Botón "Ver Película" en el Carrusel
    const watchButton = document.querySelector('.carousel-content button');
    watchButton.addEventListener('click', function () {
        alert('La película se está reproduciendo o está bien para ver.');
    });

    // Botón para volver arriba
    const backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Botón para volver arriba
    const imgbutton= document.querySelector('.botton-img');
    imgbutton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Botón "Cargar más series"
    const loadMoreButton = document.querySelector('.load-more');
    loadMoreButton.addEventListener('click', function () {
        alert('Cargando más series...');
    });
});
