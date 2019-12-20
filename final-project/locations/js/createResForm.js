function createResForm(_jsonObj, _classToFind, _rscname = "") {
    let location = getParametersByName('location');
    if (location) _rscname = location;
    let _temples = _jsonObj.temples
    let _templeNames = [];
    let _tmpIndx = null;
    for (let i = 0; i < _temples.length; i++) {
        if (_rscname && _temples[i].resourcename == _rscname) {
            _tmpIndx = i;
        }
        _templeNames.push(_temples[i].name);
    }

    let reservationContainer = document.createElement("div");
    reservationContainer.classList.add("res-container");

    let form = document.createElement("form");
    form.setAttribute("name", "reservation-form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", "/final-project/thanks.html");
    reservationContainer.appendChild(form);

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
    if (_tmpIndx == null) {
        select.classList.add("red");
    }
    
    select.required = 1;
    select.setAttribute("onchange", "modified(\"property\")");
    let _options = document.createElement("option");
    _options.setAttribute("value", "");
    _options.textContent = "Select a property";
    _options.disabled = 1;
    _tmpIndx ? null : _options.selected = 1;
    _options.hidden = 1;
    select.appendChild(_options);
    for (let i = 0; i < _templeNames.length; i++) {
        let _options = document.createElement("option");
        _options.setAttribute("value", _templeNames[i]);
        _options.textContent = _templeNames[i];
        _tmpIndx == i ? _options.selected = 1 : null;
        select.appendChild(_options);
    }
    selectlbl.appendChild(select);
    form.appendChild(selectlbl);
    // End of the select input


    createInputElement("stacked", "date", "Select the arrival date", "arrivaldate", "date", "", "required", "", form);
    createInputElement("stacked", "date", "Select the departure date", "departuredate", "date", "", "required", "", form);
    createInputElement("stacked", "number", "Number of rooms", "roomcount", "roomcount", "", "required", "", form);
    createInputElement("stacked", "text", "Please enter your full name", "name", "name", "^[a-zA-Z]{2,}[ ][a-zA-Z\., 0-9]{2,}$", "required", "Your First and Last Name", form);
    createInputElement("stacked", "email", "eMail", "email", "email", "", "required", "youremail@yourdomain.com", form);
    createInputElement("stacked", "tel", "Phone Number", "phone", "phone", "[\d\+][\d\(\)\- ]{6,}", "required", "+1(200)555-1212 / 12005551212", form);
    createInputElement("stacked", "number", "Zip Code", "zip", "zip", "", "required", "00000", form);
    createInputElement("stacked", "text", "State of residence", "state", "state", "^[a-zA-Z]{1,}[a-zA-Z\., 0-9]{1,}$", "required", "Enter your home state", form);
    createInputElement("stacked", "text", "Country of residence", "country", "country", "^[a-zA-Z]{1,}[a-zA-Z\., 0-9]{1,}$", "required", "Enter your home country", form);
    createInputElement("stacked", "textarea", "Special Accommodations / Comments", "special", "special", "", "", "Please enter any questions or special requests here", form, 50, 4);
    createInputElement("", "submit", "Reserve Now", "", "submitbtn", "", "", "", form);
    let _requestInfoBtn = document.createElement("a");
    _requestInfoBtn.classList.add("cancel-link");
    _requestInfoBtn.classList.add("link");
    _requestInfoBtn.setAttribute("onclick", "history.back()");
    _requestInfoBtn.textContent = "Cancel";
    form.appendChild(_requestInfoBtn);


    // <input type="submit" value="Report Weather" class="submitBtn">

    document.querySelector(_classToFind).appendChild(reservationContainer);

}

function modified(_elementId) {
    document.getElementById(_elementId).classList.remove("red");
}

function getParametersByName(_attribute, _url) {
    // NOTE: I found this on stack overflow and resused the code.
    if (!_url) _url = window.location.href;
    _attribute = _attribute.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + _attribute + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(_url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}