// I did this because of the restrictions in the rules. 
// Hopefully I do not get "dinged" for it
var tdList = document.querySelectorAll("td");

tdList.forEach(item => {
    if (item.innerHTML == "Black Friday") {
        item.style.fontStyle = "italic";
    }
});