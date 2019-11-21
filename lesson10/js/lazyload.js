let images = document.querySelectorAll('img[data-src]');

let imageOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

let loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
};

// Testing loading of images without intersection observer functions.
// images.forEach((image) => {
//     loadImages(image);
// })

if ('IntersectionObserver' in window) {
    let observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imageOptions);
    images.forEach((img) => {
        observer.observe(img);
    });
} else {
    images.forEach((img) => {
        loadImages(img);
    });
}