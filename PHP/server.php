<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Replace with the actual origin of your web page
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// Database connection

$host = 'localhost'; 
$port = 3306; 
$database = 'csfrags';
$username = 'root';
$password = '';

$conn = new mysqli($host, $username, $password, $database, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}



// Database operations
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: http://localhost:3000'); // Update the origin as needed

    $username = $_POST['username'];
    $password = $_POST['password']; // eventually we will compare password hashes instead of just the password

    echo json_encode(array('username' => $username, 'password' => $password));

    // // Prepare a SQL query to check the username and password
    // $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";

    // // Execute the query
    // $result = $conn->query($sql);

    // if ($result->num_rows > 0) {
    //     // Successful login
    //     // set user credentials
    //     $row = $result->fetch_assoc();
    //     $user_id = $row['user_id'];
    //     // Put user credentials in session variables
    //     $_SESSION['user_id'] = $user_id;

    //     http_response_code(200); // Set HTTP response status code to: 200 - OK
    //     exit; // Make sure to exit the script to prevent further execution

    // } else {
    //     // Failed login
    //     http_response_code(401); // Set HTTP response status code to: 401 - Unauthorized
        
    // }


    

}

?>