<?php
include '../conn.php';
$id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '1'; //获取加入购物车商品id  可选有id传入就查找商品，没有就单纯渲染该购物车
$num = isset($_REQUEST['numShu']) ? $_REQUEST['numShu'] : '2';
$username = isset($_REQUEST['cookie']) ? $_REQUEST['cookie'] : '15878162145'; //获取加入购物车商品id  必填查找该账户下的购物车
$uid = 0; //未登入不存
$ok = 0;
if ($username) { //是否是登入状态
    $namesql = "SELECT *FROM userinf WHERE username='$username'"; //查询这个用户名
    $nameres = $conn->query($namesql);
    $arr = $nameres->fetch_all(MYSQLI_ASSOC);
    $uid = $arr[0]['id'];
    
}
if ($id) { //有id传入就添加商品
    $listsql = "SELECT *FROM goods WHERE id=$id"; //查询商品表中该id的商品信息
    $listres = $conn->query($listsql);
    $listarr = $listres->fetch_all(MYSQLI_ASSOC);
    $gid = $listarr[0]['id']; //获取该商品所有信息
    $name = $listarr[0]['name1'];
    $price = $listarr[0]['prince'];
    $img = $listarr[0]['img'];
    $sum = $listarr[0]['cun'];
    $carsql = "SELECT*FROM shopcar WHERE idus=$uid AND id=$id"; //查询该账号下购物车中是否有该商品
    $carres = $conn->query($carsql);
    if ($carres->num_rows) {
        $thisarr = $carres->fetch_all(MYSQLI_ASSOC);
        $numall = $num + $thisarr[0]['num'] * 1;
        $sql = "UPDATE shopcar SET num='$numall' WHERE id=$id";
        $res = $conn->query($sql);
    } else {
        //添加该商品
        $sql = "INSERT INTO shopcar (id,name,price,num,img,idus,kucun)	VALUES('$gid','$name','$price','$num','$img','$uid','$sum')";
        $res = $conn->query($sql);
    }
}

//按时间查询购物车表所有商品
$car = "SELECT* FROM shopcar WHERE idus=$uid ORDER BY time desc";
$cars = $conn->query($car);
$arr = $cars->fetch_all(MYSQLI_ASSOC);
$json = array(
    'code' => $ok,
    'obj' => $arr
);
echo json_encode($json,JSON_UNESCAPED_UNICODE);
$conn->close();
