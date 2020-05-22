const slider = document.querySelector(".slider__img");
const sliderImages = document.querySelectorAll(".slider__img img");

let counter = 1;
let size = sliderImages[0].clientWidth;
slider.style.transform = "translateX(" + (-size * counter) + "px)";

prev.onclick = function() {
    prev.disabled = true;
    setTimeout(function() { prev.disabled = false }, 300);

    if (counter <= 0) return;
    let startAnimation = -size * counter;
    counter--;
    let endAnimation = -size * counter;
    let prevSlide = setInterval(function() {
        startAnimation += 20;
        if (startAnimation >= endAnimation) {
            clearInterval(prevSlide);
        }
        slider.style.transform = "translateX(" + startAnimation + "px)";
    }, 10);
    setTimeout(function() {
        if (sliderImages[counter].id === "lastClone") {
            counter = sliderImages.length - 2;
            slider.style.transform = "translateX(" + (-size * counter) + "px)";
        }
    }, 250);
}

next.onclick = function() {
    next.disabled = true;
    setTimeout(function() { next.disabled = false }, 300);

    if (counter >= sliderImages.length - 1) return;
    let startAnimation = -size * counter;
    counter++;
    let endAnimation = -size * counter;
    let prevSlide = setInterval(function() {
        startAnimation -= 20;
        if (startAnimation <= endAnimation) {
            clearInterval(prevSlide);
        }
        slider.style.transform = "translateX(" + startAnimation + "px)";
    }, 10);
    setTimeout(function() {
        if (sliderImages[counter].id === "firstClone") {
            counter = sliderImages.length - counter;
            slider.style.transform = "translateX(" + (-size * counter) + "px)";
        }
    }, 250);
}
