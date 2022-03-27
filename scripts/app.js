const navSlide = () => {
    // document.querySelector permet de récupérer un objet donné, comme une classe par exemple
    const burger = document.querySelector(".burger");
    const navBar = document.getElementsByTagName("nav")[0];
    const main = document.getElementsByTagName("main")[0];
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li"); // Récupère tous les li de la classe nav-links

    //* Ajout d'un listener on click pour le burger
    burger.addEventListener("click", () => {
        //* La fonction ci-dessous permet d'ajouter la classe de l'élément en la classe passée en paramètre
        nav.classList.toggle("nav-active");
        // Suivant la classe présente, ajoute l'autre classe
        if (navBar.classList[0] == "nav-bar-active") {
            navBar.classList.remove("nav-bar-active");
            navBar.classList.add("nav-bar-inactive");
            main.classList.add("mainAnim");
        } else if (
            navBar.classList[0] == "nav-bar-inactive" ||
            navBar.classList[0] == undefined
        ) {
            navBar.classList.remove("nav-bar-inactive");
            navBar.classList.add("nav-bar-active");
            main.classList.remove("mainAnim");
        }

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

const animationFooter = () => {
    // Récupère les éléments que l'on souhaite animer
    const nav = document.getElementsByTagName("nav")[0];
    const footer = document.getElementsByTagName("footer")[0];
    // Quand le chargement commence, s'assure que la classe d'animation est retirée
    window.addEventListener("loadstart", () => {
        footer.classList.remove("affichageFooter");
        nav.classList.remove("navAnim");
    });
    // Quand le chargement est terminé, lance l'animation en attribuant la classe à l'élément que l'on souhaite animer
    window.addEventListener("load", () => {
        footer.classList.add("affichageFooter");
        nav.classList.add("navAnim");
        nav.style.opacity = 1;
        setTimeout(() => {
            nav.classList.remove("navAnim");
        }, 1000);
    });
};

const app = () => {
    navSlide();
    animationFooter();
};

app();
