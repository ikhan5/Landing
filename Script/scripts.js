window.onload = function () {
    var test = document.getElementById("typed");

    var typed = new Typed("#typed", {
        strings: ["Wrestling Enthusiast", "Electrical Engineer", "Sports Lover", "Web Developer"],
        smartBackspace: true,
        typeSpeed: 40,
        backSpeed: 60
    });
}