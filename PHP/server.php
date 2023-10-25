<?php
// $conn = require $_SERVER['DOCUMENT_ROOT'] . '/config.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: http://localhost:3000'); // Update the origin as needed

    $username = $_POST['username'];
    $password = $_POST['password'];

    $response = "username: " . $username . " password: " . $password;

    echo json_encode($response);

}

?>