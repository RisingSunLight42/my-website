const allPanel = document.querySelectorAll(".visible_panel"); // Récupère toutes les croix des panels

allPanel.forEach((panel) => {
    panel.addEventListener("click", function () {
        const height = this.parentNode.childNodes[3].scrollHeight; // Récupère la hauteur de l'élément, même masque
        const currentChoice = this.parentNode.childNodes[3]; // Récupère l'élément
        const cross = this.childNodes[3];

        if (cross.className.includes("anim_changement_etat")) {
            // S'il y a la classe d'anim, on ferme l'encart
            cross.className = "croix";
            gsap.to(currentChoice, {
                duration: 0.2,
                height: 0,
                opacity: 0,
                padding: "0px 15px",
            });
        } else {
            // S'il n'y a pas la classe d'anim, on ouvre l'encart
            cross.className = "croix anim_changement_etat";
            gsap.to(currentChoice, {
                duration: 0.2,
                height: height + 40,
                opacity: 1,
                padding: "20px 15px",
            });
        }
    });
});
