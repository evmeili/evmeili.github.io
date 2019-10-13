(function () {
    let ul1 = document.getElementById('ullist'); //页码
    let ul3 = document.getElementById('ul3');  //价格排序
    let num1 = document.getElementById('priceStart');
    let num2 = document.getElementById('priceEnd');
    let btn1 = document.getElementById('nchSortbarPriceBtn');
    let content = document.getElementById('minBuyNum');  //模糊查询
    let btn2 = document.getElementById('minBuyNumBtn');//模糊按钮
    let pages = document.getElementById('yema');  //页码
    let ipage = 1; //获取第一页
    let num = 20; //每页8条数据
    let paixu = '';
    let isok = false;

    //1.获取第一页内容渲染到页面（按需加载）
    function init() {
        if (isok == 'qujian') {
            ajax({
                type: 'get',
                url: '../api/price.php',
                data: {
                    ipage,
                    num,
                    min: num1.value.trim(),
                    max: num2.value.trim(),
                    paixu,

                },
                success: str => {
                    creat(str);
                }
            });

        } else if (isok == 'mohu') {
            ajax({
                type: 'post',
                url: '../api/mohu.php',
                data: {
                    ipage,
                    num,
                    cont: content.value.trim(),
                    paixu,

                },
                success: str => {
                    creat(str);
                }
            });

        } else {
            ajax({
                type: 'get',
                url: '../api/orderby.php',
                data: {
                    ipage,
                    num,
                    paixu
                },
                success: str => {
                    // console.log(str);
                    creat(str);
                }
            });
        }
    }
    //1.数据渲染
    function creat(str) {
        let arr = JSON.parse(str);
        // console.log(arr);
        let html = arr.list.map(item => {
            return ` <li class="item">
            <div class="goods-content" goods-item="">
                    <a href="###" class="sa" data-id="${item.id}">
                        <img class="ww" src="${item.img}" nc-goods-pic="">
                    </a>
                <div class="goods-info">
                    <div class="goods-price-deal offer-1">
                        <div class="goods-price-offer retail_goods_price">
                            <span class="number number-20 number-thin sale-price">
                                <span class="yuan">￥</span>
                                <span class="integer">${item.prince}</span>
                            </span>
                            <i>限时折扣</i>
                        </div>
                    </div>
                    <div class="p-name">
                        <a href="###">
                            <em>
                                <span>${item.name1}</span>
                                <i>${item.name2}</i>
                            </em>
                        </a>
                    </div>
                    <div class="p-commit">
                        <strong class="m-r-20">
                            <a href="###" class="num" target="_blank" title="成交量">${item.buy}</a>
                            笔成交
                        </strong>
                        <strong class="m-r-10">
                            <a href="###" class="num" style="color: #999" title="评论数">${item.ping}</a>
                            条评论
                        </strong>
                    </div>
                    <div class="p-shop">
                        <span>
                            <a href="###" title="官方店铺" class="name">官方店铺</a>
                        </span>
                    </div>
                    <div class="p-icons"><i class="goods-icons">自营</i></div>
                    <div class="p-operate" nc-shopping-box="">
                        <div class="p-o-btn focus" id="favoriteBtn37862">
                            <a href="###">
                                <i class="shop_common"></i>收藏
                            </a>
                            <a href="###" style="display: none;">
                                <span class="fa fa-star"
                                    style="font-size:16px; margin-right:4px; vertical-align:middle">
                                </span>已收藏
                            </a>
                        </div>
                        <div class="p-o-btn addcart">
                            <a href="###">
                                <i class="shopping-cart"></i>加入购物车
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>`;
        }).join('');

        ul1.innerHTML = html;

        //2.计算总页码
        let sum = Math.ceil(arr.total / num);
        let aStr = '';
        for (let i = 0; i < sum; i++) {
            aStr += `<a href="###">${i + 1}</a>`;
        }

        pages.innerHTML = aStr;
        pages.children[ipage - 1].classList.add('active');

        //3.点击跳转到对应的内容
        pages.onclick = ev => {
            ev.stopPropagation()  //阻止冒泡
            if (ev.target.tagName == 'A') {
                ipage = ev.target.innerHTML;
                ev.target.classList.add('active');
                init();
            }
        }

        //点击图片实现跳转到详情页

    }

    init();

    //鼠标滑过价格，列表选项出现
    let sp11 = document.getElementById('sp11');
    sp11.onmouseover = function (ev) {
        ul3.style.display = ' block';
    }

    //排序
    ul3.onclick = window.onclick = function (ev) {
        ev.stopPropagation()  //阻止冒泡
        ul3.style.display = 'none';
        ipage = 1;
        if (ev.target.className == 'jiang') {
            paixu = 'desc';
        } else if (ev.target.className == 'sheng') {
            paixu = 'asc';
        }
        init();
    }

    //查找价格区间的
    btn1.onclick = function (ev) {
        ev.stopPropagation()  //阻止冒泡
        let min = num1.value.trim();
        let max = num2.value.trim();
        isok = 'qujian';
        ajax({
            type: 'get',
            url: '../api/price.php',
            data: {
                ipage,
                num,
                min: num1.value.trim(),
                max: num2.value.trim(),
            },
            success: str => {
                creat(str);
            }

        });
    }

    //模糊查询
    btn2.onclick = function (ev) {
        ev.stopPropagation()  //阻止冒泡
        let cont = content.value.trim();
        isok = 'mohu';
        ajax({
            type: 'get',
            url: '../api/mohu.php',
            data: {
                ipage,
                num,
                cont: content.value.trim(),
            },
            success: str => {
                creat(str);
            }
        });

    }


    ul1.onclick = ev => {
        console.log(ev.target);
        if (ev.target.className == 'ww') {
            let id = ev.target.parentNode.dataset.id;
            window.open('13xiangqing.html?' + id);
        }
    }












})();