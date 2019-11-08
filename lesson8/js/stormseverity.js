function stormseverity() {
    var stormseverity = document.getElementById("stormsevsel").value;
    switch (stormseverity) {
        case "1":
        case "2":
            stormseverity = stormseverity + " - low";
            break;
        case "3":
        case "4":
            stormseverity = stormseverity + " - low / med";
            break;
        case "5":
            stormseverity = stormseverity + " - med";
            break;
        case "6":
        case "7":
            stormseverity = stormseverity + " - med / high";
            break;
        case "8":
        case "9":
            stormseverity = stormseverity + " - high";
            break;
        case "10":
            stormseverity = stormseverity + " - very high";
            break;
    }

    
    document.getElementById("stormseverity").innerHTML = stormseverity;
}