function buildTemples(jsonFilename, classToFind, classToCreate) {
    fetch(jsonFilename)
        .then(response => {
            return response.json();
        })
        .then(function (jsonObj) {
            let temples = jsonObj.temples;

            for (let i = 0; i < temples.length; i++) {
                let _temple = temples[i];
                let _templeName = _temple.name;
                let _infoSrc = _temple.source;
                let _street = _temple.address.street;
                let _city = _temple.address.city;
                let _state = _temple.address.state;
                let _zipcode = _temple.address.zipcode;
                let _tele = _temple.telephone;
                let _email = _temple.email;
                let _reservationLink = _temple.reservationlink;
                let _services = _temple.services;
                let _histories = _temple.history;
                let _templeClosures = _temple.templeclosureschedule;
                let _summary = _temple.summary;
                let _baptismSchedules = _temple.ordinanceschedule.baptism;
                let _initatorySchedules = _temple.ordinanceschedule.initatory;
                let _endowmentSchedules = _temple.ordinanceschedule.endowment;
                let _sealingSchedules = _temple.ordinanceschedule.sealing;
                let _imagePath = _temple.images.path;
                let _activityImages = _temple.images.activities;
                let _templeImages = _temple.images.temple;
                let _hotelImages = _temple.images.hotel;

                let templeLocation = document.createElement("div");
                templeLocation.classList.add(classToCreate);

                let templeName = document.createElement("h3");
                templeName.textContent = _templeName;
                templeLocation.appendChild(templeName);

                let imageElement = document.createElement("div");
                imageElement.classList.add("image");

                let templeImage = document.createElement("img");
                let rndImage = Math.floor(Math.random() * _templeImages.length);
                templeImage.setAttribute("src", _imagePath + _templeImages[rndImage].filename + ".jpg");
                templeImage.setAttribute("alt", _templeImages[rndImage].desc);
                templeImage.setAttribute("title", _templeImages[rndImage].desc);
                templeImage.setAttribute("srcset", _imagePath + "x200/" + _templeImages[rndImage].filename + "_200.jpg 300w," + _imagePath + "x300/" + _templeImages[rndImage].filename + "_300.jpg 600w ");
                templeImage.setAttribute("sizes", "(max-width: 520px) 280px, (max-width: 1200px) 500px");
                let templeImageLink = document.createElement("a");
                templeImageLink.setAttribute("href", _templeImages[rndImage].source);
                templeImageLink.appendChild(templeImage);
                imageElement.appendChild(templeImageLink);
                templeLocation.appendChild(imageElement);

                let templeReservationButton = document.createElement("a");
                templeReservationButton.setAttribute("href", _reservationLink);
                templeReservationButton.textContent = "Check Availability";
                templeLocation.appendChild(templeReservationButton);

                let templeSummary = document.createElement("p");
                templeSummary.textContent = _summary;
                templeLocation.appendChild(templeSummary);

                i < temples.length - 1 ? templeLocation.appendChild(document.createElement("hr")) : null;

                document.querySelector(classToFind).appendChild(templeLocation);
            }
        });
}