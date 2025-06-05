// Récupération des éléments HTML5
const toggle = document.querySelector("#toggle");
const nav = document.querySelector("#nav");

// Ecoute de l'événement "click" sur le bouton  et ajout  ou suppression de la classe active sur la navigation
toggle.addEventListener("click", () => nav.classList.toggle("active"));
