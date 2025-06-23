
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.card-list');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
});
