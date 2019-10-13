(function () {
    //引入模块化
    $('#footer').load('02mokuai.html');
    $('.header').load('05header.html', function () {
        //导航
        $('.menu').hover(function () {
            $(this).attr('class', 'menu menu-order hover').siblings().attr('class', 'menu menu-order');
        }, function () {
            $(this).attr('class', 'menu menu-order');
        });

        //定位
        $('.left').hover(function () {
            $('.area').css({ "border-color": "#e5e5e5", "background": "#fff", "color": "chocolate" });
            $('.area-list').css({ "border-color": "#e5e5e5", "display": "block", "z-index": "99" });
        }, function () {
            $('.area').css({ "border-color": "#f5f5f5", "background": "", "color": "#666" });
            $('.area-list').css({ "border-color": "#fff", "display": "none" });
        });

    });
})();