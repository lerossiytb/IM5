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
<?php


/*
// Datenbankverbindung herstellen
$servername = "localhost:3306"; // Hostname (normalerweise "localhost")
$username = "nrossi"; // Benutzername
$password = "?"; // Passwort
$dbname = "nrossi_"; // Datenbankname

$conn = new mysqli($servername, $username, $password, $dbname);

// Überprüfen Sie die Verbindung auf Fehler
if ($conn->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
}

// Wenn das Formular gesendet wurde
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Daten aus dem Formular erfassen
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // SQL-Abfrage zum Einfügen der Daten in die Datenbank
    $sql = "INSERT INTO kontaktanfragen (name, email, nachricht) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Danke, Ihre Nachricht wurde gesendet und in der Datenbank gespeichert.";
    } else {
        echo "Beim Speichern Ihrer Nachricht in der Datenbank ist ein Fehler aufgetreten: " . $conn->error;
    }
}

// Datenbankverbindung schließen
$conn->close();
?>

