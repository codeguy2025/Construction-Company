const slider = document.querySelector('.slider')
const slides = document.querySelector('.slide')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const dots = document.querySelectorAll('.dot')
const sliderContainer = document.querySelector('.slider-container')

let currentIndex = 0;
let autoSlideInterval; 

function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    })
}

function showSlides(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`
    updateDots();
}

function nextSlide() {
    showSlides(currentIndex + 1);
}
function prevSlide() {
    showSlides(currentIndex - 1);
}
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
}
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        showSlides(parseInt(dot.dataset.index));
        startAutoSlide();
    });
});

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

sliderContainer.addEventListener('mouseover', stopAutoSlide);

sliderContainer.addEventListener('mouseout', startAutoSlide);

startAutoSlide();
updateDots();