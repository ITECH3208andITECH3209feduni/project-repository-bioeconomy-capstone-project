<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "bioecon"
$mysqli = new mysqli($host, $username, $password, $database);

if ($mysqli->connect_error) {
   die("Connection failed: " . $mysqli->connect_error);
}
if (isset($_POST['login'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];
  $checkQuery = "SELECT Password FROM Users WHERE UsernameOrEmail = ?";
   $stmt = $mysqli->prepare($checkQuery);
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $result = $stmt->get_result();

   if ($result->num_rows == 1) {
      $row = $result->fetch_assoc();
      $hashedPassword = $row['Password'];

      if (password_verify($password, $hashedPassword)) {

          // Password is correct, redirect to a success page

          header('location: welcome.php');
       } else {
          array_push($errors, "Wrong username or password");
       }

   } else {
      array_push($errors, "Wrong username or password");

   }

}

$mysqli->close();

?>