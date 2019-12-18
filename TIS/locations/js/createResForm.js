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
    form.setAttribute("action", "/TIS/thanks.html");
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


    // <input type="submit" value="Report Weather" class="submitBtn">

    document.querySelector(_classToFind).appendChild(reservationContainer);

}


function createInputElement(_labelClass, _type, _textToDisplay, _id, _class, _pattern, _required, _placeholder, _appendTo, _textareacols, _textarearows) {
    if (_type == "submit") {
        _input = document.createElement("input");
        _input.setAttribute("type", _type);
        _textToDisplay ? _input.setAttribute("value", _textToDisplay) : null;
        _id ? _input.setAttribute("id", _id) : null;
        _input.classList.add(_class);
        _appendTo.appendChild(_input);
    } else {
        let _label = document.createElement("label");
        _labelClass ? _label.classList.add(_labelClass) : null;
        _class ? _label.classList.add(_class + "lbl") : null;
        _textToDisplay ? _label.textContent = _textToDisplay : null;
        let _input;
        if (_type == "textarea") {
            _input = document.createElement("textarea")
            _input.setAttribute("rows", _textarearows);
            _input.setAttribute("cols", _textareacols);
        } else {
            _input = document.createElement("input");
            if (_type == "list") {
                _input.setAttribute("list", _class)
            } else {
                _input.setAttribute("type", _type);
            }
        }
        _placeholder ? _input.setAttribute("title", _placeholder) : null;
        _id ? _input.setAttribute("id", _id) : null;
        _input.classList.add(_class);
        _pattern ? _input.setAttribute("pattern", _pattern) : null;
        _required ? _input.required = 1 : null;
        _placeholder ? _input.setAttribute("placeholder", _placeholder) : null;
        _label.appendChild(_input);
        _appendTo.appendChild(_label);
    }

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