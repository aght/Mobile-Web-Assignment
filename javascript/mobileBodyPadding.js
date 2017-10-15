var navHeight = 0;

$(document).ready(function() {
    navHeight = $("nav").height();
    $("body").css("padding-top", navHeight);
    console.log("Navigation Bar Height: " + navHeight);
});
