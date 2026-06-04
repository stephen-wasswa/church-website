<?php
/**
 * Kasenge Miracle Centre Church — Alimunze
 * Save Prayer Requests to MySQL
 * 
 * Student: Wasswa Makubuya Stephen | VU-CSF-2603-0849
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

// Connect to database
require_once 'db_connect.php';

// Read & clean the data
$full_name = trim(htmlspecialchars($_POST['full_name'] ?? ''));
$request   = trim(htmlspecialchars($_POST['request']   ?? ''));

// Validation
if (empty($full_name) || empty($request)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Please fill in your name and prayer request.']);
    exit;
}

// Save to database
$stmt = $conn->prepare(
    "INSERT INTO prayer_requests (full_name, request) VALUES (?, ?)"
);
$stmt->bind_param('ss', $full_name, $request);

if ($stmt->execute()) {
    echo json_encode([
        'status'  => 'success',
        'message' => 'Your prayer request has been received. Our team is standing with you in faith, ' . $full_name . '.'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Could not save your prayer request. Please try again.']);
}

$stmt->close();
$conn->close();
?>
