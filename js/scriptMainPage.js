$( function() {
    $(".j-testimonials").load("parts/testimonials.html", function() {

        <!-- scripts for testimonials block connect here start -->
        $( "#tabs" ).tabs();
        <!-- scripts for testimonials block connect here end -->

    });
} );

// This will create a single gallery from all elements that have class "gallery-item"

