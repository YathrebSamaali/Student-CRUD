<?php
include('connect.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $date_naissance = $_POST['date_naissance'];

    $sql = "INSERT INTO students (nom, prenom, email, date_naissance) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nom, $prenom, $email, $date_naissance);

    if ($stmt->execute()) {
        echo "Étudiant ajouté avec succès.";
    } else {
        echo "Erreur lors de l'ajout.";
    }

    $stmt->close();
    $conn->close();
}
?>
