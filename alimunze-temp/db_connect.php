<?php
/**
 * Kasenge Miracle Centre Church — Alimunze
 * Database Connection Configuration
 * 
 * Student: Wasswa Makubuya Stephen | VU-CSF-2603-0849
 */

// Database Configuration
define('DB_HOST', 'localhost');   // Usually 'localhost' on XAMPP
define('DB_USER', 'root');        // Default XAMPP username is 'root'
define('DB_PASS', '');            // Default XAMPP password is empty ''
define('DB_NAME', 'kmc_church');  // The database name we created


// Create connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Check connection — stop everything if it fails
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode([
        'status'  => 'error',
        'message' => 'Database connection failed: ' . $conn->connect_error
    ]));
}

// Set character encoding to UTF-8
$conn->set_charset('utf8mb4');
?>
