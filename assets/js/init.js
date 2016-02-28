$(document).ready(function() {

    // Validation form initialisation
    jQuery.validator.addMethod("equal", function(value, element, param) {
            return value == param;
        }, jQuery.validator.format("Inserisci il risultato corretto"));

    window.generate_random_operation = function() {
        var getRandomInt = function(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }

        var math_op = getRandomInt(1, 10) + ((getRandomInt(0,2)==0)? " * " : " + ") + getRandomInt(1, 10);

        return {
            result: eval(math_op),
            operation: math_op.replace("*", "x")
        }
    }

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a[href]').click(function() {
        $('.navbar-toggle:visible').click();
    });

    if($("#cd_map_container").length) initMainMap("cd_map_container");
    if($("#event_map_container").length) initEventMap("event_map_container", event_location);
})
