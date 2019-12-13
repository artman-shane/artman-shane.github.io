function showSlides() {
    let slides = document.getElementsByClassName("activities-image");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[Math.floor(Math.random() * slides.length)].style.display = "block";
    // slideIndex >= slides.length - 1 ? slideIndex = 0 : slideIndex++;
    setTimeout(showSlides, 5000);
}