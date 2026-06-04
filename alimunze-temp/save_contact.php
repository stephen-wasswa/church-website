<?php
/**
 * Kasenge Miracle Centre Church — Alimunze
 * Save Contact Form to MySQL
 * 
 * Student: Wasswa Makubuya Stephen | VU-CSF-2603-0849
 */

// Allow the HTML page to talk to this PHP file
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

// Read & clean the data sent from the form
$first_name = trim(htmlspecialchars($_POST['first_name'] ?? ''));
$last_name  = trim(htmlspecialchars($_POST['last_name']  ?? ''));
$email      = trim(htmlspecialchars($_POST['email']      ?? ''));
$phone      = trim(htmlspecialchars($_POST['phone']      ?? ''));
$visit_date = trim($_POST['visit_date'] ?? '');
$message    = trim(htmlspecialchars($_POST['message']    ?? ''));

// Validate required fields
if (empty($first_name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'First name and email are required.']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Please enter a valid email address.']);
    exit;
}

// Handle empty visit_date (set to NULL if not provided)
$visit_date_val = !empty($visit_date) ? $visit_date : null;

// Save to database using a prepared statement
$stmt = $conn->prepare(
    "INSERT INTO contact_messages (first_name, last_name, email, phone, visit_date, message)
     VALUES (?, ?, ?, ?, ?, ?)"
);

// Bind the values: s = string, s = string, etc.
$stmt->bind_param('ssssss', $first_name, $last_name, $email, $phone, $visit_date_val, $message);

if ($stmt->execute()) {
    // Success!
    echo json_encode([
        'status'  => 'success',
        'message' => 'Thank you, ' . $first_name . '! Your message has been received. We will get back to you soon.'
    ]);
} else {
    // Something went wrong with saving
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Could not save your message. Please try again.']);
}

// Close the statement and connection — good practice
$stmt->close();
$conn->close();
?>
