$(function() {

    $('#enter').click(function() {
        window.location.href = '../pages/gallery.html';
        console.log("clicked");
    });

    $('#nav li:has(ul)').doubleTapToGo();
})
