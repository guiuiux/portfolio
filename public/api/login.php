<?php
require __DIR__ . '/_bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail(405, 'Method not allowed');
}

$data = json_decode(file_get_contents('php://input'), true);
$user = (string) ($data['username'] ?? '');
$pass = (string) ($data['password'] ?? '');

try {
    $stmt = db()->prepare('SELECT password_hash FROM admins WHERE username = :username');
    $stmt->execute(['username' => $user]);
    $hash = $stmt->fetchColumn();
} catch (PDOException $e) {
    fail(500, 'Login unavailable', $e);
}

// Accepts modern password_hash() values and the legacy unsalted sha256 hex digest.
// TODO: re-hash legacy rows with password_hash() on successful login.
$ok = false;
if (is_string($hash)) {
    $ok = preg_match('/^\$(2y|argon2)/', $hash)
        ? password_verify($pass, $hash)
        : hash_equals($hash, hash('sha256', $pass));
}

if (!$ok) {
    usleep(300000); // blunt brute-force; add real rate limiting at the host level
    echo json_encode(['success' => false, 'error' => 'Usuário ou senha inválidos']);
    exit;
}

session_set_cookie_params(['httponly' => true, 'secure' => true, 'samesite' => 'Strict']);
session_start();
session_regenerate_id(true);
$_SESSION['admin_logged_in'] = true;
echo json_encode(['success' => true]);
