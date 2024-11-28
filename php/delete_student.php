<?php
include "connect.php";

$id = $_POST['id'];

$sql = "DELETE FROM students WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "Étudiant supprimé avec succès.";
} else {
    echo "Erreur : " . $conn->error;
}

$conn->close();
?>
