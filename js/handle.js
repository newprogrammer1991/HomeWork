/**
 * Created by ALI on 7/30/2017.
 */

(function () {
    var swiperV = new Swiper('.swiper-container-v', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        longSwipes: false,
        followFinger: false,
        mousewheelControl:true

    });

    swiperV.on('reachEnd', function () {
        var btn = document.querySelector('.btn');
        btn.style.display='none';
    });
   swiperV.on('reachBeginning',function () {
       var btn =document.querySelector('.btn');
       btn.style.display='block';
   });

    var swiperH = new Swiper('.swiper-container-h', {
        pagination: null,
        direction: 'horizontal'
    });


    var slider = document.querySelector('.range-slider');
    noUiSlider.create(slider, {
        start: 0,
        range: {
            'min': 0,
            'max': 2
        }
    });

    slider.noUiSlider.on('change', function () {
        autoSet(this);

    });

    slider.noUiSlider.on('slide', function () {
        handleSet(this);

    });

    function autoSet(thumb) {
        var thumbPosition = Math.round(thumb.get());
        thumb.set(thumbPosition);
        swiperH.slideTo(thumbPosition);
    };
    function handleSet(thumb) {
        var thumbPosition = thumb.get();
        if (thumbPosition < 0.5) {
            swiperH.slideTo(0);
        }
        else if (thumbPosition >= 0.5 && thumbPosition < 1.5) {
            swiperH.slideTo(1);
        }
        else {
            swiperH.slideTo(2);
        }

    };


})();