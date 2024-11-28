// Fonction de prédiction du domaine d'étude basée sur le prénom
function predictDomain(firstName) {
    // Dictionnaire de prénoms avec leurs domaines respectifs (prénoms normalisés en minuscules)
    const domains = {
        "jean": "Informatique",
        "marie": "Biologie",
        "paul": "Physique",
        "sophie": "Chimie",
        "luc": "Mathématiques",
        "alice": "Littérature",
        "marc": "Économie",
        "claire": "Philosophie",
        "thomas": "Ingénierie",
        "julie": "Arts"
    };

    // Normaliser le prénom (mettre en minuscule pour une correspondance insensible à la casse)
    const normalizedFirstName = firstName.toLowerCase();

    // Retourner le domaine basé sur le prénom ou "Général" si le prénom n'est pas trouvé
    return domains[normalizedFirstName] || "Général";
}

// Ajouter un événement "blur" sur l'input prénom pour prédire le domaine
$(document).on("blur", "input[name='prenom']", function () {
    // Récupérer la valeur du prénom (avec trim pour enlever les espaces inutiles)
    const firstName = $(this).val().trim();

    // Vérifier si le champ est vide
    if (!firstName) {
        // Afficher un message ou ignorer
        $("#predictedDomain").text("Veuillez entrer un prénom.");
        return;
    }

    // Appeler la fonction de prédiction
    const prediction = predictDomain(firstName);

    // Afficher le domaine prédit dans un élément HTML
    $("#predictedDomain").text("Domaine prédit : " + prediction);
});
