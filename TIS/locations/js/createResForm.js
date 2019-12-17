function createResForm(_jsonObj, _rscname, _classToFind) {

    let _temples = _jsonObj.temples
    let _templeNames = [];
    for (let i = 0; i < _temples.length; i++) {
        let _tmpIndx = _temples[i].resourcename == _rscname ? i : null;
        _templeNames.push(_temples[i].name);
    }

    let reservationContainer = document.createElement("div");
    reservationContainer.classList.add(_rscname + "-res-container");
    reservationContainer.classList.add("res-container");

    let form = document.createElement("form");
    form.setAttribute("name", "reservation-form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", "/TIS/thanks.html");
    reservationContainer.appendChild(form);

    let requiredField = document.createElement("div");
    requiredField.classList.add("red");
    requiredField.textContent = "Red indicates a required field";
    reservationContainer.appendChild(requiredField);



    createInputElement("stacked", "list", "Select the property", "property", "property-list", "", "required", "", reservationContainer);

    let _datalist = document.createElement("datalist");
    _datalist.setAttribute("id", "property-list");
    for (let i = 0; i < _templeNames.length; i++ ) {
        let _options = document.createElement("option");
        _options.setAttribute("value", _templeNames[i]);
        _datalist.appendChild(_options);
    }

    reservationContainer.appendChild(_datalist);

    createInputElement("stacked", "date", "Select the beginning date", "begindate", "date", "", "required", "", reservationContainer);
    createInputElement("stacked", "date", "Select the ending date", "endingdate", "date", "", "required", "", reservationContainer);
    createInputElement("stacked", "text", "", "name", "name", "^[a-zA-Z]{2,}[ ][a-zA-Z\., 0-9]{2,}$", "required", "Your First and Last Name", reservationContainer);
    createInputElement("stacked", "email", "eMail", "email", "email", "", "", "youremail@yourdomain.com", reservationContainer);
    createInputElement("stacked", "tel", "Phone Number", "phone", "phone", "[\d\+][\d\(\)\- ]{6,}", "required", "+1(200)555-1212 / 12005551212", reservationContainer);
    createInputElement("stacked", "number", "Zip Code", "zip", "zip", "", "required", "00000", reservationContainer);


    //         <legend>Storm Information</legend>
    //         <label class="stacked">Storm Date<input type="date" name="stormdate" id="stormdate" class="stormdate"
    //                 required></label>
    //         <label class="stacked">Storm Severity: <span class="stormsevcursetting"><span id="stormseverity"
    //                     class="red">5 - med</span></span>
    //             <input type="range" value="5" min="1" max="10" step="1" name="stormsev" id="stormsevsel"
    //                 class="stormsev" list="listsettings" oninput="stormseverity()">
    //             <datalist id="listsettings">
    //                 <option>1</option>
    //                 <option>2</option>
    //                 <option>3</option>
    //                 <option>4</option>
    //                 <option>5</option>
    //                 <option>6</option>
    //                 <option>7</option>
    //                 <option>8</option>
    //                 <option>9</option>
    //                 <option>10</option>
    //             </datalist>
    //         </label>
    //         <label class="stacked">Region<select name="stormregion" id="stormregion" class="stormregion red"
    //                 required onchange="modified(stormentryform.stormregion)">
    //                 <option value="" disabled selected hidden>Select Region</option>
    //                 <option value="Preston">Preston</option>
    //                 <option value="Soda Springs">Soda Springs</option>
    //                 <option value="Fish Haven">Fish Haven</option>
    //             </select>
    //         </label>
    //         <fieldset class="userindanger">
    //             <legend id="dangerlegend" class="red">Are you in Danger?</legend>
    //             <label class="sbs"><input type="radio" name="danger" class="danger" value="Yes"
    //                     onchange="modifiedById(dangerlegend)" required>Yes</label>
    //             <label class="sbs"><input type="radio" name="danger" class="danger" value="No" required>No</label>
    //             <label class="sbs"><input type="radio" name="danger" class="danger" value="Maybe"
    //                     required>Maybe</label>
    //         </fieldset>
    //         <label class="stacked addlinfo">Additional Information<textarea name="addlinfo" id="addlinfo" cols="30"
    //                 rows="10"></textarea></label>
    //     </fieldset>
    //     <input type="submit" value="Report Weather" class="submitBtn">
    // </form>

    document.querySelector(_classToFind).appendChild(reservationContainer);

}


function createInputElement(_labelClass, _type, _textToDisplay, _id, _class, _pattern, _required, _placeholder, _appendTo) {
    let _label = document.createElement("label");
    _label.classList.add(_labelClass);
    _textToDisplay ? _label.textContent = _textToDisplay : null;
    let _input = document.createElement("input");
    _type == "list" ? _input.setAttribute("list", _class) : _input.setAttribute("type", _type);
    _input.setAttribute("id", _id);
    _input.classList.add(_class);
    _pattern ? _input.setAttribute("pattern", _pattern) : null;
    _required ? _input.required : null;
    _placeholder ? _input.setAttribute("placeholder", _placeholder):null;
    _label.appendChild(_input);
    _appendTo.appendChild(_label);

}