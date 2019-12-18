function buildReceptionPage(_jsonObj, classToFind, _classToCreate, _numOfImgs = 0) {
    let jsonObj = _jsonObj.receptioninfo;
    let summary = jsonObj.summary;
    let cateringsvcs = jsonObj.catering;
    let images = jsonObj.images;
    let imagePath = jsonObj.imagepath;

    let _generalContainer = document.createElement("div");
    _generalContainer.classList.add(_classToCreate);

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
    _generalContainer.appendChild(_returnBtn);

    // Temple Images
    if (_numOfImgs > 0) {
        _numOfImgs > images.length ? _numOfImgs = images.length : null;
    } else {
        // Default to all images
        _numOfImgs = images.length;
    }
    for (let j = 0; j < _numOfImgs; j++) {
        let imageElement = document.createElement("div");
        imageElement.classList.add("image");
        let _image = document.createElement("img");
        _image.setAttribute("src", imagePath + images[j].filename + ".jpg");
        _image.setAttribute("alt", images[j].desc);
        _image.setAttribute("title", images[j].desc);
        _image.setAttribute("srcset", imagePath + "x200/" + images[j].filename + "_200.jpg 300w," + imagePath + "x300/" + images[j].filename + "_300.jpg 600w ");
        _image.setAttribute("sizes", "(max-width: 520px) 280px, (max-width: 1200px) 500px");
        let _imageLink = document.createElement("a");
        _imageLink.setAttribute("href", images[j].source);
        _imageLink.appendChild(_image);
        imageElement.appendChild(_imageLink);
        _generalContainer.appendChild(imageElement);
    }

    let _listContainer = document.createElement("div");
    _listContainer.classList.add("property-grid-container");

    // Wedding Receptions Services
    // crerateList(_objs, _obj, _parent, _title, _dow = 0, _classToCreate)
    createList(summary, "summary", _listContainer, "Wedding Reception Services Offered", 0, "wedding-reception-services");
    createList(cateringsvcs, "catering", _listContainer, "Catering Services Available", 0, "catering-services");

    _generalContainer.appendChild(_listContainer);

    document.querySelector(classToFind).appendChild(_generalContainer);
}