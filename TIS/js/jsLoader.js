// For reference:
// Geocoding API Docs: https://developers.google.com/maps/documentation/geocoding/start?hl=en_US
// Maps JS API Docs: https://developers.google.com/maps/documentation/javascript/tutorial?hl=en_US

var baseGeocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

// var gcp_api_key = "AIzaSyCLooeXEVw42-Ae3VNO3p5W8hdhExEDNao";

buildActivities("other/temples.json", "div.activity-images", "activities-image");
buildTemples("other/temples.json", "div.locations", "hotels");
initMap("4800+Montgomery+Ln", "Bethesda", "MD", '.map-active', "Temple Inn & Suites");
// initMap("1046+Denali+Way", "Winder", "GA", '.map-active', "Shane's House");