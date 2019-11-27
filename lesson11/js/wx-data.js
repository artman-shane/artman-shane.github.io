// function toProperCase(strToConvert) {
//     return strToConvert
// }


function wxdata(cityID) {

    let wxForecastURLBase = 'https://api.openweathermap.org/data/2.5/forecast?id=';
    let wxCurrentURLBase = 'https://api.openweathermap.org/data/2.5/weather?id=';
    let wxURLAPPID = '&APPID=2530a9dd66685fdcc10fc4a2805bd81d&units=imperial';
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let toProperCaseRegex = /(\b[a-z](?!\s))/g;
    // let cityID = '5604473';
    let wxForecastURL = wxForecastURLBase + cityID + wxURLAPPID;
    let wxCurrentURL = wxCurrentURLBase + cityID + wxURLAPPID;


    fetch(wxForecastURL)
        .then(response => response.json())
        .then(jsonObj => {
            let town = jsonObj['list'];
            let forecastCounter = 0;
            for (let x = 0; x < town.length; x++) {
                let town_date = new Date(parseInt(town[x].dt) * 1000);
                if (town_date.getUTCHours() == 18) {
                    let town_dow = days[town_date.getDay()];
                    let town_wx_desc = town[x].weather[0].description;
                    town_wx_desc = town_wx_desc.replace(toProperCaseRegex, function (x) {
                        return x.toUpperCase();
                    });
                    let town_max_temp = parseFloat(town[x].main.temp_max).toFixed(0);
                    let town_wx_icon = 'https://openweathermap.org/img/w/' + town[x].weather[0].icon + '.png';

                    document.getElementsByClassName('daynames')[forecastCounter].innerHTML = town_dow;
                    document.getElementsByClassName('wx-icon')[forecastCounter].setAttribute('src', town_wx_icon);
                    document.getElementsByClassName('wx-icon')[forecastCounter].setAttribute('alt', town_wx_desc);
                    document.getElementsByClassName('wx-icon')[forecastCounter].setAttribute('title', town_wx_desc);
                    document.getElementsByClassName('text')[forecastCounter].innerHTML = town_max_temp + '&#0176;F';
                    forecastCounter++;
                }
            }
        });

    fetch(wxCurrentURL)
        .then(response => response.json())
        .then(jsonObj => {
            let town_wx_desc = jsonObj.weather[0].description;
            town_wx_desc = town_wx_desc.replace(toProperCaseRegex, function (x) {
                return x.toUpperCase();
            });
            let town_max_temp = parseFloat(jsonObj.main.temp_max);
            let town_wind_speed = parseFloat(jsonObj.wind.speed).toFixed(0);
            let town_min_temp = parseFloat(jsonObj.main.temp_min);
            let town_temp = parseFloat(jsonObj.main.temp);
            let town_humidity = jsonObj.main.humidity;
            let town_wc = (35.74 + (0.6215 * town_min_temp) - (35.75 * Math.pow(town_wind_speed, .16)) + (0.4275 * town_min_temp * Math.pow(town_wind_speed, .16))).toFixed(0);
            (town_min_temp > 50 || town_wind_speed <= 3) ? town_wc = 'N/A': town_wc.toString() + "&#0176;F";
            document.getElementsByClassName('wx-current')[0].innerHTML = town_wx_desc;
            document.getElementsByClassName('wx-high-temp')[0].innerHTML = town_max_temp.toFixed(0) + "&#0176;F";
            document.getElementsByClassName('wx-humidity')[0].innerHTML = town_humidity + "&#37;";
            document.getElementsByClassName('wx-wind-speed')[0].innerHTML = town_wind_speed + " MPH";
            document.getElementsByClassName('wx-wind-chill')[0].innerHTML = town_wc + "&#0176;F";
        });
}