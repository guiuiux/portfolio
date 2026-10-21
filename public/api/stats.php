<?php
require __DIR__ . '/_bootstrap.php';

session_set_cookie_params(['httponly' => true, 'secure' => true, 'samesite' => 'Strict']);
session_start();
if (empty($_SESSION['admin_logged_in'])) {
    fail(401, 'Unauthorized');
}

try {
    $rows = db()
        ->query('SELECT consent, COUNT(*) AS total FROM consent_log GROUP BY consent')
        ->fetchAll(PDO::FETCH_KEY_PAIR);
    echo json_encode([
        'granted' => (int) ($rows['granted'] ?? 0),
        'denied'  => (int) ($rows['denied'] ?? 0),
    ]);
} catch (PDOException $e) {
    fail(500, 'Could not load stats', $e);
}
