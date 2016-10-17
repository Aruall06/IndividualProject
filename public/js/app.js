$(function() {

    $('#enter').click(function() {
        window.location.href = '../pages/gallery.html';
        console.log("clicked");
    });

    lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true
    })

})
