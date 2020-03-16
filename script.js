// Add active class to the current button (highlight it)
var header = document.getElementById("navbar");
var navBtns = document.getElementsByClassName("navel");
for (var i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}