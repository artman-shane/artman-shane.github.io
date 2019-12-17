function createList(_objs, _obj, _parent, _title, _dow = 0, _classToCreate) {
    // Temple Services
    let _elements = document.createElement("div");
    _elements.classList.add(_classToCreate);
    let _subEmelemnt = document.createElement("span");
    _subEmelemnt.textContent = _title;
    _subEmelemnt.classList.add("list-title");
    _elements.appendChild(_subEmelemnt);

    if (_dow) {
        let _days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        let _dayList = document.createElement("ul")
        for (let k = 0; k < _days.length; k++) {
            let _dayName = _days[k];
            let _object = _objs[_dayName];
            let _day = document.createElement("li");
            _day.textContent = _dayName[0].toUpperCase() + _dayName.slice(1);
            _day.classList.add("day-name");
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