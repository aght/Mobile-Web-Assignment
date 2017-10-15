var navHeight = 0;

$(window).on('resize', function() {
    var win = $(this); //this = window
    if (win.height() >= 1 && win.width() <= 500) {
        navHeight = $("nav").height();
        $("body").css("padding-top", navHeight);
        console.log("Mobile Detected: Setting navigation bar padding");
    }
});
