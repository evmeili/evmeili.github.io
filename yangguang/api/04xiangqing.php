<?php
    include 'conn.php';
    $idw = isset($_REQUEST['idw']) ? $_REQUEST['idw'] : '2';

    $sql = "SELECT * FROM goods WHERE id = $idw";
    
    $res = $conn->query($sql);
   
    $arr = $res->fetch_all(MYSQLI_ASSOC);

    // var_dump($arr);
    
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);

    $res->close();
    $conn->close();
?>