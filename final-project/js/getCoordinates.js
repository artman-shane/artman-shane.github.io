function getCoordinates(street, city, state) {

    let geocodeURL = baseGeocodeURL + street + "+" + city + "+" + state + "&key=" + gcp_api_key;

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