// To make the call more efficient, load JSON here and call functions with resulting data
fetch("/final-project/other/temples.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsonObj) {
        buildFtMissionaryPage(jsonObj, "div.properties-container", "property");
        document.querySelector(".image").addEventListener("load", slideShow());
    });
