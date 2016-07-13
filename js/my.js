// Initialising LightBOX
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 

// Canvas Text Height Vert Center
$(document).ready(function(){
    $('#canvasText').css({
        top : ($(window).height() - $('#canvasText').outerHeight()) / 2
    });


    $(window).resize(function() {
        $('#canvasText').css({
            top : ($(window).height() - $('#canvasText').outerHeight()) / 2
        });
    });
});