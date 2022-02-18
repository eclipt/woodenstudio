$(function(){

    AOS.init();

    $(".main-visual").vegas({
        overlay: false,
        delay: 10000,
        animation: 'kenburns',
        animationDuration: 10000,
        timer: false,
        transition: 'fade2',


        slides: [
            { src: "./img/photo01.jpg" },
            { src: "./img/photo011.jpg" },
            { src: "./img/photo012.jpg" },
        ]
    });


    $(document).ready(function() {
        $('.drawer').drawer();
      });

})