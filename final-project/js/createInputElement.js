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