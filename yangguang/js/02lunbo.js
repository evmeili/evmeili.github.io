function carouselimg(opt) {
    let defaultopt = {
        iw: 785,//默认宽
        ih: 400,//高
        time: 2//图片切换时间
    }

    //替补方案
    Object.assign(defaultopt, opt);

    //1.渲染数据
    let str = '';//li
    let spanstr = '';//span

    defaultopt.imgdata.forEach((item, index) => {
        str += `<li><img src="${item}" alt=""></li>`;
        spanstr += `<span>${index + 1}</span>`;
    });

    $(defaultopt.ele).find('.swiper-container ul').html(str);
    $(defaultopt.ele).find('.light').html(spanstr);
    $(defaultopt.ele).find('.light span').eq(0).addClass('active');
    let iw = $(defaultopt.ele).find('.swiper-container ul li').outerWidth();
    $(defaultopt.ele).find('.swiper-container ul li').css('left', iw);
    $(defaultopt.ele).find('.swiper-container ul li:first').css('left', 0);

    //2.自动轮播
    let timer = null;
    let now = 0;
    timer = setInterval(() => {
        next();
    }, defaultopt.time * 1000);

    //下一张
    function next() {
        //旧图挪走新图进场
        $(defaultopt.ele).find('.swiper-container ul li').eq(now).animate({ 'left': -iw });
        now++;
        if (now > $(defaultopt.ele).find('.swiper-container ul li').size() - 1) {
            now = 0;
        }
        $(defaultopt.ele).find('.swiper-container ul li').eq(now).css('left', iw);
        $(defaultopt.ele).find('.swiper-container ul li').eq(now).animate({ 'left': 0 });

        lightmove();
    }

    //上一张
    function prev() {
        //旧图挪走新图进场
        $(defaultopt.ele).find('.swiper-container ul li').eq(now).animate({ 'left': iw });
        now--;
        if (now < 0) {
            now = $(defaultopt.ele).find('.swiper-container ul li').size() - 1;
        }
        $(defaultopt.ele).find('.swiper-container ul li').eq(now).css('left', -iw);
        $(defaultopt.ele).find('.swiper-container ul li').eq(now).animate({ 'left': 0 });

        lightmove();
    }

    function lightmove() {
        $(defaultopt.ele).find('.light span').eq(now).addClass('active').siblings().removeClass('active');
    }

    //3.鼠标移入
    $(defaultopt.ele).hover(function () {
        clearInterval(timer);
        $('.posibtn').css('display','block');
    }, function () {
        timer = setInterval(() => {
            next();
        }, defaultopt.time * 1000);
        $('.posibtn').css('display','none');
    });

    $(defaultopt.ele).on('click', '.prev', function () {
        //上一张
        prev();
    }).on('click', '.next', function () {
        //上一张
        next();
    }).on('click', '.light span', function () {
        //上一张
        let index = $(this).index();
        if (index > now) {
            //从右边切入
            $(defaultopt.ele).find('.swiper-container ul li').eq(now).animate({ 'left': -iw });
            $(defaultopt.ele).find('.swiper-container ul li').eq(index).css('left', iw);
            $(defaultopt.ele).find('.swiper-container ul li').eq(index).animate({ 'left': 0 });
        }
        if (index < now) {
            //从左边切入
            $(defaultopt.ele).find('.swiper-container ul li').eq(now).animate({ 'left': iw });
            $(defaultopt.ele).find('.swiper-container ul li').eq(index).css('left', -iw);
            $(defaultopt.ele).find('.swiper-container ul li').eq(index).animate({ 'left': 0 });
        }
        now = index;
        lightmove();
    })
}