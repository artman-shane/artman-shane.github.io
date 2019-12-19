var _slideIdx = 0;

function slideShow() {
    let _slides = document.getElementsByClassName("image-div");
    _slides[_slideIdx].classList.toggle("hidden");
    _slideIdx < _slides.length - 1 ? _slideIdx++ : _slideIdx = 0;
    _slides[_slideIdx].classList.toggle("hidden");
    setTimeout(slideShow, 5000);
}