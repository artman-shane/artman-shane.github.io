// Farenheit = &#8457;
// Celcius = &#8451;

var wxCurrent = "Sunny";
var wxHighTemp = 30;
var wxCurrentTemp = wxHighTemp; // This will be used later to determine current windchill
var wxHumidity = 69;
var wxWindSpeed = 10;
// Windchill Formula in farhenheit: f = 35.74 + 0.6215t - 35.75(s^0.16) + 0.4275t(s^0.16)
var wxWindchill = Math.round((35.74 + (0.6215 * wxCurrentTemp) - (35.75 * Math.pow(wxWindSpeed, .16)) + (0.4275 * wxCurrentTemp * Math.pow(wxWindSpeed, .16))) *10) / 10; 

document.getElementsByClassName('wx-current')[0].innerHTML = wxCurrent;
document.getElementsByClassName('wx-high-temp')[0].innerHTML = wxHighTemp + "&#8457;";
document.getElementsByClassName('wx-wind-chill')[0].innerHTML = wxWindchill + "&#8457;";
document.getElementsByClassName('wx-humidity')[0].innerHTML = wxHumidity + "&#37;";
document.getElementsByClassName('wx-wind-speed')[0].innerHTML = wxWindSpeed + "MPH";
