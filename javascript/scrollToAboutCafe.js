var navHeight;

$(document).ready(function(){
    navHeight = $("nav").height();
    console.log(navHeight);
});

function scrollToElement() {
    var top = document.getElementsByClassName('innerElement').offsetTop;
    document.getElementById('about').scrollTop = top - navHeight;
}
