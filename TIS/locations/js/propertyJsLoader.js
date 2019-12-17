// To make the call more efficient, load JSON here and call functions with resulting data
fetch("../other/temples.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsonObj) {
        buildPropertyPage(jsonObj, "div.properties-container", "property");
    });