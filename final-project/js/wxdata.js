// document.getElementsByClassName('wx-current')[0].innerHTML = wxCurrent;
// document.getElementsByClassName('wx-high-temp')[0].innerHTML = wxHighTemp + "&#8457;";
// document.getElementsByClassName('wx-humidity')[0].innerHTML = wxHumidity + "&#37;";
// document.getElementsByClassName('wx-wind-speed')[0].innerHTML = wxWindSpeed + "MPH";


function wxdata(_street, _city, _state, _rscName, _idx) {

    let wxForecastURLBase = 'https://api.openweathermap.org/data/2.5/forecast';
    let wxCurrentURLBase = 'https://api.openweathermap.org/data/2.5/weather';
    let wxURLAPPID = '&APPID=2530a9dd66685fdcc10fc4a2805bd81d&units=imperial';
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let toProperCaseRegex = /(\b[a-z](?!\s))/g;

    let baseGeocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    let gcp_api_key = "AIzaSyCLooeXEVw42-Ae3VNO3p5W8hdhExEDNao";
    let enableMap = 1;
    // Test for Map Active classes
    if (enableMap) {
        let geocodeURL = baseGeocodeURL + _street + "+" + _city + "+" + _state + "&key=" + gcp_api_key;
        fetch(geocodeURL)
            .then(response => response.json())
            .then(jsonObj => {
                if (jsonObj.status == "OK") {
                    // let wxForecastURL = wxForecastURLBase + "?lat=" + coordinates.lat + "&lon=" + coordinates.lon + wxURLAPPID;
                    let wxCurrentURL = wxCurrentURLBase + "?lat=" + jsonObj.results[0].geometry.location.lat + "&lon=" + jsonObj.results[0].geometry.location.lng + wxURLAPPID;
                    // fetch(wxForecastURL)
                    //     .then(response => response.json())
                    //     .then(jsonObj => {
                    //         let town = jsonObj['list'];
                    //         let forecastCounter = 0;
                    //         for (let x = 0; x < town.length; x++) {
                    //             let town_date = new Date(parseInt(town[x].dt) * 1000);
                    //             if (town_date.getUTCHours() == 18) {
                    //                 let town_dow = days[town_date.getDay()];
                    //                 let town_wx_desc = town[x].weather[0].description;
                    //                 town_wx_desc = town_wx_desc.replace(toProperCaseRegex, function (x) {
                    //                     return x.toUpperCase();
                    //                 });
                    //                 let town_max_temp = parseFloat(town[x].main.temp_max).toFixed(0);
                    //                 let town_wx_icon = 'https://openweathermap.org/img/w/' + town[x].weather[0].icon + '.png';

                    //                 document.getElementsByClassName('daynames')[forecastCounter].innerHTML = town_dow;
                    //                 document.getElementsByClassName('wx-icon')[forecastCounter].setAttribute('src', town_wx_icon);
                    //                 document.getElementsByClassName('wx-icon')[forecastCounter].setAttribute('alt', town_wx_desc);
                    //                 document.getElementsByClassName('wx-icon')[forecastCounter].setAttribute('title', town_wx_desc);
                    //                 document.getElementsByClassName('text')[forecastCounter].innerHTML = town_max_temp + '&#0176;F';
                    //                 forecastCounter++;
                    //             }
                    //         }
                    //     });

                    fetch(wxCurrentURL)
                        .then(response => response.json())
                        .then(jsonObj => {
                            let town_wx_desc = jsonObj.weather[0].description;
                            town_wx_desc = town_wx_desc.replace(toProperCaseRegex, function (x) {
                                return x.toUpperCase();
                            });
                            let town_wx_icon = 'https://openweathermap.org/img/w/' + jsonObj.weather[0].icon + '.png';
                            let town_max_temp = parseFloat(jsonObj.main.temp_max);
                            let town_wind_speed = parseFloat(jsonObj.wind.speed).toFixed(0);
                            let town_min_temp = parseFloat(jsonObj.main.temp_min);
                            let town_temp = parseFloat(jsonObj.main.temp);
                            let town_humidity = jsonObj.main.humidity;
                            let town_wc = (35.74 + (0.6215 * town_temp) - (35.75 * Math.pow(town_wind_speed, .16)) + (0.4275 * town_temp * Math.pow(town_wind_speed, .16))).toFixed(0);
                            (town_min_temp > 50 || town_wind_speed <= 3) ? town_wc = "": town_wc = "<span>Feels Like</span><br>" + town_wc.toString() + "&#0176;F";
                            document.getElementsByClassName('wx-desc' + "-" + _rscName)[0].innerHTML = town_wx_desc;

                            let _wxicon = document.getElementsByClassName('wx-icon' + "-" + _rscName)[0]
                            _wxicon.setAttribute("src", town_wx_icon);
                            _wxicon.setAttribute("alt", town_wx_desc);
                            _wxicon.setAttribute("title", town_wx_desc);
                            document.getElementsByClassName('wx-current-container')[_idx].classList.toggle("hidden");

                            document.getElementsByClassName('current-temp' + "-" + _rscName)[0].innerHTML = "<span>High</span><br>" + town_max_temp.toFixed(0) + "&#0176;F";
                            document.getElementsByClassName('high-temp' + "-" + _rscName)[0].innerHTML = "<span>Low</span><br>" + town_min_temp.toFixed(0) + "&#0176;F";
                            document.getElementsByClassName('low-temp' + "-" + _rscName)[0].innerHTML = "<span>Current</span><br>" + town_temp.toFixed(0) + "&#0176;F";
                            document.getElementsByClassName('humidity' + "-" + _rscName)[0].innerHTML = "<span>Humidity</span><br>" + town_humidity + "&#37;";
                            document.getElementsByClassName('wind-speed' + "-" + _rscName)[0].innerHTML = "<span>Wind</span><br>" + town_wind_speed + " MPH";
                            document.getElementsByClassName('wind-chill' + "-" + _rscName)[0].innerHTML = town_wc;
                        });
                }
            });
    }

}

function getCoord(street, city, state) {
    let baseGeocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    let gcp_api_key = "AIzaSyCLooeXEVw42-Ae3VNO3p5W8hdhExEDNao";
    let enableMap = 1;
    // Test for Map Active classes
    if (enableMap) {
        let geocodeURL = baseGeocodeURL + street + "+" + city + "+" + state + "&key=" + gcp_api_key;
        fetch(geocodeURL)
            .then(response => response.json())
            .then(jsonObj => {
                if (jsonObj.status == "OK") {
                    return JSON.stringify({
                        "lat": jsonObj.results[0].geometry.location.lat,
                        "long": jsonObj.results[0].geometry.location.lng
                    });
                }
            });
    }
}

function returnWxData(_street, _city, _state, _rscName, _idx) {
    return function () {
        wxdata(_street.split(' ').join('+'), _city.split(' ').join('+'), _state.split(' ').join('+'), _rscName, _idx);
    }
}