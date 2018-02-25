(function ($) {

    'use strict';

    var MotoPitStop = {

        init: function () {
            this.googleMaps();
            this.sliders();
        },

        cache: {
            $body: $('body')
        },
        
        googleMaps: function () {

            $(window).ready(function () {
                var uluru = {lat: 50.444703, lng: 30.357401};
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 17,
                    center: uluru,
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false
                });
                var marker = new google.maps.Marker({
                    position: uluru,
                    map: map,
                    icon: './img/googlemapMarker.png'
                });
            });

        },

        sliders: function () {
            $(document).ready(function () {
                $('.slider-one-level').slick({
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                });
            })

        }
    };

    MotoPitStop.init();

}(jQuery));