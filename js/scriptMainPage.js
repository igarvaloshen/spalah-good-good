$( function() {
    $(".j-testimonials").load("parts/testimonials.html", function() {

        <!-- scripts for testimonials block connect here start -->
        $( "#tabs" ).tabs();
        <!-- scripts for testimonials block connect here end -->

    });
} );
$( function() {
    $(".j-footer").load("parts/footer.html", function() {

        <!-- scripts for testimonials block connect here start -->
        <!-- scripts for testimonials block connect here end -->

    });
} );

// This will create a single gallery from all elements that have class "gallery-item"

$(document).ready(function(){
    $('.bxslider').bxSlider();
});