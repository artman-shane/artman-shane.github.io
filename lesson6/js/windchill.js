// Windchill Formula in farhenheit: f = 35.74 + 0.6215t - 35.75(s^0.16) + 0.4275t(s^0.16)
if (wxCurrentTemp < 50 && wxWindSpeed > 3) {
    // Since we already have the necessary values defined in the populate-wx.js,
    // I can just use them to populate the formula..
    var wxWindchill = Math.round((35.74 + (0.6215 * wxCurrentTemp) - (35.75 * Math.pow(wxWindSpeed, .16)) + (0.4275 * wxCurrentTemp * Math.pow(wxWindSpeed, .16))) * 10) / 10;
} else {
    var wxWindchill = "N/A";
}
// In the event the instructors want me to pull data from HTML to extract values, here is how it would be completed.
var wxSumCurTemp = document.getElementsByClassName('wx-high-temp')[0].textContent;
var wxSumWindSpeed = document.getElementsByClassName('wx-wind-speed')[0].textContent;
var curTemp = parseInt(wxSumCurTemp.match(/\d+/)[0]);
var windSpeed = parseInt(wxSumWindSpeed.match(/\d+/)[0]);
console.log("Extracted Info - Speed: " + windSpeed + " Curr Temp: " + curTemp);
console.log("Windchill: " + Math.round((35.74 + (0.6215 * curTemp) - (35.75 * Math.pow(windSpeed, .16)) + (0.4275 * curTemp * Math.pow(windSpeed, .16))) * 10) / 10);

document.getElementsByClassName('wx-wind-chill')[0].innerHTML = wxWindchill + (wxWindchill == "N/A" ? "" : "&#8457;");
