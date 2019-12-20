function buildContactPage(jsonObj, classToFind, classToCreate) {
    let _property = jsonObj.corpinfo;

    let propertyContainer = document.createElement("div");
    propertyContainer.classList.add("property-container");

    let _street = _property.address.street;
    let _street2 = _property.address.street2;
    let _city = _property.address.city;
    let _state = _property.address.state;
    let _stateabbr = _property.address.stateabbr;
    let _zipcode = _property.address.zipcode;
    let _tele = _property.telephone;
    let _email = _property.email;

    let propertyLocation = document.createElement("div");
    propertyLocation.classList.add(classToCreate);

    let propertyContactContainer = document.createElement("div");
    propertyContactContainer.classList.add("property-contact-container");
    propertyContactContainer.textContent = "You can find us at:"

    let propertyAddress = document.createElement("div");
    propertyAddress.classList.add("address");
    propertyAddress.innerHTML = (_street2 ? _street + " " + _street2 : _street) + "<br>" + _city + ", " + _stateabbr + " " + _zipcode;
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

    let form = document.createElement("form");
    form.setAttribute("name", "reservation-form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", "/final-project/thanks.html");
    propertyLocation.appendChild(form);

    let requiredField = document.createElement("div");
    requiredField.classList.add("red");
    requiredField.textContent = "Red indicates a required field";
    form.appendChild(requiredField);


    createInputElement("stacked", "text", "Please tell us who you are", "name", "name", "^[a-zA-Z]{2,}[ ][a-zA-Z\., 0-9]{2,}$", "required", "Your First and Last Name", form);
    createInputElement("stacked", "email", "eMail", "email", "email", "", "", "Required for an email response", form);
    createInputElement("stacked", "tel", "Phone Number", "phone", "phone", "[\d\+][\d\(\)\- ]{6,}", "", "Required for a call back", form);
    createInputElement("stacked", "textarea", "Special Accommodations / Comments", "special", "special", "", "required", "Questions / Comments, please let us know!", form, 50, 10);
    createInputElement("", "submit", "Contact Us", "", "submitbtn", "", "", "", form);



    // let gridContainer = document.createElement("div");
    // gridContainer.classList.add("property-grid-container");

    // // property Services
    // createList(_amenities, "amenities", gridContainer, "Amenities at this property", 0, "property-amenities");
    // createList(_services, "services", gridContainer, "Services offered this property", 0, "property-services");

    // propertyLocation.appendChild(gridContainer);

    let propertyMap = document.createElement("div");
    propertyMap.classList.add("map");
    propertyMap.classList.add("property-map-active");
    propertyLocation.appendChild(propertyMap);

    propertyContainer.appendChild(propertyLocation);
    propertyContainer.addEventListener("onload", initMap(_street.split(' ').join('+'), _city.split(' ').join('+'), _state.split(' ').join('+'), "property-map-active", "Temple Inn & Suites"), {
        once: true
    });


    document.querySelector(classToFind).appendChild(propertyContainer);
}
