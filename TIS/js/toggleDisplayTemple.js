function toggleDisplayTemple(_rscName) {
    for (let i = 0; i < document.getElementsByClassName("hotels").length; i++) {
        document.getElementsByClassName("hotels")[i].classList.add("hide");
    }
    document.getElementsByClassName(_rscName)[0].classList.remove("hide");
}