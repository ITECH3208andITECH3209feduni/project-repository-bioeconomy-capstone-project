<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "bioecon"
$mysqli = new mysqli($host, $username, $password, $database);

if ($mysqli->connect_error) {
   die("Connection failed: " . $mysqli->connect_error);
}

$insertQuery = "INSERT INTO users (UsernameOrEmail, FirstName, LastName, Password) VALUES (?, ?, ?, ?)";
$stmt = $mysqli->prepare($insertQuery);
$stmt->bind_param("ssss", $usernameOrEmail, $firstName, $lastName, $password);

if ($stmt->execute()) {
   echo "User added successfully.";
} else {
   echo "Error: " . $stmt->error;
}
$selectQuery = "SELECT UsernameOrEmail, FirstName, LastName FROM Users";
$result = $mysqli->query($selectQuery);

if ($result->num_rows > 0) {
   while ($row = $result->fetch_assoc()) {
       echo "Username/Email: " . $row["UsernameOrEmail"] . ", First Name: " . $row["FirstName"] . ", Last Name: " . $row["LastName"] . "<br>";
   }
} else {
   echo "No users found.";
}
$mysqli->close();

?>
