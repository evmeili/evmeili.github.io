<?php
    include 'conn.php';
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '15878162145';
    $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '15878162145';

    $sql = "INSERT INTO userinf(username,psw) VALUES('$name','$password')";
    
    $res = $conn->query($sql);
    
    if($res) {
        echo 'yes';
    } else {
        echo 'no';
    }

    //关闭数据库
    // $res->close();
    // $conn->close();
?>