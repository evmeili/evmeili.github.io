<?php
//1.建立连接
$servername = 'localhost';  //主机
$username = 'root'; 
$password = 'root';
$dbname = 'libiao';

$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    //证明连接失败
    die("连接失败：" . $conn->connect_error);
}else{
    //  echo '连接成功';
}
$conn->set_charset('utf8');

?>