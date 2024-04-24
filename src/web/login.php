<?php
$host = "postgres"; 
$port = "5432";
$dbname = "your_database_name";
$user = "your_postgres_user";
$password = "your_postgres_password";

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
    die("Connection failed: " . pg_last_error());
}

header("location:index.html");

// Function to sanitize user input
function sanitize_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

pg_close($conn);
?>
