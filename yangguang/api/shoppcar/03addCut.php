<?php
include '../conn.php';
$id = isset($_REQUEST['idsh']) ? $_REQUEST['idsh'] : ''; //传入需要加减数量的商品id
$num = isset($_REQUEST['num']) ? $_REQUEST['num'] : ''; //传入商品数量
//加减数量
$jiasql = "UPDATE shopcar SET num='$num' WHERE id=$id";
$jiares = $conn->query($jiasql);
$conn->close();