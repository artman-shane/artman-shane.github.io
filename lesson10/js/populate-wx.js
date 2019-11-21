// Farenheit = &#8457;
// Celcius = &#8451;

let wxCurrent = "Sunny";
let wxHighTemp = 40;
let wxCurrentTemp = wxHighTemp; // This will be used later to determine current windchill
let wxHumidity = 69;
let wxWindSpeed = 8;

document.getElementsByClassName('wx-current')[0].innerHTML = wxCurrent;
document.getElementsByClassName('wx-high-temp')[0].innerHTML = wxHighTemp + "&#8457;";
document.getElementsByClassName('wx-humidity')[0].innerHTML = wxHumidity + "&#37;";
document.getElementsByClassName('wx-wind-speed')[0].innerHTML = wxWindSpeed + "MPH";

