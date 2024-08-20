const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

function showSlide(n) {
    const slidesCount = slides.children.length;
    if (n >= slidesCount) index = 0;
    else if (n < 0) index = slidesCount - 1;
    else index = n;

    slides.style.transform = `translateX(${-index * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(index - 1));
nextButton.addEventListener('click', () => showSlide(index + 1));

showSlide(index);