function buildActivities(jsonFilename, classToFind, classToCreate) {
    fetch(jsonFilename)
        .then(response => {
            return response.json();
        })
        .then(function (jsonObj) {
            let temples = jsonObj.temples;
            let rndTemple = Math.floor(Math.random() * temples.length);
            let _temple = temples[rndTemple];
            let _imagePath = _temple.images.path;
            let _activityImages = _temple.images.activities;

            let activityImage = document.createElement("img");
            let rndImage = Math.floor(Math.random() * _activityImages.length);
            activityImage.setAttribute("src", _imagePath + _activityImages[rndImage].filename + ".jpg");
            activityImage.setAttribute("alt", _activityImages[rndImage].desc);
            activityImage.setAttribute("title", _activityImages[rndImage].desc);
            activityImage.setAttribute("srcset", _imagePath + "x200/" + _activityImages[rndImage].filename + "_200.jpg 300w," + _imagePath + "x300/" + _activityImages[rndImage].filename + "_300.jpg 600w ");
            activityImage.setAttribute("sizes", "(max-width: 520px) 280px, (max-width: 1200px) 500px");
            activityImage.classList.add(classToCreate);

            let activityImageLink = document.createElement("a");
            activityImageLink.setAttribute("href", _activityImages[rndImage].source);
            activityImageLink.appendChild(activityImage);

            document.querySelector(classToFind).appendChild(activityImageLink);
            showSlides();
        });
}