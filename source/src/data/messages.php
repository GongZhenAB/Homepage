<?php
$filename = "messages.txt";
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $msg = trim($data['message'] ?? '');
    if ($msg !== '') {
        file_put_contents($filename, $msg . "\n", FILE_APPEND | LOCK_EX);
    }
    echo json_encode(['status' => 'ok']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!file_exists($filename)) {
        echo json_encode([]);
        exit;
    }
    $lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    echo json_encode($lines);
    exit;
}
?>