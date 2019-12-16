// To make the call more efficient, load JSON here and call functions with resulting data
fetch("../other/temples.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsonObj) {
        buildTemplesPage(jsonObj, "div.locations", "hotels");
    });


initMap("4800+Montgomery+Ln", "Bethesda", "MD", 'map-active', "Temple Inn & Suites");