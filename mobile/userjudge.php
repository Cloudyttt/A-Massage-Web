<?php
	$event=$_POST['event'];
	$email=$_POST['username'];
	$pass=$_POST['password'];

	$servername ="localhost";
    $username    ="root";
    $upassword     ="123456";
    $database     ="mobile";
    $conn = new mysqli($servername, $username, $upassword, $database);
	//echo $email;
	$sql = "select * from  user where email = '". $email ." 'and password ='".$pass."'";
	if ($conn->query($sql)->num_rows > 0) {
		echo $email;
    }
	else
		echo "NULL";
	
	
?>