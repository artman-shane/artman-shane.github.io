function buildTemplesPage(jsonObj, classToFind, classToCreate, imagesToDisplay = 0) {
    let temples = jsonObj.temples;

    let templeContainer = document.createElement("div");
    templeContainer.classList.add("temple-container");

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    templeContainer.appendChild(buttonContainer);

    for (let i = 0; i < temples.length; i++) {
        let _temple = temples[i];
        let _rscName = _temple.resourcename;
        let _templeName = _temple.name;
        let _street = _temple.address.street;
        let _city = _temple.address.city;
        let _state = _temple.address.state;
        let templeDisplayButton = document.createElement("input");
        templeDisplayButton.setAttribute("type", "button");
        templeDisplayButton.setAttribute("onclick", "toggleDisplayTempleWithMap(\"" + _rscName + "\",\"" + _street.split(' ').join('+') + "\",\"" + _city.split(' ').join('+') + "\",\"" + _state + "\",\"" + "temple-map-active-" + _rscName + "\",\"" + _templeName + " Temple" + "\")");
        templeDisplayButton.classList.add("display-button");
        i == 0 ? templeDisplayButton.classList.add("active") : null;
        templeDisplayButton.value = _templeName;
        buttonContainer.appendChild(templeDisplayButton);
    }

    for (let i = 0; i < temples.length; i++) {
        let _temple = temples[i];
        let _templeName = _temple.name;
        let _rscName = _temple.resourcename;
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
        let _imagePath = "../" + _temple.images.path;
        let _activityImages = _temple.images.activities;
        let _templeImages = _temple.images.temple;
        let _hotelImages = _temple.images.hotel;

        let templeLocation = document.createElement("div");
        templeLocation.classList.add(classToCreate);
        templeLocation.classList.add(_rscName);
        i != 0 ? templeLocation.classList.add("hide") : null;

        let templeName = document.createElement("h3");
        templeName.textContent = _templeName;
        templeLocation.appendChild(templeName);

        let templePhone = document.createElement("a");
        templePhone.setAttribute("href", "tel:" + _tele);
        templePhone.classList.add("phone");
        templePhone.textContent = _tele;
        templeLocation.appendChild(templePhone);

        let templeEmail = document.createElement("a");
        templeEmail.setAttribute("href", "mailto:" + _email);
        templeEmail.classList.add("email");
        templeEmail.innerHTML = "&#x2709;";
        templeLocation.appendChild(templeEmail);

        let templeAddress = document.createElement("div");
        templeAddress.classList.add("address");
        templeAddress.innerHTML = _street + "<br>" + _city + ", " + _state + " " + _zipcode;
        templeLocation.appendChild(templeAddress);

        let templeMap = document.createElement("div");
        templeMap.classList.add("map");
        templeMap.classList.add("temple-map-active-" + _rscName);
        templeLocation.appendChild(templeMap);




        // Temple Images
        if (imagesToDisplay > 0) {
            imagesToDisplay > _templeImages.length ? imagesToDisplay = _templeImages.length : null;
        } else {
            // Default to all images
            imagesToDisplay = _templeImages.length;
        }
        for (let j = 0; j < imagesToDisplay; j++) {
            let imageElement = document.createElement("div");
            imageElement.classList.add("image");
            let templeImage = document.createElement("img");
            templeImage.setAttribute("src", _imagePath + _templeImages[j].filename + ".jpg");
            templeImage.setAttribute("alt", _templeImages[j].desc);
            templeImage.setAttribute("title", _templeImages[j].desc);
            templeImage.setAttribute("srcset", _imagePath + "x200/" + _templeImages[j].filename + "_200.jpg 300w," + _imagePath + "x300/" + _templeImages[j].filename + "_300.jpg 600w ");
            templeImage.setAttribute("sizes", "(max-width: 520px) 280px, (max-width: 1200px) 500px");
            let templeImageLink = document.createElement("a");
            templeImageLink.setAttribute("href", _templeImages[j].source);
            templeImageLink.appendChild(templeImage);
            imageElement.appendChild(templeImageLink);
            templeLocation.appendChild(imageElement);
        }

        // Temple Services
        createList(_services, "services", templeLocation, "Services Available Here:");
        // Temple History
        createList(_histories, "histories", templeLocation, "History of the " + _templeName + " Temple:");
        // Temple Closure Schedule
        createList(_templeClosures, "closures", templeLocation, "Closure Schedule:");
        // Baptistry Schedule
        createList(_baptismSchedules, "baptistry-schedule", templeLocation, "Baptistry Schedule:", 1);
        // Initatory Schedule
        createList(_initatorySchedules, "initatory-schedule", templeLocation, "Initatory Schedule:", 1);
        // Endowment Schedule
        createList(_endowmentSchedules, "endowment-schedule", templeLocation, "Endowment Schedule:", 1);
        // Sealing Schedule
        createList(_sealingSchedules, "sealing-schedule", templeLocation, "Sealing Schedule:", 1);


        let templeSummary = document.createElement("p");
        templeSummary.textContent = _summary;
        templeLocation.appendChild(templeSummary);

        i < temples.length - 1 ? templeLocation.appendChild(document.createElement("hr")) : null;

        templeContainer.appendChild(templeLocation);
        i == 0 ? templeContainer.addEventListener("onload", initMap(_street.split(' ').join('+'), _city.split(' ').join('+'), _state.split(' ').join('+'), "temple-map-active-" + _rscName, _templeName + " Temple"), { once: true }) : null;
    }

    document.querySelector(classToFind).appendChild(templeContainer);

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

function createList(_objs, _obj, _parent, _title, _dow = 0) {
    // Temple Services
    let _elements = document.createElement("div");
    _elements.classList.add("temple-" + _obj);
    _elements.textContent = _title;

    if (_dow) {
        let _days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        let _dayList = document.createElement("ul")
        for (let k = 0; k < _days.length; k++) {
            let _dayName = _days[k];
            let _object = _objs[_dayName];
            let _day = document.createElement("li");
            _day.textContent = _dayName[0].toUpperCase() + _dayName.slice(1);
            // _day.textContent = _days[k][0].toUpperCase + _days[k].slice(1);
            let _elementsList = document.createElement("ul");
            for (let j = 0; j < _object.length; j++) {
                let _element = document.createElement("li");
                _element.textContent = _object[j];
                _elementsList.appendChild(_element);
            }
            _day.appendChild(_elementsList);
            _dayList.appendChild(_day);
            _elements.appendChild(_dayList);
        }
    } else {
        let _elementsList = document.createElement("ul");
        for (let j = 0; j < _objs.length; j++) {
            let _element = document.createElement("li");
            _element.textContent = _objs[j];
            _elementsList.appendChild(_element);
        }
        _elements.appendChild(_elementsList);
    }
    _parent.appendChild(_elements);
}