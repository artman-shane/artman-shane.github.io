function buildResourcesPage(_jsonObj, classToFind, _classToCreate, _numOfImgs = 0) {
    let temples = _jsonObj.temples;
    let receptioninfo = _jsonObj.receptioninfo;
    let _objs = [temples, receptioninfo];
    let resourcecontainer = document.createElement("div");

    for (i in _objs) {
        if (_objs[i].length) {
            for (let j = 0; j < _objs[i].length; j++) {
                // Here we will deal with temples
                let temple = (_objs[i])[j];
                let _name = temple.name;
                let _images_temple = temple.images.temple;
                let _images_activities = temple.images.activities;
                let _images_hotel_interior = temple.propertyinfo.images.interior;
                let _images_hotel_exterior = temple.propertyinfo.images.interior;
                let _images_hotel_kitchen = temple.propertyinfo.images.interior;

                let templeLocation = document.createElement("div");
                templeLocation.classList.add("location-group");
                let templeLocationH3 = document.createElement("h3");
                templeLocationH3.textContent = _name;
                templeLocation.appendChild(templeLocationH3);
                resourcecontainer.appendChild(templeLocation);
                let templeImages = document.createElement("div");
                templeImages.classList.add("image-collections");
                templeLocation.appendChild(templeImages);
                let objectPurpose = ["Activity Images", "Hotel Interior", "Hotel Exterior", "Hotel Kitchen"];
                let templeObjs = [_images_activities, _images_hotel_interior, _images_hotel_exterior, _images_hotel_kitchen];
                for (let k = 0; k < templeObjs.length; k++) {
                    let _objPurpose = document.createElement("div");
                    _objPurpose.classList.add("images-purpose");

                    let objpurposeh4 = document.createElement("h4");
                    objpurposeh4.textContent = objectPurpose[k];
                    _objPurpose.appendChild(objpurposeh4);

                    templeImages.appendChild(_objPurpose);

                    let ul = document.createElement("ul");
                    templeImages.appendChild(ul);
                    for (let l = 0; l < templeObjs[k].length; l++) {
                        // Images Here for each type
                        let _imageLink = (templeObjs[k])[l].source;
                        let _linkRef = document.createElement("li");
                        _imageLink == "#" ? _imageLink = "Shane Artman - Personal" : null;
                        _linkRef.textContent = _imageLink;
                        ul.appendChild(_linkRef);
                    }
                }
            }
        } else {

            // Here we deal with reception info
            let reception = _objs[i];
            let _images_reception = reception.images;

            let receptionContainer = document.createElement("div");
            receptionContainer.classList.add("reception-images");

            let receptionContainerH3 = document.createElement("h3");
            receptionContainerH3.textContent = "Images for the Receptions Page";
            receptionContainer.appendChild(receptionContainerH3);

            resourcecontainer.appendChild(receptionContainer);

            let ul = document.createElement("ul");
            receptionContainer.appendChild(ul);
            for (let j = 0; j < _images_reception.length; j++) {
                let _imageLink = _images_reception[j].source;
                let receptionImage = document.createElement("li");
                receptionImage.textContent = _imageLink;
                ul.appendChild(receptionImage);
            }


        }

        document.getElementsByClassName("resources-container")[0].appendChild(resourcecontainer);
    }
}