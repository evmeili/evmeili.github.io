<?php 
    include 'conn.php';
    $page = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : '1';
    $num = isset($_REQUEST['num']) ? $_REQUEST['num']: '20';
    $cont = isset($_REQUEST['cont']) ? $_REQUEST['cont']: '秒杀组';
    $paixu = isset($_REQUEST['paixu']) ? $_REQUEST['paixu']: '';

    //1.写查询语句
    $index = ($page - 1) * $num;
    if($cont) { 
        if($paixu) {
            $sql = "SELECT * FROM goods WHERE name1 LIKE '%$cont' ORDER BY prince $paixu LIMIT $index,$num";
        } else {
            $sql = "SELECT * FROM goods WHERE name1 LIKE '%$cont' LIMIT $index,$num";
        }
    }

    //2.执行语句
    $res = $conn->query($sql);

    //3.提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);


    $sql2 = "SELECT * FROM goods WHERE name1 LIKE '%$cont'";
    $res2 = $conn->query($sql2);
    

    $data = array(
        'total' => $res2->num_rows,
        'list' => $arr,
        'page' => $page,
        'num' => $num,
    );
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    //5.关闭数据库
    $res->close();
    $conn->close();

?>
