/**
 * Created by ALI on 7/30/2017.
 */


var swiperV = new Swiper('.swiper-container-v', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    longSwipes: false,
    followFinger: false,
    height:document.documentElement.clientHeight

});

//onSlideChangeEnd(swiper)
    swiperV.on('slideChangeStart', function () {

    });


    var swiperH=new Swiper('.swiper-container-h',{
        pagination:null,
        direction: 'horizontal'
    });

var btn=document.querySelector('.btn');
btn.addEventListener('click',function () {
    swiperH.slideTo(1);
    console.log('f');
})