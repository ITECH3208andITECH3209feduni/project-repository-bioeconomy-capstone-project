<?php
require 'connect.php';
if (isset($_POST['register'])) {
   // Get user input from the form
   $username = $_POST['username'];
   $password = $_POST['password'];
   $confirmPassword = $_POST['confirm_password'];
   if (empty($username)) {
       array_push($errors, "Username is required");
   }
   if (empty($password)) {
       array_push($errors, "Password is required");
   }
   if ($password !== $confirmPassword) {
       array_push($errors, "The two passwords do not match");
   }
   $checkQuery = "SELECT * FROM Users WHERE UsernameOrEmail = ?";
   $stmt = $mysqli->prepare($checkQuery);
   $stmt->bind_param("s", $username);
   $stmt->execute();
   $result = $stmt->get_result();
   if ($result->num_rows > 0) {
       array_push($errors, "Username or email already exists");
   }
   if (count($errors) == 0) {
       $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
       $insertQuery = "INSERT INTO Users (UsernameOrEmail, Password) VALUES (?, ?)";
       $stmt = $mysqli->prepare($insertQuery);
      $stmt->bind_param("ss", $username, $hashedPassword);

       if ($stmt->execute()) {
           // Redirect to a success page or login page
           header('location: login.php');
       } else {
           array_push($errors, "Error: " . $stmt->error);
       }
   }}
$mysqli->close();

?>

