files = [
    "atl_celestial_rm",
    "atl_family_day",
    "atl_pathway_mtg",
    "atl_temple_baptistry",
    "slc_beehive_house",
    "slc_candle_reflecting_pool",
    "slc_celestial_rm",
    "slc_family_walks",
    "slc_temple_baptistry"
];

for (let i = 0; i < files.length; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", "images/activities/" + files[i] + ".jpg");
    image.setAttribute("alt", "Image of activities");
    image.setAttribute("srcset", "images/activities/" + files[i] + "_200.jpg 300w, images/activities/" + files[i] + "_300.jpg 600w");
    image.setAttribute("sizes", "(max-width: 520px) 280px, (max-width: 1200px) 500px");
    image.classList.add("activities-image");
    document.querySelector("div.activity-images").appendChild(image);
};

var slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("activities-image");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    slideIndex >= slides.length-1 ? slideIndex = 0 : slideIndex++;
    setTimeout(showSlides, 5000);
}