(function () {
    //跳转
    $('#login-link').click(function () {
        location.href = "11denglu.html";
    });

    $('#menu-link').click(function () {
        location.href = "12zhuce.html";
    });

    /*
        需求：
        不同用户不同的购物车
        单个商品删除功能
        加减按钮，手动输入，发送ajax对数据库更新，没有返回数据，需要重新渲染数据
        接口写好了，但没来得及写的功能：多个复选框总删除，选中商品总计未渲染
    */
    let cookie = getcookie('username');  //是否登录
    let id = getcookie('ssid');  //获取商品id
    let numShu = window.location.search.slice(1);

    class Car {
        constructor(id) {
            //构造函数
            this.carBox = $(id);
            this.init();

        }

        init() {
            //查找节点和绑定事件
            this.creatList();  //渲染数据
            this.addNum();//点击加添加数量
            this.cutNum();//点击减少数量
            this.manual();//手动输入修改数量
            this.removeRow(); //删除单个商品   
            this.allCheck();//全选 
            this.checkRow();//勾选某一行复选框
            this.allRemove();  //全删
        }

        creatList() {

            ajax({
                type: 'get',
                url: '../api/shoppcar/01cars.php',
                data: {
                    id,
                    numShu,
                    cookie,
                },
                success: str => {
                    this.creat(str);
                }
            });
        }

        creat(str) {
            //数据拼接
            let arr = JSON.parse(str);

            let sht = arr.obj.map(item => {
                return `<div class="big clearfix">
                              <div class="goods-img">
                                <div class="img-vertical"><a href="###">
                                     <img src="${item.img}" alt="" style="max-width:100%; max-height:100%"></a>
                                </div>
                              </div>
                              <div class="goods-main">
                                <div class="spu-name">
                                    <a href="###">${item.name}</a>
                                </div>
            
                                <div class="panel-remove">
                                  <a class="icon-collect" href="###" data-goods-favorites="6264" data-chain-id="0"
                                    data-real-common-id="0" title="移至收藏">
                                    <i class="icon iconfont icon-xingxing" aria-hidden="true"></i>
                                  </a>
                                  <a class="icon-delete" href="###" title="删除该商品" data-spu-del="${item.id}">
                                    <i class="icon iconfont icon-shanchu" aria-hidden="true"></i>
                                  </a>
                                </div>
                                <table class="spu-singles">
                                  <tbody>
                                    <tr class="goods-sku" id="goodsSkuPanel_10183">
                                      <td>库存<span class="cunku">${item.kucun}</div></td>
                                      <td class="sku-opt"> </td>
                                      <td class="sku-primary"></td>
                                      <td class="sku-quantity" data-shis="${item.id}">
                                            <input type="button" value="-" class="minus" aria-hidden="true">
                                            <input type="text" class="input-text" value="${item.num}" id="buyNumInput_10183" autocomplete="off">
                                            <input type="button" value="+" class="plus" aria-hidden="true">
                                      </td>
                                      <td class="sku-unitprice">
                                          
                                          <span class="yuan">￥</span>
                                          <span class="decimal2">${item.price}</span>
                                       
                                      </td>
                                      <td class="sku-rebate">
                                        <div class="sku-rebate-block" id="limitedtime_10183" data-por-type-text="限时折扣">限时折扣 </div>
                                      </td>
                                      <td class="sku-amount">
                                            <span class="yuan">小计</span>
                                            <span class="yuan">￥</span>
                                            <span class="integer">${item.price}</span>
                                            <div class="checkbox1">
                                                <input type="checkbox" class="J-spu-checkbox" id="spuCheckBox_6264">
                                            </div>
                                            <div class="save" style="display: block;">
                                                <span class="del">删除</span>
                                             </div>
                                            
                                      </td>
                                      
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                        </div>`;

            }).join('');

            $('#goodsZone_6264').html(sht);
        }

        aja(num, idsh, now) {
            //加减按钮的ajax
            let _this = this
            ajax({
                type: 'get',
                url: '../api/shoppcar/03addCut.php',
                data: {
                    idsh,
                    num,
                },
                success: str => {
                    _this.total(now, num);  //重新渲染数据
                }
            });

        }
        addNum() {
            //点击加添加数量
            let _this = this;
            this.carBox.on('click', '.plus', function () {
                let idsh = $(this).parent().data("shis");  //商品id
                let num = $(this).prev().val();
                num++;
                _this.aja(num, idsh, $(this)); //发送ajax 数量
            });
        }

        cutNum() {
            //点击减数量
            let _this = this;
            this.carBox.on('click', '.minus', function () {
                let idsh = $(this).parent().data("shis");  //商品id
                let num = $(this).next().val();   //数量
                num--;
                _this.aja(num, idsh, $(this)); //发送ajax 数量，商品id


            });

        }
        manual() {  //手动输入修改值
            let _this = this;
            this.carBox.on('input', '.input-text', function () {
                let idsh = $(this).parent().data("shis");  //商品id
                let num = $(this).val() - 0;
                _this.aja(num, idsh, $(this));


            });
        }
        total(now, num) {
            let prin3 = $(now).parent().parent().find('.decimal2').text(); //价格
            let kuncun2 = $(now).parent().parent().find('.cunku').text();  //库存
            if (num < 1) {
                num = 1;
            } else if (num > kuncun2) {
                num = kuncun2;
            }
            //计算小计
            $(now).parent().find('.input-text').val(num);
            let xiaoji = (num * prin3).toFixed(2);
            $(now).parent().parent().find('.integer').html(xiaoji); //小计价格渲染


        }
        removeRow() { //删除一行
            let _this = this;
            this.carBox.on('click', '.del', function () {
                //取商品id
                let ids = $(this).parent().parent().parent().find('.sku-quantity').data("shis");
                let ok = confirm('您确定要删我吗？');
                if (ok) {
                    ajax({
                        type: 'get',
                        url: '../api/shoppcar/02delv.php',
                        data: {
                            ids,
                        },
                        success: str => {
                            let jie = $(this).parents('.big').remove();
                        }
                    });

                }

            });

        }
        allCheck() { //全选复选框
            let _this = this;
            $('#checkedAllBottomBtn').click(function () {
                let isok = $('#checkedAllBottomBtn').prop('checked');
                $('.checkbox1 input').prop('checked', isok);
                if (isok) {
                    _this.sumall();
                } else {
                    _this.claer();
                }

            });

        }
        checkRow() { //选中某行复选框
            let _this = this;
            this.carBox.on('click', '.checkbox1 .J-spu-checkbox', function () {
                let len = $('.checkbox1 .J-spu-checkbox').length;    //复选框的个数
                let achecknum = $('.checkbox1 .J-spu-checkbox:checked').length;
                if (len == achecknum) {
                    //已经全选
                    $('#checkedAllBottomBtn').prop('checked', true);
                } else {
                    $('#checkedAllBottomBtn').prop('checked', false);

                }
                _this.sumall();


            });

        }
        allRemove() {  //选中的多个复选框进行全删
            let _this = this;
            $('#mDelSkuBtn').click(function () {
                let checkall = this.checkArr().reverse();//被勾选的行的下标，存在数组里面
                let ok = confirm('您确定要删除我们？');
                if (ok) {
                    ajax({
                        type: 'get',
                        url: '../api/shoppcar/04alldel.php',
                        data: {
                            idarr,
                        },
                        success: str => {

                        }
                    });
                    _this.sumall();

                }
            });

        }


        sumall() {//勾选商品总个数  每个功能都要调用
            let numall = 0;//选中商品总数量
            let moneyall = 0;
            let learr2 = document.querySelectorAll('.J-spu-checkbox');
            for (let i = 0; i < learr2.length; i++) {
                if (learr2[i].checked) {//如果勾选把总价进行累加
                    moneyall = learr2[i].parentNode.previousElementSibling;
                    console.log(moneyall);
                }

            }
        }

        claer() {
            $('#quantityTotal').html(0);
            $('.amount-total .integer').html(0);
        }




    }

    //调用购物车
    new Car('#goodsZone_6264');



})();