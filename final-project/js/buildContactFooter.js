function buildContactFooter(_jsonObj, _rscName) {
    let _property = _jsonObj.corpinfo;
    let footer = document.getElementsByTagName("footer")[0];

        let _resource = document.createElement("a");
        _resource.classList.add("resources");
        _resource.setAttribute("href", "/final-project/resources.html");
        _resource.textContent = "Resources Used in this Site";
        footer.appendChild(_resource);


    let _elementContainer = document.createElement("div");
    _elementContainer.classList.add("contact");
    footer.appendChild(_elementContainer);

    let _element1 = document.createElement("div");
    _element1.classList.add("contact-link");
    let _subElementA1 = document.createElement("a");
    _subElementA1.setAttribute("href", "/final-project/contact.html");
    _subElementA1.innerHTML = "Contact Us";
    _element1.appendChild(_subElementA1);
    _elementContainer.appendChild(_element1);
    
    let _element2 = document.createElement("div");
    _element2.classList.add("tel-contact");
    let _subElementA2 = document.createElement("a");
    _subElementA2.setAttribute("href", "tel:" + _property.telephone);
    _subElementA2.innerHTML = "<span class=\"icon\">&#9742;</span><span class=\"text\">" + _property.telephone + "</span>";
    _element2.appendChild(_subElementA2);
    _elementContainer.appendChild(_element2);

    let _element3 = document.createElement("div");
    _element3.classList.add("email-contact");
    let _subElementA3 = document.createElement("a");
    _subElementA3.setAttribute("href", "mailto:" + _property.email);
    _subElementA3.innerHTML = "<span class=\"icon\">&#x2709;</span><span class=\"text\">" + _property.email + "</span>";
    _element3.appendChild(_subElementA3);
    _elementContainer.appendChild(_element3);

    let _elementContainer2 = document.createElement("div");
    _elementContainer2.classList.add("summary");
    footer.appendChild(_elementContainer2);

    let _element2_1 = document.createElement("div");
    _element2_1.setAttribute("id","todays-date");
    _elementContainer2.appendChild(_element2_1);

    let _element2_2 = document.createElement("div");
    _element2_2.setAttribute("id", "updated-on");
    _elementContainer2.appendChild(_element2_2);

    todayDate();
}