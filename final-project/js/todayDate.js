function todayDate() {
    const d = new Date()
    let dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let moy = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let todayDay = dow[d.getDay()];
    let dom = d.getDate();
    let todayMonth = moy[d.getMonth()];
    let todayYear = d.getFullYear();
    document.getElementById("todays-date").innerHTML = "Date: " + todayMonth + " " + dom + ", " + todayYear;

    let modDate = "Updated: " + document.lastModified;
    document.getElementById("updated-on").innerHTML = modDate;
}