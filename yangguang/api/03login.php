<?php
    include 'conn.php';

    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '1';

    //sql语句
    $sql = "SELECT * FROM userinf WHERE username='$name' AND psw='$password'";

    $res = $conn->query($sql);
    // var_dump($res);

    if($res->num_rows) {
        //登录成功
        echo 'yes';
    } else {
        //登陆失败
        echo 'no';
    }

    //关闭数据库
    // $res->close();
    // $conn->close();
?>