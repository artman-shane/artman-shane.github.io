function buildFtMissionaryPage(jsonObj, classToFind, classToCreate, _numOfImgs = 0) {
    let temples = jsonObj.temples;

    let propertyContainer = document.createElement("div");
    propertyContainer.classList.add("property-container");
    propertyContainer.classList.add("ftmissionarypage");

    let _returnBtn = document.createElement("a");
    _returnBtn.classList.add("return-link");
    _returnBtn.classList.add("link");
    if (history.back) {
        _returnBtn.setAttribute("onclick", "history.back()");
        _returnBtn.textContent = "Go Back";
    } else {
        _returnBtn.setAttribute("href", "services.html");
        _returnBtn.textContent = "Services";
    }
    propertyContainer.appendChild(_returnBtn);

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    propertyContainer.appendChild(buttonContainer);

    for (let i = 0; i < temples.length; i++) {
        let temple = temples[i];
        let _rscName = temple.resourcename;
        let _propertyName = temple.name;
        let _street = temple.propertyinfo.address.street;
        let _city = temple.propertyinfo.address.city;
        let _state = temple.propertyinfo.address.state;
        let propertyDisplayButton = document.createElement("input");
        propertyDisplayButton.setAttribute("type", "button");
        propertyDisplayButton.setAttribute("onclick", "toggleDisplayDiv(\"" + _rscName + "\",\"" + classToCreate + "\")");
        if (i != 0) {
            propertyDisplayButton.addEventListener("mousedown", returnInitMap(_street.split(' ').join('+'), _city.split(' ').join('+'), _state.split(' ').join('+'), "property-map-active" + _rscName, _propertyName + " property"), {
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
        let imagePath = "/final-project/" + _property.images.path;
        let images = _property.images.kitchen;

        let propertyLocation = document.createElement("div");
        propertyLocation.classList.add(classToCreate);
        propertyLocation.classList.add(_rscName);
        i != 0 ? propertyLocation.classList.add("hide") : null;

        let propertyName = document.createElement("h3");
        propertyName.textContent = _propertyName;
        propertyLocation.appendChild(propertyName);

        let _requestInfoBtn = document.createElement("a");
        _requestInfoBtn.classList.add("return-link");
        _requestInfoBtn.classList.add("link");
        _requestInfoBtn.setAttribute("onclick", "toggleDisplay(" + i + ", \".form-container\", \".property-container\")");
        _requestInfoBtn.textContent = "Request Info";
        propertyLocation.appendChild(_requestInfoBtn);

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

        let _imageContainer = document.createElement("div");
        _imageContainer.classList.add("images");

        // Temple Images
        if (_numOfImgs > 0) {
            _numOfImgs > images.length ? _numOfImgs = images.length : null;
        } else {
            // Default to all images
            _numOfImgs = images.length;
        }
        for (let j = 0; j < _numOfImgs; j++) {
            let imageElement = document.createElement("div");
            imageElement.classList.add("image-div");
            j != 0 ? imageElement.classList.add("hidden") : null;
            let _image = document.createElement("img");
            _image.setAttribute("src", imagePath + images[j].filename + ".jpg");
            _image.setAttribute("alt", images[j].desc);
            _image.setAttribute("title", images[j].desc);
            _image.setAttribute("srcset", imagePath + "x200/" + images[j].filename + "_200.jpg 300w," + imagePath + "x300/" + images[j].filename + "_300.jpg 600w ");
            _image.setAttribute("sizes", "(max-width: 520px) 280px, (max-width: 1200px) 500px");
            _image.classList.add("image");
            let _imageLink = document.createElement("a");
            _imageLink.setAttribute("href", images[j].source);
            _imageLink.appendChild(_image);
            imageElement.appendChild(_imageLink);
            _imageContainer.appendChild(imageElement);
        }

        propertyLocation.appendChild(_imageContainer);

        let propertyMap = document.createElement("div");
        propertyMap.classList.add("map");
        propertyMap.classList.add("property-map-active" + _rscName);
        propertyLocation.appendChild(propertyMap);

        propertyContainer.addEventListener("onload", initMap(_street.split(' ').join('+'), _city.split(' ').join('+'), _state.split(' ').join('+'), "property-map-active" + _rscName, "Temple Inn & Suites"), {
            once: true
        });

        propertyContainer.appendChild(propertyLocation);

    }


    let formdiv = document.createElement("div");
    formdiv.classList.add("form-container");
    formdiv.classList.add("hidden");

    let form = document.createElement("form");
    form.setAttribute("name", "reservation-form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", "/final-project/thanks.html");
    formdiv.appendChild(form);

    let requiredField = document.createElement("div");
    requiredField.classList.add("red");
    requiredField.textContent = "Red indicates a required field";
    form.appendChild(requiredField);

    // Create select input
    let selectlbl = document.createElement("label");
    selectlbl.textContent = "Select property from the list";
    selectlbl.classList.add("selectlbl");
    let select = document.createElement("select");
    select.setAttribute("id", "property");
    select.classList.add("propertyselect");
    select.classList.add("red");
    select.required = 1;
    select.setAttribute("onchange", "modified(\"property\")");

    let _options = document.createElement("option");
    _options.setAttribute("value", "");
    _options.textContent = "Select a property";
    _options.disabled = 1;
    _options.selected = 1;
    _options.hidden = 1;
    select.appendChild(_options);
    for (let i = 0; i < temples.length; i++) {
        let _options = document.createElement("option");
        _options.setAttribute("value", temples[i].name);
        _options.textContent = temples[i].name;
        select.appendChild(_options);
    }
    selectlbl.appendChild(select);
    form.appendChild(selectlbl);
    // End of the select input

    createInputElement("stacked", "text", "Please tell us who you are", "name", "name", "^[a-zA-Z]{2,}[ ][a-zA-Z\., 0-9]{2,}$", "required", "Your First and Last Name", form);
    createInputElement("stacked", "email", "eMail", "email", "email", "", "", "Required for an email response", form);
    createInputElement("stacked", "tel", "Phone Number", "phone", "phone", "[\d\+][\d\(\)\- ]{6,}", "", "Required for a call back", form);
    createInputElement("stacked", "textarea", "Special Accommodations / Comments", "special", "special", "", "required", "Questions / Comments, please let us know!", form, 50, 10);


    createInputElement("", "submit", "Send Now", "", "submitbtn", "", "", "", form);
    let _requestInfoBtn = document.createElement("a");
    _requestInfoBtn.classList.add("cancel-link");
    _requestInfoBtn.classList.add("link");
    _requestInfoBtn.setAttribute("onclick", "toggleDisplay(\"\", \".property-container\", \".form-container\")");
    _requestInfoBtn.textContent = "Cancel";
    form.appendChild(_requestInfoBtn);

    document.querySelector(classToFind).appendChild(propertyContainer);
    document.querySelector(classToFind).appendChild(formdiv);

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

function toggleDisplay(_idx, _classToShow, _classToHide) {
    let _classesToToggle = [_classToShow, _classToHide];
    for (i in _classesToToggle) {
        let _element = document.querySelector(_classesToToggle[i]);
        _element.classList.toggle("hidden");
    }

}

function modified(_elementId) {
    document.getElementById(_elementId).classList.remove("red");
}