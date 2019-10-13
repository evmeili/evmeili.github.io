(function () {
  let datail = document.getElementById('xiang'); //详情数据渲染
  let zhubox = document.getElementById('goodsBrowseList'); //足迹
  let idw = decodeURI(location.search.slice(1));   //获取url，进行id的提取

  function init() {
    ajax({
      type: 'get',
      url: '../api/04xiangqing.php',
      data: {
        idw,
      },
      success: str => {

        creat(str);

      }
    });

  }
  function creat(str) {
    let arr = JSON.parse(str);
    // console.log(arr);
    let html = arr.map(item => {
      return `
            <div class="ncs-detail" id="ncs-detail">
            <div id="ncsGoodsPicture" class="ncs-goods-picture image_zoom"> 
                <div id="Zoomer" class="MagicZoomPlus">
                      <img src="${item.img}" >
                </div> 
                <div class="MagicZoomPup" id="MagicZoomPup">
                </div>
                  <div class="MagicZoomBigImageCont" id="MagicZoomBigImageCont"> 
                         <img src="${item.img}" alt="">
                  </div>
            </div>
          <div class="ncs-goods-summary model-retail">
            <div class="ncs-goods-name">
              <h1>${item.name1}</h1>
              <strong>${item.name2}</strong> 
            </div>
               
            <div class="goods-sale-off clearfix ongoing" id="retailDiscountPanel">
                  <div class="name">
                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>促销 - 限时折扣
                  </div>
                  <div class="date">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>距结束
                    <time id="saleCountDown">
                      <span data-cd-type="allHours">07</span>
                      小时<span class="" data-cd-type="minutes">55</span>
                      分钟<span class="" data-cd-type="seconds">24</span>
                      秒
                    </time>
                  </div>
                  <div class="rule-details"> 
                    <p>活动描述：小品专享折扣</p>
                    <time>活动时间：2019-10-07 00:00:00 - 2019-10-07 23:59:59</time>
                    <a href="###">更多活动商品...</a> 
                  </div>
            </div>
               
            <div class="ncs-meta pr">
                <dl class="goods-price" id="goodsPriceHtml">
                  <dt>价格</dt>
                  <dd>
                      <span class="goods-price-real">
                          <strong id="rmPrice" class="number number-thin">
                              <span class="yuan">￥</span>
                              <span class="integer">${item.prince}</span>
                          </strong>
          
                          <sub class="original-price" id="basePrice">
                              <span class="yuan">￥</span>
                              <span class="integer">299.00</span>
                          </sub>
          
                      </span>
                  </dd>
                </dl>
            </div>
            <div class="goods-gift" id="goodsGiftHtml"></div>
              <div class="ncs-logistics"> 
                <dl id="ncs-freight" class="ncs-freight ">
                  <dt>物流</dt>
                  <dd class="ncs-freight_box">
                    <div class="fl m-r-5">配送至</div>
                    <div id="ncsFreightSelector" class="ncs-freight-select">
                      <div class="text">
                        <div id="areaInfoText">广东省广州市荔湾区</div>
                        <b>∨</b> </div>
                      <div class="content" style="display: none;">
                        <div id="ncs-stock" class="ncs-stock" data-widget="tabs">
                          <div class="mt">
                            <ul class="tab" id="ncsTopTabs">
                              <li data-index="0" data-widget="tab-item" class=""> <a href="###" class="hover"><em>广东省</em><i> ∨</i></a> </li>
                            <li data-index="1" data-widget="tab-item" class=""><a href="###" class="hover"><em>广州市</em><i> ∨</i></a></li><li data-index="2" data-widget="tab-item" class=""><a href="javascript:;" class="hover"><em>荔湾区</em><i> ∨</i></a></li></ul>
                          </div>
                          <div id="stockItem_0" data-widget="tab-content" data-area="0" style="display: none;">
                            <ul class="area-list"><li><a data-value="1" data-deep="1" data-area-parent-id="0" href="###">北京市</a></li><li><a data-value="2" data-deep="1" data-area-parent-id="0" href="javascript:;">天津市</a></li><li><a data-value="3" data-deep="1" data-area-parent-id="0" href="javascript:;">河北省</a></li><li><a data-value="4" data-deep="1" data-area-parent-id="0" href="javascript:;">山西省</a></li><li><a data-value="5" data-deep="1" data-area-parent-id="0" href="javascript:;">内蒙古自治区</a></li><li><a data-value="6" data-deep="1" data-area-parent-id="0" href="javascript:;">辽宁省</a></li><li><a data-value="7" data-deep="1" data-area-parent-id="0" href="javascript:;">吉林省</a></li><li><a data-value="8" data-deep="1" data-area-parent-id="0" href="javascript:;">黑龙江省</a></li><li><a data-value="9" data-deep="1" data-area-parent-id="0" href="javascript:;">上海市</a></li><li><a data-value="10" data-deep="1" data-area-parent-id="0" href="javascript:;">江苏省</a></li><li><a data-value="11" data-deep="1" data-area-parent-id="0" href="javascript:;">浙江省</a></li><li><a data-value="12" data-deep="1" data-area-parent-id="0" href="javascript:;">安徽省</a></li><li><a data-value="13" data-deep="1" data-area-parent-id="0" href="javascript:;">福建省</a></li><li><a data-value="14" data-deep="1" data-area-parent-id="0" href="javascript:;">江西省</a></li><li><a data-value="15" data-deep="1" data-area-parent-id="0" href="javascript:;">山东省</a></li><li><a data-value="16" data-deep="1" data-area-parent-id="0" href="javascript:;">河南省</a></li><li><a data-value="17" data-deep="1" data-area-parent-id="0" href="javascript:;">湖北省</a></li><li><a data-value="18" data-deep="1" data-area-parent-id="0" href="javascript:;">湖南省</a></li><li><a data-value="19" data-deep="1" data-area-parent-id="0" href="javascript:;">广东省</a></li><li><a data-value="20" data-deep="1" data-area-parent-id="0" href="javascript:;">广西壮族自治区</a></li><li><a data-value="21" data-deep="1" data-area-parent-id="0" href="javascript:;">海南省</a></li><li><a data-value="22" data-deep="1" data-area-parent-id="0" href="javascript:;">重庆市</a></li><li><a data-value="23" data-deep="1" data-area-parent-id="0" href="javascript:;">四川省</a></li><li><a data-value="24" data-deep="1" data-area-parent-id="0" href="javascript:;">贵州省</a></li><li><a data-value="25" data-deep="1" data-area-parent-id="0" href="javascript:;">云南省</a></li><li><a data-value="26" data-deep="1" data-area-parent-id="0" href="javascript:;">西藏自治区</a></li><li><a data-value="27" data-deep="1" data-area-parent-id="0" href="javascript:;">陕西省</a></li><li><a data-value="28" data-deep="1" data-area-parent-id="0" href="javascript:;">甘肃省</a></li><li><a data-value="29" data-deep="1" data-area-parent-id="0" href="javascript:;">青海省</a></li><li><a data-value="30" data-deep="1" data-area-parent-id="0" href="javascript:;">宁夏回族自治区</a></li><li><a data-value="31" data-deep="1" data-area-parent-id="0" href="javascript:;">新疆维吾尔自治区</a></li><li><a data-value="32" data-deep="1" data-area-parent-id="0" href="javascript:;">台湾省</a></li><li><a data-value="33" data-deep="1" data-area-parent-id="0" href="javascript:;">香港特别行政区</a></li><li><a data-value="34" data-deep="1" data-area-parent-id="0" href="javascript:;">澳门特别行政区</a></li><li><a data-value="35" data-deep="1" data-area-parent-id="0" href="javascript:;">海外</a></li></ul>
                          </div>
                          <div id="stockItem_1" data-widget="tab-content" data-area="1" style="display: none;">
                            <ul class="area-list"><li><a data-value="289" data-deep="2" data-area-parent-id="19" href="###">广州市</a></li><li><a data-value="290" data-deep="2" data-area-parent-id="19" href="javascript:;">韶关市</a></li><li><a data-value="291" data-deep="2" data-area-parent-id="19" href="javascript:;">深圳市</a></li><li><a data-value="292" data-deep="2" data-area-parent-id="19" href="javascript:;">珠海市</a></li><li><a data-value="293" data-deep="2" data-area-parent-id="19" href="javascript:;">汕头市</a></li><li><a data-value="294" data-deep="2" data-area-parent-id="19" href="javascript:;">佛山市</a></li><li><a data-value="295" data-deep="2" data-area-parent-id="19" href="javascript:;">江门市</a></li><li><a data-value="296" data-deep="2" data-area-parent-id="19" href="javascript:;">湛江市</a></li><li><a data-value="297" data-deep="2" data-area-parent-id="19" href="javascript:;">茂名市</a></li><li><a data-value="298" data-deep="2" data-area-parent-id="19" href="javascript:;">肇庆市</a></li><li><a data-value="299" data-deep="2" data-area-parent-id="19" href="javascript:;">惠州市</a></li><li><a data-value="300" data-deep="2" data-area-parent-id="19" href="javascript:;">梅州市</a></li><li><a data-value="301" data-deep="2" data-area-parent-id="19" href="javascript:;">汕尾市</a></li><li><a data-value="302" data-deep="2" data-area-parent-id="19" href="javascript:;">河源市</a></li><li><a data-value="303" data-deep="2" data-area-parent-id="19" href="javascript:;">阳江市</a></li><li><a data-value="304" data-deep="2" data-area-parent-id="19" href="javascript:;">清远市</a></li><li><a data-value="305" data-deep="2" data-area-parent-id="19" href="javascript:;">东莞市</a></li><li><a data-value="306" data-deep="2" data-area-parent-id="19" href="javascript:;">中山市</a></li><li><a data-value="307" data-deep="2" data-area-parent-id="19" href="javascript:;">潮州市</a></li><li><a data-value="308" data-deep="2" data-area-parent-id="19" href="javascript:;">揭阳市</a></li><li><a data-value="309" data-deep="2" data-area-parent-id="19" href="javascript:;">云浮市</a></li></ul>
                          </div>
                          <div id="stockItem_2" data-widget="tab-content" data-area="2">
                            <ul class="area-list"><li><a data-value="3118" data-deep="3" data-area-parent-id="289" href="###">荔湾区</a></li><li><a data-value="3119" data-deep="3" data-area-parent-id="289" href="javascript:;">越秀区</a></li><li><a data-value="3120" data-deep="3" data-area-parent-id="289" href="javascript:;">海珠区</a></li><li><a data-value="3121" data-deep="3" data-area-parent-id="289" href="javascript:;">天河区</a></li><li><a data-value="3122" data-deep="3" data-area-parent-id="289" href="javascript:;">白云区</a></li><li><a data-value="3123" data-deep="3" data-area-parent-id="289" href="javascript:;">黄埔区</a></li><li><a data-value="3124" data-deep="3" data-area-parent-id="289" href="javascript:;">番禺区</a></li><li><a data-value="3125" data-deep="3" data-area-parent-id="289" href="javascript:;">花都区</a></li><li><a data-value="3126" data-deep="3" data-area-parent-id="289" href="javascript:;">南沙区</a></li><li><a data-value="3127" data-deep="3" data-area-parent-id="289" href="javascript:;">从化区</a></li><li><a data-value="3128" data-deep="3" data-area-parent-id="289" href="javascript:;">增城区</a></li><li><a data-value="45138" data-deep="3" data-area-parent-id="289" href="javascript:;">增城市</a></li><li><a data-value="45238" data-deep="3" data-area-parent-id="289" href="javascript:;">从化市</a></li><li><a data-value="45251" data-deep="3" data-area-parent-id="289" href="javascript:;">广州市</a></li><li><a data-value="45318" data-deep="3" data-area-parent-id="289" href="javascript:;">萝岗区</a></li></ul>
                          </div>
                        </div>
                      </div>
                       
                    <div id="ncs-freight-prompt"><strong>有货</strong><span>免运费</span></div>
                  </dd>
                </dl>
               </div>

            <div class="ncs-service">
              <dl>
                <dt>服务</dt>
                <dd>
                    由
                    <a href="###">
                        <span class="service-name">官方店铺&nbsp;&nbsp;</span>
                    </a>
                发货，并提供售后服务。
                </dd>
              </dl>
            </div>
            <div class="ncs-key" id="nc-spec-panel">
          <div id="modalNullPanel">
          <div class="ncs-retail-modal">
          
            <dl>
              <dt class="ncs-number">数量</dt>
              <dd>
                <div id="rmNumValuePanel" class="amount" style="display: block; ">
  
                      <input type="button" value="-" class="fa minus" id="mnBuyNumCutBtn"  aria-hidden="true">
                  <input type="text" name="" id="mnBuyNumInput" value="1" size="3" maxlength="6" class="input-text" data-goods-storage="125" data-goods-id="10183" data-batch-num0="1" data-batch-num1="0" data-batch-num2="0" data-web-price0="279" data-web-price1="279" data-web-price2="279" data-limit-amount="0" data-goods-web-usable="1" autocomplete="off">
                  <input type="button" value="+" class="fa plus" id="mnBuyNumAddBtn" aria-hidden="true"></span>
                  <span class="m-l-5">
                        组
                    </span>
                  </div>
                <div class="m-l-10 fl" id="storageHint">（库存<span nctype="goods_stock" id="ku">${item.cun}</span>组）</div>
                      <div class="m-l-10 fl" id="buyLimitMargin" data-buy-limit="10" data-buy-limit-margin="10">每人限购<span>10</span>组</div>
              </dd>
            </dl>
          </div>
              <div class="ncs-buy">
                  <div class="ncs-btn"><a href="###" id="buyNowSubmitBtn" class="buynow" title="立即购买">立即购买</a> 
                     <a href="###" id="addCartBtn" class="addcart" title="加入购物车"> <i class="fa fa-shopping-cart"></i>加入购物车 </a> 
                    </div>
                 
              </div>
          </div>    
         </div>
              <div class="ncs-cti m-t-10">
                <dl>
                  <dt>服务承诺</dt>
                  <dd>
                    <span>
                        <img src="https://statics.cnrmall.com/public/img/cti/7day30.png">
                        <a href="###">15天无理由退换货，30天只换不修</a>
                    </span>
                  </dd>
                </dl>
              </div>
          <div class="ncs-cti m-t-10">
            <dl>
              <dt>温馨提示</dt>
              <dd>
                <p style="color:#999">国家药监局提示您：如您购买化妆品类商品，请正确认识化妆品功效，化妆品不能替代药品，不能治疗皮肤病等疾病</p>
              </dd>
            </dl>
          </div>
        </div>`;
    }).join('');
    datail.innerHTML = html;

    let main = document.getElementById('Zoomer'); //主图
    let mask = document.getElementById('MagicZoomPup'); //遮罩盒子3
    let biger = document.getElementById('MagicZoomBigImageCont');  //大图
    let wrap = document.getElementById('xiang'); //大大盒子中间那层
    let wrap1 = document.getElementById('ncsGoodsPicture'); //大大盒子中间那层
    let wrapbox = document.getElementsByClassName('ncs-detail-wrap')[0];

    wrap1.onmouseover = function () {
      mask.style.display = 'block';
      biger.style.display = 'block';
    }
    wrap1.onmouseout = function () {
      biger.style.display = 'none';
      mask.style.display = 'none';
    }
    //3.鼠标在主盒子1滑动的过程: 半透明盒子2跟着鼠标走，遮罩动了，大图跟着按照比列运动
    document.onmousemove = function (ev) {
      let iLeft = ev.pageX - wrap.offsetLeft - mask.offsetWidth / 2;
      let iTop = ev.pageY - wrapbox.offsetTop - mask.offsetHeight / 2;
      //临界值
      if (iLeft <= 0) {
        iLeft = 0;
      } else if (iLeft >= main.offsetWidth - mask.offsetWidth) {
        iLeft = main.offsetWidth - mask.offsetWidth;
      }
      if (iTop <= 0) {
        iTop = 0;
      } else if (iTop >= main.offsetHeight - mask.offsetHeight) {
        iTop = main.offsetHeight - mask.offsetHeight;
      }

      //比例系数
      let scalX = iLeft / (main.offsetWidth - mask.offsetWidth);
      let scalY = iTop / (main.offsetHeight - mask.offsetHeight);
      mask.style.left = iLeft + 'px';
      mask.style.top = iTop + 'px';

      //大图运动距离：大图的最大运动距离*比例系数
      biger.children[0].style.left = (biger.offsetWidth - biger.children[0].offsetWidth) * scalX + 'px';
      biger.children[0].style.top = (biger.offsetHeight - biger.children[0].offsetHeight) * scalY + 'px';
    }


  }
  init();

  //足迹查询
  function zuji() {
    let usecokic = getcookie('username');
    ajax({
      type: 'get',
      url: '../api/05zuji.php',
      data: {
        idw,
        usecokic,
      },
      success: str => {
        // console.log(str);
        creat(str);
      }
    });

    function creat(str) {
      let arr = JSON.parse(str);
      // console.log(arr);
      let datt = arr.map(item => {
        return `<li class="goods-item">
                                <div class="goods-pic">
                                  <a href="###">
                                    <img  src="${item.img}">
                                  </a> 
                                  </div>
                                <dl class="goods-info">
                                  <dt>
                                    <a href="###">${item.name}</a>
                                  </dt>
                                  <span class="yuan">￥</span>
                                  <span class="integer">${item.price}</span>
                                  <span class="pointer">.</span>
                                  <span class="decimal">00</span>
                                </dl>
                        </li>`;

      }).join('');
      zhubox.innerHTML = datt;
    }

  }
  zuji();

  //加入购物车、数量加减
  window.onload = function () { //整个文档加载完才执行这里
    let carbtn = document.getElementById('addCartBtn'); //加入购物车按钮
    let cont = document.getElementById('mnBuyNumInput'); //输入框数量
    let cut = document.getElementById('mnBuyNumCutBtn'); //减少
    let add = document.getElementById('mnBuyNumAddBtn'); //增加
    let kucun = document.getElementById('ku');  //库存

    //点击加入购物车
    carbtn.onclick = function () {
      let num = cont.value;
      let uscook = getcookie('username');
      if (uscook) {
        location.href = '14gouwuche.html?' + num;
        setcookie('ssid', idw);
      } else {
        location.href = '14gouwuche.html?' + num;

      }

    }

    //加减数量
    let ku = kucun.innerHTML;

    function changNum(shu) {
      if (shu < 1) {  //设置下限：最少一份
        shu = 1;
      } else if (shu >= ku) { //上限，不能超过库存量
        
        shu = ku;
      }
      cont.value = shu;
    }
    add.onclick = function () {
      let shu = cont.value;
      shu++;
      changNum(shu);

    }
    cut.onclick = function () {
      let shu = cont.value;
      shu--;
      changNum(shu);
    }
    cont.onblur = function () {
      let shu = this.value;
      console.log(shu);
      changNum(shu);
    }

  }

  //选项卡
  let ul11 = document.getElementById('ul11');
  let ka = document.getElementById('ka');
  let li1 = ul11.getElementsByTagName('li');
  let xuan1 = ka.getElementsByClassName('xuan1');

  for (let i = 0; i < li1.length; i++) {
    li1[i].index = i;
    li1[i].onclick = function () {
      paita();
      this.className = 'li5'; //每一次都是只有个是高亮的
      xuan1[this.index].style.display = 'block';
    }
  }

  function paita() {  //排他
    for (let j = 0; j < li1.length; j++) {
      li1[j].className = '';
      xuan1[j].style.display = 'none';
    }
  }










})();