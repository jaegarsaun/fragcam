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

//Get
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: http://localhost:3000'); // Update the origin as needed

    $username = $_GET['username'];
    $password = $_GET['password']; // eventually we will compare password hashes instead of just the password


    // prepare sql statement
    $sql = "SELECT * FROM users WHERE username = '$username' AND password_hash = '$password'";

    // run sql statement
    try{
        $result = $conn->query($sql);

        // If there is a result return true, else return false
        if ($result->num_rows > 0) {
            echo json_encode(array('success' => true));
        } else {
            echo json_encode(array('success' => false));
        }
    }catch(Exception $e){ // catch errors
        echo "Error: " . $e->getMessage();
    }


}
// post
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: http://localhost:3000'); 

    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    // prepare sql statement to insert user
    $sql = "INSERT INTO users (username, password_hash, email) VALUES ('$username', '$password', '$email')";
    // prepare sql statement to check if the username is already in use
    $sql2 = "SELECT * FROM users WHERE username = '$username'";

    // run sql statement
    try{
        // check if user exists
        $result = $conn->query($sql2);
        if ($result->num_rows > 0) {
            echo json_encode(array('success' => false, 'message' => 'Username already in use'));
        } else {
            // insert user
            $result = $conn->query($sql);
            if ($result) {
                // Insert was successful
                echo json_encode(array('success' => true));
            } else {
                // Insert failed
                echo json_encode(array('success' => false));
            }
        }
    }catch(Exception $e){ // catch errors
        echo "Error: " . $e->getMessage();
    }


}
?>
