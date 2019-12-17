function toggleDisplayDiv(_rscName, _className) {
    for (let i = 0; i < document.getElementsByClassName(_className).length; i++) {
        document.getElementsByClassName(_className)[i].classList.add("hide");
    }
    document.getElementsByClassName(_rscName)[0].classList.remove("hide");
}
