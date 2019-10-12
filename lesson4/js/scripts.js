function toggleMenu() {
    document.getElementsByClassName("nav-menu")[0].classList.toggle("displayed");
}

// Date format: Wednesday, 24 July 2020
var todayDate = new Date()
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var todayDay = days[todayDate.getDay()];
var todayNumDay = todayDate.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var todayMonth = months[todayDate.getMonth()];
var todayYear = todayDate.getFullYear();
document.getElementById("footer-msg").innerHTML = todayDay + " ," + todayNumDay + " " + todayMonth + " " + todayYear;

var lastmod = "Last Updated: " + document.lastModified;
document.getElementById("lastupdate").innerHTML=lastmod;

let strDate = new Date();
let year = strDate.getFullYear();
document.getElementById("fullyear").innerHTML=year;
