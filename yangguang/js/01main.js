(function () {

    // 引入模块化
    $('#footer').load('02mokuai.html');
    $('#faq').load('03mokuai2.html');
    $('.ccti').load('04mokuai3.html');
    $('.header-wrap').load('06header-wrap.html');

    $('#public-nav-layout').load('07public.html', function () {
        //二级菜单导航
        $('.cate-menu-item').hover(function () {
            $(this).attr('class', 'cate-menu-item hover').siblings().attr('class', 'cate-menu-item');
            $(this).children('.cate-part').css('display', 'block');
        }, function () {
            $(this).attr('class', 'cate-menu-item');
            $(this).children('.cate-part').css('display', 'none');

        });
    });

    $('#ncGlobalToolbar').load('09ncGloba.html');

    //下拉菜单
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

    //跳转
    $('#login-link').click(function () {
        location.href = "11denglu.html";
    });

    $('#menu-link').click(function () {
        location.href = "12zhuce.html";
    });



    //倒计时
    var cdown = document.querySelector('.countdown');
    var seckTime = document.querySelector('#seckillTimeDown');
    var timer = null
    var endTime = new Date('2019-10-12 23:25:00');  //定义终止时间
    function show() {
        var startTime = new Date();   //获取执行代码开始时间
        var _startTine = Date.parse(startTime);   //获取纪元时间
        var _endTime = Date.parse(endTime);
        var res = _endTime - _startTine;
        if (res / 1000 == 0) {
            //临界值
            clearInterval(timer);
            cdown.style.display = 'none';
        } else {
            var times = jisuan(res);
            var str1 = `<span class="m" data-cd-type="allHours">${times.hours}</span>
                         <em>:</em>
                         <span class="h" data-cd-type="minutes">${times.mins}</span>
                         <em>:</em>
                         <span class="s" data-cd-type="seconds">${times.secs1}</span>`;
            seckTime.innerHTML = str1;

        }

    }
    show();

    var timer = setInterval(show, 1000); //启动计时器

    function jisuan(res) {
        var sec = parseInt(res / 1000);
        var secs = sec % 60;
        var min = parseInt(sec / 60) % 60;
        var hour = parseInt(sec / 60 / 60) % 24;
        return {

            hours: hour,
            mins: min,
            secs1: secs
        }

    }
    //倒计时结束










})();