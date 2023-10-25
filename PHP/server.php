<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    echo json_encode(['status' => 'ok']);
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    echo 'Method not allowed';
}

?>