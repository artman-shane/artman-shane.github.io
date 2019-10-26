// Farenheit = &#8457;
// Celcius = &#8451;

var wxCurrent = "Sunny";
var wxHighTemp = 40;
var wxCurrentTemp = wxHighTemp; // This will be used later to determine current windchill
var wxHumidity = 69;
var wxWindSpeed = 8;


document.getElementsByClassName('wx-current')[0].innerHTML = wxCurrent;
document.getElementsByClassName('wx-high-temp')[0].innerHTML = wxHighTemp + "&#8457;";
document.getElementsByClassName('wx-humidity')[0].innerHTML = wxHumidity + "&#37;";
document.getElementsByClassName('wx-wind-speed')[0].innerHTML = wxWindSpeed + "MPH";

