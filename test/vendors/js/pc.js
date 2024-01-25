const page03_st = document.querySelector('.page03_st');
const pickup01 = document.querySelector('.btn03_pickup01');
const pickup02 = document.querySelector('.btn03_pickup02');

pickup01.addEventListener("click", () => {
    page03_st.setAttribute('src', `assets/img/st3_1.png`);
    page03_st.setAttribute('alt', `page03_st`);
    pickup01.setAttribute('src', `assets/img/btn3_ch1_on.png`);
    pickup02.setAttribute('src', `assets/img/btn3_ch2.png`);
});

pickup02.addEventListener("click", () => {
    page03_st.setAttribute('src', `assets/img/st3_2.png`);
    page03_st.setAttribute('alt', `page03_st`);
    pickup01.setAttribute('src', `assets/img/btn3_ch1.png`);
    pickup02.setAttribute('src', `assets/img/btn3_ch2_on.png`);
});

 

$('.button').mouseenter((e) => {
    $('.button:hover').animate({ width: "95%" }, 150);
});
$('.button').mouseleave((e) => {
    $('.button').animate({ width: "100%" }, 150);
});


function loop() {
    $('.down').animate({ opacity: "0" }, 1850,'linear');

    $('.down').animate({ opacity: "1" }, 1850,'linear');
    requestAnimationFrame(loop);
};
loop();
/*
$('.btn_nav01').on('click',((e) => {
    e.preventDefault();
    $('body,html').stop().animate({scrollTop : $('#page01').offset().top},200,'linear');
}));
$('.btn_nav02').on('click',((e) => {
    e.preventDefault();
    $('body,html').stop().animate({scrollTop : $('#page02').offset().top},200,'linear');
}));
$('.btn_nav03').on('click',((e) => {
    e.preventDefault();
    $('body,html').stop().animate({scrollTop : $('#page03').offset().top},200,'linear');
}));



$(function () {
    removeSection = function (e) {
        $(e).parents(".section").remove();
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh')
        });
    }
    $("body").scrollspy({ target: '#myScrollspy' });
    $('body').on('activate.bs.scrollspy', function () {
        btn();
    })
    btn();
});

function btn() {
    $('li>a>img.btn_nav01').attr('src', 'assets/img/nav1.png');
    $('li>a>img.btn_nav02').attr('src', 'assets/img/nav2.png');
    $('li>a>img.btn_nav03').attr('src', 'assets/img/nav3.png');

    $('li.active>a>img.btn_nav01').attr('src', 'assets/img/nav1_on.png');
    $('li.active>a>img.btn_nav02').attr('src', 'assets/img/nav2_on.png');
    $('li.active>a>img.btn_nav03').attr('src', 'assets/img/nav3_on.png');
}
*/