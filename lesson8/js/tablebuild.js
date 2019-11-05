var tdList = document.querySelectorAll("td");

tdList.forEach(item => {
    if (item.innerHTML == "Black Friday") {
        item.style.fontStyle = "italic";
    }
});