const navSlide = () => {
    // document.querySelector permet de récupérer un objet donné, comme une classe par exemple
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li"); // Récupère tous les li de la classe nav-links

    //* Ajout d'un listener on click pour le burger
    burger.addEventListener("click", () => {
        //* La fonction ci-dessous permet de changer la classe de l'élément en la classe passée en paramètre
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

        //* Animation du burger
        burger.classList.toggle("toggle");
    });
};

navSlide();
