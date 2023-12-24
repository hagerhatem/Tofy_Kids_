<?php 
 
 $userName=$_REQUEST['userName'];
 $phoneNumber=$_REQUEST['phoneNumber'];
 $email=$_REQUEST['email'];
 $pass=$_REQUEST['password'];

 if(isset($_POST['sign-up-btn']))
 {
    $host ="localhost";
    $user ="root";
    $password ="";
    $db ="tofy_kids";

    $conn = mysqli_connect($host,$user,$password,$db);

    $insert= "insert into kidsdata values('$userName','$phoneNumber','$email','$pass')";

    mysqli_query($conn,$insert);

    if($conn)
    {
       
       header("Location: home.html");
    }
    else
    {
        echo("<h1 style='color:red;'> Error </p>");
    }

 }


?>
