<?php
$servername = "localhost";
$dbusername = "uqdggrqf_sampletask_react";
$dbpassword = "#Hv=P%JtQ=2(WctC";
$dbname = "uqdggrqf_sampletask_react";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

// Change these credentials as you want
$admin_username = "admin";
$admin_password = password_hash("admin123", PASSWORD_DEFAULT);

$sql = "INSERT INTO admin_users (username, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $admin_username, $admin_password);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Admin created successfully";
} else {
    echo "Error creating admin or admin already exists";
}

$stmt->close();
$conn->close();
?>
