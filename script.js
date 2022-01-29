function modulo(number, mod) {
    let result = number % mod;
    if (number < 0) {
        result += mod;
    }
    return result;
}

class Carousel {
    constructor(carousel) {
        this.buttonPrevious = carousel.querySelector('data-carousel-button-previous');
        this.buttonNext = carousel.querySelector('data-carousel-button-next');
        this.slidesContainer = carousel.querySelector('data-carousel-slides-container');
        this.currentSlide = 0;
        this.numSlides = this.slidesContainer.children.length;

        this.buttonPrevious.addEventListener('click', () => console.log('clicked Previous'));
        this.buttonPrevious.addEventListener('click', () => console.log('clicked Next'));
    }

    handleNext() {
        this.currentSlide = modulo(this.currentSlide + 1, this.numSlides);
        this.carousel.style.setProperty('--current-slide', this.currentSlide);
    }
    handlePrevious() {
        this.currentSlide = modulo(this.currentSlide - 1, this.numSlides);
        this.carousel.style.setProperty('--current-slide', this.currentSlide);
    }

}

const carousels = document.querySelectorAll("[data-carousel]");
carousels.forEach(carouselElement => new Carousel(carouselElement));