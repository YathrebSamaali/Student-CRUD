<?php
include('connect.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $date_naissance = $_POST['date_naissance'];

    $sql = "UPDATE students SET nom = ?, prenom = ?, email = ?, date_naissance = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssi", $nom, $prenom, $email, $date_naissance, $id);

    if ($stmt->execute()) {
        echo "L'étudiant a été mis à jour avec succès.";
    } else {
        echo "Erreur lors de la mise à jour de l'étudiant.";
    }
    

    $stmt->close();
    $conn->close();
}
?>
