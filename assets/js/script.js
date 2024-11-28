$(document).ready(function () {
    // Fonction pour charger les étudiants
    function loadStudents() {
        $.get("php/get_students.php", function (data) {
            $("#studentTable").html(data);
        });
    }

    loadStudents(); // Appeler la fonction au chargement de la page

    // Fonction pour afficher un message avec couleur (succès ou erreur)
    function showMessage(message, type = "success") {
        const messageBox = $("#messageBox");
        messageBox
            .removeClass("success error") // Réinitialiser les classes
            .addClass(type)              // Ajouter la classe (success ou error)
            .html(message)               // Ajouter le message
            .fadeIn(500)                 // Faire apparaître la boîte
            .delay(3000)                 // Garder visible pendant 3 secondes
            .fadeOut(500);               // Faire disparaître progressivement
    }

    // Ajouter un étudiant (formulaire)
    $("#addStudent").click(function () {
        const studentForm = `
        <tr id="newStudentRow">
            <td colspan="6">
                <form id="addStudentForm">
                    <input type="text" name="nom" placeholder="Nom" required>
                    <input type="text" name="prenom" placeholder="Prénom" required>
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="date" name="date_naissance" required>
                    <button type="submit" class="btn btn-success">Enregistrer</button>
                </form>
            </td>
        </tr>
        `;
        if (!$('#newStudentRow').length) {
            $("#studentTable").prepend(studentForm);
            $("#newStudentRow").hide().fadeIn(800);
        }
    });

    // Soumettre un formulaire d'ajout d'un étudiant
    $(document).on("submit", "#addStudentForm", function (e) {
        e.preventDefault();
        $.post("php/add_student.php", $(this).serialize(), function (response) {
            showMessage("Étudiant ajouté avec succès.", "success");
            loadStudents();
        }).fail(function () {
            showMessage("Erreur lors de l'ajout de l'étudiant.", "error");
        });
    });

    // Modifier un étudiant
    $(document).on("click", ".btn-edit", function () {
        const id = $(this).data("id");
        const nom = $(this).data("nom");
        const prenom = $(this).data("prenom");
        const email = $(this).data("email");
        const date_naissance = $(this).data("date_naissance");

        const editForm = `
        <tr id="editStudentRow">
            <td colspan="6">
                <form id="editStudentForm">
                    <input type="hidden" name="id" value="${id}">
                    <input type="text" name="nom" value="${nom}" required>
                    <input type="text" name="prenom" value="${prenom}" required>
                    <input type="email" name="email" value="${email}" required>
                    <input type="date" name="date_naissance" value="${date_naissance}" required>
                    <button type="submit" class="btn btn-success">Mettre à jour</button>
                </form>
            </td>
        </tr>
        `;
        if (!$('#editStudentRow').length) {
            $("#studentTable").prepend(editForm);
            $("#editStudentRow").hide().fadeIn(800);
        }
    });

    // Soumettre un formulaire de mise à jour
    $(document).on("submit", "#editStudentForm", function (e) {
        e.preventDefault();
        $.post("php/update_student.php", $(this).serialize(), function (response) {
            showMessage("Étudiant mis à jour avec succès.", "success");
            loadStudents();
        }).fail(function () {
            showMessage("Erreur lors de la mise à jour.", "error");
        });
    });

    // Supprimer un étudiant
    $(document).on("click", ".btn-delete", function () {
        const id = $(this).data("id");
        if (confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?")) {
            $.post("php/delete_student.php", { id: id }, function (response) {
                showMessage("Étudiant supprimé avec succès.", "error");
                loadStudents();
            }).fail(function () {
                showMessage("Erreur lors de la suppression.", "error");
            });
        }
    });

    // Fonction de recherche
    $('#searchInput').on('input', function () {
        let searchValue = $(this).val().toLowerCase();  // Récupérer la valeur de la recherche
        let found = false;

        // Parcourir chaque ligne du tableau pour vérifier les correspondances
        $('#studentTable tr').each(function () {
            let studentData = $(this).text().toLowerCase();  // Récupérer tout le texte de la ligne
            if (studentData.indexOf(searchValue) > -1) {
                $(this).show();  // Afficher la ligne si elle correspond
                found = true;  // Indiquer qu'un résultat a été trouvé
            } else {
                $(this).hide();  // Cacher la ligne si elle ne correspond pas
            }
        });

        // Afficher ou cacher le message "Aucun résultat trouvé"
        if (!found && searchValue.trim() !== "") {
            $('#noResultsMessage').show();  // Afficher le message
        } else {
            $('#noResultsMessage').hide();  // Cacher le message
        }
    });
});
