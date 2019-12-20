function buildPropertyPage(jsonObj, classToFind, classToCreate, imagesToDisplay = 0) {
    let temples = jsonObj.temples;

    let propertyContainer = document.createElement("div");
    propertyContainer.classList.add("property-container");

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    propertyContainer.appendChild(buttonContainer);

    for (let i = 0; i < temples.length; i++) {
        let temple = temples[i];
        let _rscName = temple.resourcename;
        let _propertyName = temple.name;
        let _street = temple.address.street;
        let _city = temple.address.city;
        let _state = temple.address.state;
        let propertyDisplayButton = document.createElement("input");
        propertyDisplayButton.setAttribute("type", "button");
        propertyDisplayButton.setAttribute("onclick", "toggleDisplayDiv(\"" + _rscName + "\",\"" + classToCreate + "\")");
        if (i != 0) {
            propertyDisplayButton.addEventListener("mousedown", returnInitMap(_street.split(' ').join('+'), _city.split(' ').join('+'), _state.split(' ').join('+'), "property-map-active-" + _rscName, _propertyName + " property"), {
                once: true
            });
        }

        propertyDisplayButton.classList.add("display-button");
        i == 0 ? propertyDisplayButton.classList.add("active") : null;
        propertyDisplayButton.value = _propertyName;
        buttonContainer.appendChild(propertyDisplayButton);
    }

    for (let i = 0; i < temples.length; i++) {
        let temple = temples[i];
        let _property = temple.propertyinfo
        let _propertyName = temple.name;
        let _rscName = temple.resourcename;
        let _street = _property.address.street;
        let _city = _property.address.city;
        let _state = _property.address.state;
        let _zipcode = _property.address.zipcode;
        let _tele = _property.telephone;
        let _email = _property.email;
        let _reservationLink = temple.reservationlink;
        let _imagePath = "/final-project/" + _property.images.path;
        let _propertyImages = _property.images;
        let _garage = _property.garage;
        let _roomCount = _property.rooms.count;
        let _amenities = _property.amenities;
        let _services = _property.services;

        let propertyLocation = document.createElement("div");
        propertyLocation.classList.add(classToCreate);
        propertyLocation.classList.add(_rscName);
        i != 0 ? propertyLocation.classList.add("hide") : null;

        let propertyName = document.createElement("h3");
        propertyName.textContent = _propertyName;
        propertyLocation.appendChild(propertyName);

        let propertyReservationButton = document.createElement("a");
        propertyReservationButton.setAttribute("href", _reservationLink);
        propertyReservationButton.textContent = "Reserve Now";
        propertyLocation.appendChild(propertyReservationButton);

        let propertyContactContainer = document.createElement("div");
        propertyContactContainer.classList.add("property-contact-container");

        let propertyAddress = document.createElement("div");
        propertyAddress.classList.add("address");
        propertyAddress.innerHTML = _street + "<br>" + _city + ", " + _state + " " + _zipcode;
        propertyContactContainer.appendChild(propertyAddress);

        let propertyPhone = document.createElement("a");
        propertyPhone.setAttribute("href", "tel:" + _tele);
        propertyPhone.classList.add("phone");
        let phoneText = document.createElement("span");
        phoneText.textContent = _tele;
        phoneText.classList.add("phone-text");
        propertyPhone.appendChild(phoneText);
        let phoneIcon = document.createElement("span");
        phoneIcon.innerHTML = "&#9742;";
        phoneIcon.classList.add("phone-icon");
        propertyPhone.appendChild(phoneIcon);
        propertyContactContainer.appendChild(propertyPhone);

        let propertyEmail = document.createElement("a");
        propertyEmail.setAttribute("href", "mailto:" + _email);
        propertyEmail.classList.add("email");
        let emailText = document.createElement("span");
        emailText.textContent = _email;
        emailText.classList.add("email-text");
        propertyEmail.appendChild(emailText);
        let emailIcon = document.createElement("span");
        emailIcon.innerHTML = "&#x2709;";
        emailIcon.classList.add("email-icon");
        propertyEmail.appendChild(emailIcon);
        propertyContactContainer.appendChild(propertyEmail);

        propertyLocation.appendChild(propertyContactContainer);

        let interiorImagesToDisplay = 0;
        let exteriorImagesToDisplay = 0;

        // property Images
        if (imagesToDisplay > 0) {
            imagesToDisplay > _propertyImages.interior.length ? interiorImagesToDisplay = _propertyImages.interior.length : interiorImagesToDisplay = imagesToDisplay;
            imagesToDisplay > _propertyImages.exterior.length ? exteriorImagesToDisplay = _propertyImages.exterior.length : exteriorImagesToDisplay = imagesToDisplay;
        } else {
            // Default to all images
            interiorImagesToDisplay = _propertyImages.interior.length
            exteriorImagesToDisplay = _propertyImages.exterior.length;
        }

        let imagetypes = ["interior", "exterior"];
        for (let x in imagetypes) {
            let _imagesToDisplay = imagetypes[x] == "interior" ? interiorImagesToDisplay : exteriorImagesToDisplay;
            for (let j = 0; j < _imagesToDisplay; j++) {
                let propertyImageName = _propertyImages[imagetypes[x]];
                let imageElement = document.createElement("div");
                imageElement.classList.add(imagetypes[x] + "-image");
                imageElement.classList.add("image");
                let propertyImage = document.createElement("img");
                propertyImage.setAttribute("src", _imagePath + propertyImageName[j].filename + ".jpg");
                propertyImage.setAttribute("alt", propertyImageName[j].desc);
                propertyImage.setAttribute("title", propertyImageName[j].desc);
                propertyImage.setAttribute("srcset", _imagePath + "x200/" + propertyImageName[j].filename + "_200.jpg 300w," + _imagePath + "x300/" + propertyImageName[j].filename + "_300.jpg 600w ");
                propertyImage.setAttribute("sizes", "(max-width: 520px) 280px, (max-width: 1200px) 500px");
                let propertyImageLink = document.createElement("a");
                propertyImageLink.setAttribute("href", propertyImageName[j].source);
                propertyImageLink.appendChild(propertyImage);
                imageElement.appendChild(propertyImageLink);
                propertyLocation.appendChild(imageElement);
            }
        }

        let gridContainer = document.createElement("div");
        gridContainer.classList.add("property-grid-container");

        let roomCount = document.createElement("div");
        roomCount.classList.add("room-count");
        roomCount.textContent = "We have " + _roomCount + " rooms for your convienence and still growing";
        gridContainer.appendChild(roomCount);

        let garage = document.createElement("div");
        garage.classList.add("garage");
        garage.textContent = _garage;
        gridContainer.appendChild(garage);

        // property Services
        createList(_amenities, "amenities", gridContainer, "Amenities at this property", 0, "property-amenities");
        createList(_services, "services", gridContainer, "Services offered this property", 0, "property-services");

        propertyLocation.appendChild(gridContainer);

        let propertyMap = document.createElement("div");
        propertyMap.classList.add("map");
        propertyMap.classList.add("property-map-active-" + _rscName);
        propertyLocation.appendChild(propertyMap);

        i < temples.length - 1 ? propertyLocation.appendChild(document.createElement("hr")) : null;

        propertyContainer.appendChild(propertyLocation);
        if (i == 0) {
            propertyContainer.addEventListener("onload", initMap(_street.split(' ').join('+'), _city.split(' ').join('+'), _state.split(' ').join('+'), "property-map-active-" + _rscName, _propertyName + " Inn & Suites"), {
                once: true
            });
        }
    }

    document.querySelector(classToFind).appendChild(propertyContainer);

    // This section is to care for the wayfinder functions
    let btnContainer = document.getElementsByClassName("button-container")[0];
    let buttons = btnContainer.getElementsByClassName("display-button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            let currentBtn = btnContainer.getElementsByClassName("active");
            for (let j = 0; j < currentBtn.length; j++) {
                currentBtn[j].classList.remove("active");
            }
            this.classList.add("active");
        });
    }
}