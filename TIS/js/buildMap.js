// For reference:
// Geocoding API Docs: https://developers.google.com/maps/documentation/geocoding/start?hl=en_US
// Maps JS API Docs: https://developers.google.com/maps/documentation/javascript/tutorial?hl=en_US



var gcp_api_key = "AIzaSyCLooeXEVw42-Ae3VNO3p5W8hdhExEDNao";
var baseGeocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var baseMapURL = "https://maps.googleapis.com/maps/api/js?key=";

// let street = jsonObj[x].address.street;
// let city = jsonObj[x].address.city;
// let state = jsonObj[x].address.state;
var street = "1046+Denali+Way";
var city = "Winder";
var state = "GA";

// Example geolocation: https: //maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + gcp_api_key;
var geocodeURL = baseGeocodeURL + street + "+" + city + "+" + state + "&key=" + gcp_api_key;
var mapURL = baseMapURL + gcp_api_key + "&callback=initMap";

// There is a returned result so use the fetch...then...and process the JSON response.

var rslt_lat;
var rslt_lng;

function initMap() {
    // Test for Map Active classes
    if (document.querySelector('.map-active')) {
        fetch(geocodeURL)
            .then(response => response.json())
            .then(jsonObj => {
                if (1 === 1) {
                    rslt_lat = jsonObj.results[0].geometry.location.lat;
                    rslt_lng = jsonObj.results[0].geometry.location.lng;
                    drawMap(rslt_lat, rslt_lng);
                }
            });
    }
}

function drawMap(latitude, longitude) {
    // fecth(mapURL)
    //     .then(results => {
    var map = new google.maps.Map(document.getElementsByClassName('map')[0], {
        center: {
            lat: latitude,
            lng: longitude
        },
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: {
            lat: latitude,
            lng: longitude,
            map: map
        }
    });
    // });
}

google.maps.event.addDomListener(window, 'load', initMap);

// Example map: "https://maps.googleapis.com/maps/api/js?key=" + gcp_api_key + "&callback=initMap";

// Add the following to the map request when displayed: