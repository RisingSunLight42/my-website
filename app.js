const navSlide = () => {
    // document.querySelector permet de récupérer un objet donné, comme une classe par exemple
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li"); // Récupère tous les li de la classe nav-links

    //* Ajout d'un listener on click pour le burger
    burger.addEventListener("click", () => {
        //* La fonction ci-dessous permet d'ajouter la classe de l'élément en la classe passée en paramètre
        document.body.classList.toggle("masque-overflow");
        nav.classList.toggle("nav-active");

        //* Animation des liens
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                // S'il y a déjà une animation, l'annule pour "ranger" les liens
                link.style.animation = "";
            } else {
                // Sinon, anime l'apparition de la nav bar avec le texte faisant office de commande
                link.style.animation = `navLinkFade 0.75s ease forwards ${
                    index / 3 + 0.5
                }s`;
            }
        });

        //* Animation du burger, ajoute une classe toggle qui permet de le transformer en croix
        burger.classList.toggle("toggle");
    });
};

// Récupère les figures pour le slider
const figures = document.querySelectorAll("figure");
// Récupère le nombre d'éléments figures à récupérer
const nbSlide = figures.length;
// Récupère les boutons suivant et précédent
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");

let count = 0;

const slideSuivant = () => {
    figures[count].classList.remove("active");

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    figures[count].classList.add("active");
};
suivant.addEventListener("click", slideSuivant);

const slidePrecedente = () => {
    figures[count].classList.remove("active");

    if (count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    figures[count].classList.add("active");
};
precedent.addEventListener("click", slideSuivant);

const keyPress = (e) => {
    // Sert à gérer la galerie via les flèches, le code 37 correspond à la flèche gauche, 39 à la flèche droite
    if (e.keyCode === 37) {
        slidePrecedente();
    } else if (e.keyCode === 39) {
        slideSuivant();
    }
};
document.addEventListener("keydown", keyPress);

navSlide();
