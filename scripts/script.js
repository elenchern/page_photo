jQuery(document).ready(function($) {
    const wow = new WOW(
        {
        boxClass: 'wow', 
        animateClass: 'animate__animated',
        offset: 0,
        mobile: false,
        live: true
        }
        )
    wow.init();

    $('header img').bind("contextmenu", function(e) {
        e.preventDefault();
    });

    $('nav ul li a').last().click(function() {
        $('span').toggleClass('text__orange');
        $('p').toggleClass('text__orange');
    })
});