const allCross = document.querySelectorAll(".croix"); // Récupère toutes les croix des panels

allCross.forEach((cross) => {
    cross.addEventListener("click", function () {
        const height = this.parentNode.parentNode.childNodes[3].scrollHeight; // Récupère la hauteur de l'élément, même masque
        const currentChoice = this.parentNode.parentNode.childNodes[3]; // Récupère l'élément
        if (this.className.includes("anim_changement_etat")) {
            // S'il y a la classe d'anim, on ferme l'encart
            this.className = "croix";
            gsap.to(currentChoice, {
                duration: 0.2,
                height: 0,
                opacity: 0,
                padding: "0px 15px",
            });
        } else {
            // S'il n'y a pas la classe d'anim, on ouvre l'encart
            this.className = "croix anim_changement_etat";
            gsap.to(currentChoice, {
                duration: 0.2,
                height: height + 40,
                opacity: 1,
                padding: "20px 15px",
            });
        }
    });
});
