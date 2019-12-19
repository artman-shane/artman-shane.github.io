function buildServicesPage(jsonObj, classToFind, classToCreate, imagesToDisplay = 0) {
    let temples = jsonObj.temples;
    let receptioninfo = jsonObj.receptioninfo;

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
        let _ftmissionarylink = temple.ftmissionarylink;
        let _receptionlink = receptioninfo.receptionlink;
        let _amenities = _property.amenities;
        let _services = _property.services;

        let propertyLocation = document.createElement("div");
        propertyLocation.classList.add(classToCreate);
        propertyLocation.classList.add(_rscName);
        i != 0 ? propertyLocation.classList.add("hide") : null;

        let propertyName = document.createElement("h3");
        propertyName.textContent = _propertyName;
        propertyLocation.appendChild(propertyName);

        let _div = document.createElement("div");
        _div.classList.add("link-container");
        propertyLocation.appendChild(_div);
        createLink(_reservationLink, "Reserve Now", _div);
        createLink(_receptionlink, "Wedding Receptions", _div);
        createLink(_ftmissionarylink, "Full Time Missionary Info", _div);


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

        let gridContainer = document.createElement("div");
        gridContainer.classList.add("property-grid-container");

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
            propertyContainer.addEventListener("onload", initMap(_street.split(' ').join('+'), _city.split(' ').join('+'), _state.split(' ').join('+'), "property-map-active-" + _rscName, _propertyName + " property"), {
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

function createLink(_link, _name, _appendTo) {
    let _button = document.createElement("a");
    _button.setAttribute("href", _link);
    _button.textContent = _name;
    _appendTo.appendChild(_button);
}