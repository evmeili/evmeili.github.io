<?php
include '../conn.php';
$id = isset($_REQUEST['ids']) ? $_REQUEST['ids'] : '';
var_dump($id);
$delsql = "DELETE FROM shopcar WHERE id='$id'";
$delres = $conn->query($delsql);
$conn->close();