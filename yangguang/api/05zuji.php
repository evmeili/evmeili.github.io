<?php
include 'conn.php';
$id = isset($_REQUEST['idw']) ? $_REQUEST['idw'] : ''; //传入商品id
$username = isset($_REQUEST['usecokic']) ? $_REQUEST['usecokic'] : ''; //传入用户昵称
$uid = 0; //未登入uid都存为0
if ($username) { //是否是登入状态
    $namesql = "SELECT *FROM userinf WHERE username='$username'"; //查询这个用户名
    $nameres = $conn->query($namesql);
    $arr = $nameres->fetch_all(MYSQLI_ASSOC);
    $uid = $arr[0]['id'];
    
}
$sql = "SELECT*FROM zuji WHERE	id=$id"; //查询足迹中是否有这个商品
$res = $conn->query($sql);
if ($res->num_rows) { //存在商品删除
    $sql1 = "DELETE FROM zuji WHERE id=$id";
    $res1 = $conn->query($sql1);
}
$listsql = "SELECT* FROM goods WHERE id=$id"; //查询商品表
$listres = $conn->query($listsql);
$arr = $listres->fetch_all(MYSQLI_ASSOC); //查询到对应id的数组
$gid = $arr[0]['id']; //取出数组对应的值
$name = $arr[0]['name1'];
$price = $arr[0]['prince'];
$img = $arr[0]['img'];
$sql2 = "INSERT INTO zuji (id,name,price,img,uid) VALUES('$gid','$name','$price','$img','$uid')"; //插入到足迹表
$res2 = $conn->query($sql2);
$footsql = "SELECT* FROM zuji  WHERE uid=$uid ORDER BY time desc LIMIT 0,5"; //根据uid查询足迹表前5条数据根据时间排序
$footres = $conn->query($footsql);
$json = $footres->fetch_all(MYSQLI_ASSOC);
echo json_encode($json,JSON_UNESCAPED_UNICODE); //传给前端

$res->close();
$listres->close();
$footres->close();
$conn->close();


?>