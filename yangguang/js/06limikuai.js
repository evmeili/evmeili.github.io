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

    $('.header').load('05header.html', function () {
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
        let a1 = document.getElementById('a1');//返回首页
        let login = document.getElementById('login-link');//返回登录页
        let menu = document.getElementById('menu-link');//返回注册页
        let remov = document.getElementById('tuichu');//退出
        //点击跳转到首页
        a1.onclick = () => {
            location.href = '01main.html?';
        }

        //跳转到注册页
        menu.onclick = () => {
            location.href = '12zhuce.html?';
        }

        //退出页面
        remov.onclick = () => {
            location.href = '01main.html?';
            removeCookie('url');
            removeCookie('username');

        }

        //跳转登录页
        login.onclick = () => {
            let str5 = decodeURI(location.href);
            // console.log(55);
            let wsk = getcookie('url');
            if (wsk) {
                removeCookie('url');
                setcookie('url', str5);
                location.href = '11denglu.html?';
            } else {
                setcookie('url', str5);
                location.href = '11denglu.html?';
            }
        }

    });

})();