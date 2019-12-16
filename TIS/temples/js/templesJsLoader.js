// To make the call more efficient, load JSON here and call functions with resulting data
fetch("../other/temples.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsonObj) {
        buildTemplesPage(jsonObj, "div.temple-locations", "temples");
    });


initMap("4800+Montgomery+Ln", "Bethesda", "MD", 'map-active', "Temple Inn & Suites");