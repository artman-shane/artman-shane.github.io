function toggleDisplayTemple(_rscName, _className) {
    for (let i = 0; i < document.getElementsByClassName(_className).length; i++) {
        document.getElementsByClassName(_className)[i].classList.add("hide");
    }
    document.getElementsByClassName(_rscName)[0].classList.remove("hide");
}

// function toggleDisplayTempleWithMap(_rscName, _street, _city, _state, _class, _title) {
//     for (let i = 0; i < document.getElementsByClassName("hotels").length; i++) {
//         let curElm = document.getElementsByClassName("hotels")[i];
//         curElm.classList.add("hide");
//         // curElm.removeEventListener;
//         // curElm.classList.remove("temple-map-active");
//     }
//     document.getElementsByClassName(_rscName)[0].classList.remove("hide");
//     // let _rscDoc = document.getElementsByClassName(_rscName)[0];
//     // _rscDoc.getElementsByClassName("map")[0].classList.add("temple-map-active");
//     // _rscDoc.getElementsByClassName("temple-map-active")[0].addEventListener("onload", initMap(_street, _city, _state, _class, _title), {once: true});

// }