// Fonction de prédiction du domaine d'étude basée sur le prénom
function predictDomain(firstName) {
    // Dictionnaire de prénoms avec leurs domaines respectifs
    const domains = {
        "Jean": "Informatique",
        "Marie": "Biologie",
        "Paul": "Physique",
        "Sophie": "Chimie",
        "Luc": "Mathématiques"
    };

    // Retourner le domaine basé sur le prénom ou "Général" si le prénom n'est pas trouvé
    return domains[firstName] || "Général";
}

// Ajouter un événement "blur" sur l'input prénom pour prédire le domaine
$(document).on("blur", "input[name='prenom']", function () {
    // Récupérer la valeur du prénom
    const firstName = $(this).val();
    
    // Appeler la fonction de prédiction
    const prediction = predictDomain(firstName);

    // Afficher le domaine prédit
    alert("Domaine prédit : " + prediction);
});
