// Date format: Wednesday, 24 July 2020
let updateTodayDate = new Date()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let todayDay = days[updateTodayDate.getDay()];
let todayNumDay = updateTodayDate.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let todayMonth = months[updateTodayDate.getMonth()];
let todayYear = updateTodayDate.getFullYear();
document.getElementById("footer-msg").innerHTML = todayDay + " ," + todayNumDay + " " + todayMonth + " " + todayYear;

let lastmod = "Last Updated: " + document.lastModified;
document.getElementById("lastupdate").innerHTML=lastmod;

let strDate = new Date();
let year = strDate.getFullYear();
document.getElementById("fullyear").innerHTML=year;
