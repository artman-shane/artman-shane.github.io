/* This is the source of scripting for the sartman assignment portal */

var lastmod = "Last Updated: " + document.lastModified;
document.getElementById("lastupdate").innerHTML=lastmod;

let strDate = new Date();
let year = strDate.getFullYear();
document.getElementById("fullyear").innerHTML=year;