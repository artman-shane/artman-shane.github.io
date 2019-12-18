function watchForMouseover(_element) {

    _element = document.getElementsByClassName(_element)[0];
    _element.addEventListener("mouseover", function () {
        this.classlist.add("active");
    });

}