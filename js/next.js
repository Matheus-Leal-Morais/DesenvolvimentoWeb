const carousel = document.querySelector('.movies-list'); // Adiciona o ponto antes de 'movies-list'
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentPosition = 0;
const movieItems = document.querySelectorAll('.movie');

function updateCarouselPosition() {
    carousel.style.transform = `translateX(-${currentPosition * 270}px)`;
}

function scrollToNext() {
    currentPosition++;
    if (currentPosition >= movieItems.length) {
        currentPosition = 0;
    }
    updateCarouselPosition();
}

function scrollToPrev() {
    currentPosition--;
    if (currentPosition < 0) {
        currentPosition = movieItems.length - 1;
    }
    updateCarouselPosition();
}

nextButton.addEventListener('click', scrollToNext);
prevButton.addEventListener('click', scrollToPrev);
