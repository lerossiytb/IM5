<?php
// Ziel-E-Mail-Adresse
$to = 'nrossi5@gmx.ch';

// Betreff der E-Mail
$subject = 'Neue Kontaktanfrage';

// Sammeln und Verarbeiten der eingegebenen Daten
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Erstellen der E-Mail-Nachricht
$body = "Sie haben eine neue Kontaktanfrage erhalten:\n\n";
$body .= "Name: " . $name . "\n";
$body .= "E-Mail: " . $email . "\n";
$body .= "Nachricht:\n" . $message . "\n";

// Für den E-Mail-Versand erforderliche Header-Informationen
$headers = "From: " . $email;

// E-Mail senden
if(mail($to, $subject, $body, $headers)) {
    echo "Danke, Ihre Nachricht wurde gesendet.";
} else {
    echo "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten.";
}
?>
