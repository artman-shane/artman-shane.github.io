// Example geolocation: https: //maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + gcp_api_key;
// var geocodeURL = baseGeocodeURL + street + "+" + city + "+" + state + "&key=" + gcp_api_key;
//let baseMapURL = "https://maps.googleapis.com/maps/api/js?key=";
// var mapURL = baseMapURL + gcp_api_key + "&callback=initMap";
// There is a returned result so use the fetch...then...and process the JSON response.

// google.maps.event.addDomListener(window, 'load', initMap("1046+Denali+Way", "Winder", "GA"));
// Example map: "https://maps.googleapis.com/maps/api/js?key=" + gcp_api_key + "&callback=initMap";
// Add the following to the map request when displayed:



function initMap(street, city, state, classToFind, nameOfLocation) {
    let baseGeocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    let gcp_api_key = "AIzaSyCLooeXEVw42-Ae3VNO3p5W8hdhExEDNao";
    // Costs $$$
    let enableMap = 1;
    // Test for Map Active classes
    if (document.querySelector('.map-active') || document.querySelectorAll('.temple-map-active')) {

        if ((document.querySelector("." + classToFind) || classToFind.includes("temple-map-active")) && enableMap) {
            let geocodeURL = baseGeocodeURL + street + "+" + city + "+" + state + "&key=" + gcp_api_key;
            fetch(geocodeURL)
                .then(response => response.json())
                .then(jsonObj => {
                    if (jsonObj.status == "OK") {
                        let _lat = jsonObj.results[0].geometry.location.lat;
                        let _lng = jsonObj.results[0].geometry.location.lng;
                        drawMap(_lat, _lng, classToFind, nameOfLocation);
                    }
                });
        }
    }
}

function drawMap(latitude, longitude, classToFind, nameOfLocation) {
    let map = new google.maps.Map(document.querySelector("." + classToFind), {
        center: {
            lat: latitude,
            lng: longitude
        },
        zoom: 15
    });
    let marker = new google.maps.Marker({
        position: {
            lat: latitude,
            lng: longitude,
            map: map
        },
        title: nameOfLocation,
        visible: true
    });
    marker.setMap(map);
}

// In order for the mousedown to work, you must return the function and not call the function.
// Calling the function causes it to fire immediately and this costs for the map
function returnInitMap(street, city, state, classToFind, nameOfLocation) {
    return function () { initMap(street, city, state, classToFind, nameOfLocation); }
}