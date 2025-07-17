<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");


$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['message' => 'Aucune donnée reçue']);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "theo.huel30@gmail.com";
    $subject = $data["subject"] ?? "";
    $message = "Nom : " . ($data["name"] ?? "") . "\n";
    $message .= "Email : " . ($data["email"] ?? "") . "\n\n";
    $message .= $data["message"] ?? "";
    $headers = "From: " . ($data["email"] ?? "no-reply@example.com");

    $sent = mail($to, $subject, $message, $headers);

    if ($sent) {
        // Email envoyé à toi, on envoie aussi une réponse automatique à l'expéditeur
        $autoReplyTo = $data["email"] ?? "";
        if (filter_var($autoReplyTo, FILTER_VALIDATE_EMAIL)) {
            $autoSubject = "Merci pour votre message";
            $autoMessage = "Bonjour " . ($data["name"] ?? "") . ",\n\nMerci pour votre message. Nous vous répondrons dès que possible.\n\nCordialement,\nL'équipe MH Business";
            $autoHeaders = "From: theo.huel30@gmail.com"; // Adresse mail d’envoi de la réponse automatique

            mail($autoReplyTo, $autoSubject, $autoMessage, $autoHeaders);
        }

        http_response_code(200);
        echo "Message envoyé avec succès.";
    } else {
        http_response_code(500);
        echo "Erreur lors de l'envoi.";
    }
}
?>
