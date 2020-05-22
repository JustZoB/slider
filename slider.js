const slider = document.querySelector(".slider__img");
const sliderImages = document.querySelectorAll(".slider__img img");
const sliderDots = document.querySelector(".slider__dots");

let counter = 1;
slider.style.width = `${sliderImages.length * 500}px`;
let size = sliderImages[0].clientWidth;
slider.style.transform = "translateX(" + (-size * counter) + "px)";

let dot = `<span></span>`;
for (let i = 0; i < sliderImages.length - 2; i++) {
    sliderDots.innerHTML += dot;
}
let sliderDotsAll = document.querySelectorAll(".slider__dots span");
for (let i = 0; i < sliderImages.length - 2; i++) {
    sliderDotsAll[i].onclick = function() {
        let buttonCount = i + 1;
        let speed = Math.abs(buttonCount - counter);

        if (buttonCount < counter) {
            moveBack(buttonCount, speed);
            changeDot(counter);
        } else if (buttonCount > counter) {
            moveForward(buttonCount, speed);
            changeDot(counter);
        }
    }
}

sliderDotsAll[counter - 1].classList.add("active");


prev.onclick = function() {
    prev.disabled = true;
    setTimeout(function() { prev.disabled = false }, 300);
    if (counter <= 0) return;

    movePrev();
    
    setTimeout(function() {
        if (sliderImages[counter].id === "lastClone") {
            counter = sliderImages.length - 2;
            slider.style.transform = "translateX(" + (-size * counter) + "px)";
        }
        changeDot(counter);
    }, 250);
}

next.onclick = function() {
    next.disabled = true;
    setTimeout(function() { next.disabled = false }, 300);
    if (counter >= sliderImages.length - 1) return;

    moveNext();
    
    setTimeout(function() {
        if (sliderImages[counter].id === "firstClone") {
            counter = sliderImages.length - counter;
            slider.style.transform = "translateX(" + (-size * counter) + "px)";
        }
        changeDot(counter);
    }, 250);
}

function moveBack(end, speed) {
    let startAnimation = -size * counter;
    counter = end;
    let endAnimation = -size * end;
    let prevSlide = setInterval(function() {
        startAnimation += 20 * speed;
        if (startAnimation >= endAnimation) {
            clearInterval(prevSlide);
        }
        slider.style.transform = "translateX(" + startAnimation + "px)";
    }, 10);
}

function moveForward(end, speed) {
    let startAnimation = -size * counter;
    counter = end;
    let endAnimation = -size * end;
    let prevSlide = setInterval(function() {
        startAnimation -= 20 * speed;
        if (startAnimation <= endAnimation) {
            clearInterval(prevSlide);
        }
        slider.style.transform = "translateX(" + startAnimation + "px)";
    }, 10);
}

function movePrev() {
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
}

function moveNext() {
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
}

function changeDot (counter) {
    for (let i = 0; i < sliderDotsAll.length; i++) {
        sliderDotsAll[i].classList.remove("active");
    }
    
    sliderDotsAll[counter - 1].classList.add("active");
}