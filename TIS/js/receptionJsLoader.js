// To make the call more efficient, load JSON here and call functions with resulting data
fetch("/TIS/other/temples.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsonObj) {
        buildReceptionPage(jsonObj, "div.properties-container", "property");
    });