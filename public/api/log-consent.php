<?php
require __DIR__ . '/_bootstrap.php';

$data = json_decode(file_get_contents('php://input'), true);
$consent = $data['consent'] ?? null;

if (!in_array($consent, ['granted', 'denied'], true)) {
    fail(400, 'Invalid consent');
}

try {
    db()->prepare('INSERT INTO consent_log (consent) VALUES (:consent)')
        ->execute(['consent' => $consent]);
    echo json_encode(['status' => 'ok', 'consent' => $consent]);
} catch (PDOException $e) {
    fail(500, 'Could not save consent', $e);
}
