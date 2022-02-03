const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// Set .left property for each slide
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  showSlide();
});

prevBtn.addEventListener("click", function () {
  counter--;
  showSlide();
});

// Translate all slides
function showSlide() {
  slides.forEach(function (slide, index) {
    // console.log(slide, index, counter);

    if (counter > slides.length - 1) {
      counter = 0;
    } else if (counter < 0) {
      counter = slides.length - 1;
    }

    slide.style.transform = `translateX(-${100 * counter}%)`;
  });
}
