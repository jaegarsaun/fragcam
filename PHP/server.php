<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Replace with the actual origin of your web page
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Database connection
$host = '127.0.0.1'; 
$port = 3306; 
$database = 'csfrags';
$username = 'root';
$password = '';

try {
    $conn = new mysqli($host, $username, $password, $database, $port);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Database operations
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: http://localhost:3000'); // Update the origin as needed

    $username = $_GET['username'];
    $password = $_GET['password']; // eventually we will compare password hashes instead of just the password


    // Query the database
    $sql = "SELECT * FROM users WHERE username = '$username' AND password_hash = '$password'";
    $result = $conn->query($sql);
    // If there is a result return true, else return false
    if ($result->num_rows > 0) {
        echo json_encode(array('success' => true));
    } else {
        echo json_encode(array('success' => false));
    }
}
?>
