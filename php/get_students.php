<?php
// get_students.php
include('connect.php'); // Assurez-vous d'inclure votre connexion à la base de données.

$query = "SELECT * FROM students";
$result = mysqli_query($conn, $query);

while ($student = mysqli_fetch_assoc($result)) {
    echo '<tr>';
    echo '<td>' . $student['id'] . '</td>';
    echo '<td>' . $student['nom'] . '</td>';
    echo '<td>' . $student['prenom'] . '</td>';
    echo '<td>' . $student['email'] . '</td>';
    echo '<td>' . $student['date_naissance'] . '</td>';
    echo '<td>
            <button class="btn btn-warning btn-edit" 
                    data-id="' . $student['id'] . '" 
                    data-nom="' . $student['nom'] . '" 
                    data-prenom="' . $student['prenom'] . '" 
                    data-email="' . $student['email'] . '" 
                    data-date_naissance="' . $student['date_naissance'] . '">
                    Modifier
            </button>
            <button class="btn btn-danger btn-delete" data-id="' . $student['id'] . '">Supprimer</button>
          </td>';
    echo '</tr>';
}
?>
