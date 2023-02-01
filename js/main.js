"use strict";
// alert("Bonjour le monde");
let nom = "Loris";

// Affiche la variable dans la console
console.log("Salut, le ", nom);

// récupère le <h1> de la page
const titrePrincipal = document.querySelector("h1");

// titre en jaune
titrePrincipal.style.color = "yellow";


/**
 * Ajoute du style à tous les li de la page
 */
function styleLi() {
// Récupère tous les <li> dans un tableau
    const elementsDeListe = document.querySelectorAll("li");
    console.log(elementsDeListe);

// Mets en rouge le 2e élément trouvé
    elementsDeListe[1].style.color = "red";

// Boucle qui parcourt et mets un fond jaune à tous les éléments
    for (let i = 0; i < elementsDeListe.length; i++) {
        elementsDeListe[i].style.backgroundColor = "yellow";
    }

    for (let element of elementsDeListe) {
        element.style.fontWeight = "bold";
    }
}


// Ecouter l'événement clic sur le titre principale <h1>
titrePrincipal.addEventListener("click", styleLi);

// Ecouter l'envoi du formulaire
const form = document.querySelector("form");
// récupère la <ol> avec la classe commentaires
const olCommentaires= document.querySelector(".commentaires");
// récupère l'input avec l'id commentaire
const inputCommentaire = document.querySelector("#commentaire");

form.addEventListener('submit', function ajouterCommentaire(event){
    event.preventDefault(); // Stoppe l'envoi du formulaire
    // ajoute le contenu du champ commentaire à la liste
    olCommentaires.innerHTML += "<li>" + inputCommentaire.value + "</li>";
    // Vide le champ commentaire
    inputCommentaire.value = "";
    // Redone le focus au champ commentaire
    inputCommentaire.focus();
});