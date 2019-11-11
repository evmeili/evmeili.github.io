var express = require('express');
var router = express.Router();
const {
  find,
  insert,
  update,
  remove
} = require('../db/db')

/* GET home page. */
router.get('/grid', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('grid');
  res.json(data)
});

router.get('/card', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('card');
  res.json(data);
});

//查看更多
router.get('/list', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('list');
  res.json(data);
});

//详情页
router.get('/detail', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  // console.log(req.query)请求头获取信息
  let data = await find('card', req.query);
  res.json(data);
});

//注册
router.post('/regist', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  console.log(req.body.name)
  let data = await find('user', {'name':req.body.name});
  res.json(data);
  if (data.length == 0) {
    let datas = await insert('user', [req.body]);
  } 
});


//登录
router.post('/login', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  // console.log(req.body)请求体获取信息
  let data = await find('user', req.body);
  res.json(data)

});


//查询订单页
router.get('/orderuser', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  // console.log(req.query)请求头获取信息
  let data = await find('order', req.query);
  res.json(data);
});

//加入购物车
router.get('/addcar', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let obj = req.query;
  console.log(obj)
  let order= await find('order', req.query);
  console.log(order)
  if(order.length==0) {
    let data = await find('card', {'name':obj.name});
    let img = data[0]['img']
    let name =data[0]['name']
    let price = data[0]['price']
    let num = data[0]['num']
    let neworder = await insert('order', 
      [{'usrname' :obj.usrname,'img' : img,'name': name,'price': price, 'num' : num}]
      );
    res.json(neworder);
  } else{
    let sum = order[0]['num']*1 +1
    let neworder = await update('order',req.query,{'num': sum} )
  }
});

//加减购物车
router.get('/addto', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await update('order', {'name': req.query.shopname,'usrname':req.query.username},{'num':req.query.num});
});

//删除单个商品
router.get('/delete', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await remove('order',{'usrname':req.query.username},{'name': req.query.shopname});
  // res.json(data);
});

//删除全部商品
router.get('/alldelete', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  console.log(req.query)
  let data = await remove('order',{'usrname':req.query.username});
});

module.exports = router;
