<?php
	$email=$_GET['email'];
	$f_name=$_GET['f_name'];
	$l_name=$_GET['l_name'];
	$phone=$_GET['phone'];
	$password=$_GET['password'];

	// 创建连接
	$servername ="localhost";
    $username    ="root";
    $upassword     ="123456";
    $database     ="mobile";
    $conn = new mysqli($servername, $username, $upassword, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

	$sql = "insert into user value('$email','$f_name','$l_name','$phone','$password')";
	
	//echo $sql;
	if($conn->query($sql))
		echo "success";
	else
		echo "failed";
	//$result = mysqli_query($conn,$sql);
	//echo json_encode($db_goodsid);
?>