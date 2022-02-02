function modulo(number, mod) {
  let result = number % mod;
  if (number < 0) {
    result += mod;
  }
  return result;
}

// const buttonPrevious = document.getElementById("data-carousel-button-previous");

/*
I commented the line above.
It had the right idea but had a small mistake.
The function `document.getElementById` looks for the id attribute in the HTML.
So, line 9 above looks for HTML like <button id="data-carousel-button-previous">. In index.html, line 24, the button doesn't have that as the ID, so JavaScript couldn't find it.

The new button on line 25 has an ID of "carousel-button-previous".
So this JavaScript would work:
*/
const buttonPrevious = document.getElementById('carousel-button-previous');

/*
As an alternative, you can also use document.querySelector to look for the data attribute. That's the thing on the button that spells data-carousel-button-previous.
The syntax for that is a bit weird. It requires square brackets ([]) around the name of the data attribute.
*/
const alsoButtonPrevious = document.querySelector('[data-carousel-button-previous]');

buttonPrevious.addEventListener('click', () => console.log('clicked Previous'));
// You can delete the line below and line 26. They're only here to showcase how querySelector works.
alsoButtonPrevious.addEventListener('click', () =>
  console.log('This event listener was also added on the previous button'),
);

/*class Carousel {
    constructor(carousel) {
        this.buttonPrevious = carousel.querySelector(['data-carousel-button-previous']);
        this.buttonNext = carousel.querySelector(['data-carousel-button-next']);
        this.slidesContainer = carousel.querySelector(['data-carousel-slides-container']);
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
carousels.forEach(carouselElement => new Carousel(carouselElement));*/
