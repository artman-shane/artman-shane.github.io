function loadImages(jsonFile, elementToFind, classToCreate, displayAsSlides) {

    fetch(jsonFile)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObj) {
            let activities = jsonObj["activities"];

            for (let i = 0; i < activities.length; i++) {
                let baseFile = activities[i].path + activities[i].filename;
                let x200File = activities[i].path + "x200/" + activities[i].filename;
                let x300File = activities[i].path + "x300/" + activities[i].filename;
                let imgDesc = activities[i].desc;
                let image = document.createElement("img");
                image.setAttribute("src", baseFile + ".jpg");
                image.setAttribute("alt", imgDesc);
                image.setAttribute("title", imgDesc);
                image.setAttribute("srcset", x200File + "_200.jpg 300w," + x300File + "_300.jpg 600w ");
                image.setAttribute("sizes", "(max-width: 520px) 280px, (max-width: 1200px) 500px");
                image.classList.add(classToCreate);
                document.querySelector(elementToFind).appendChild(image);
            }
            if (displayAsSlides) {
                showSlides();
            }
        });
}
