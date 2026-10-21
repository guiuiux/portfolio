<?php
// Shared setup for the API endpoints: JSON headers + PDO connection.
// Credentials live in config.php (not committed). See config.example.php.

header('Content-Type: application/json; charset=utf-8');

$config = __DIR__ . '/config.php';
if (!is_file($config)) {
    http_response_code(500);
    echo json_encode(['error' => 'Server not configured']);
    exit;
}

function db(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $c = require __DIR__ . '/config.php';
        $pdo = new PDO(
            "mysql:host={$c['host']};dbname={$c['dbname']};charset=utf8mb4",
            $c['username'],
            $c['password'],
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
    }
    return $pdo;
}

/** Log the real error server-side; never echo it to the client. */
function fail(int $status, string $message, ?Throwable $e = null): void
{
    if ($e) {
        error_log($e->getMessage());
    }
    http_response_code($status);
    echo json_encode(['error' => $message]);
    exit;
}
