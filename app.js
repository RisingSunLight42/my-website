const navSlide = () => {
    // document.querySelector permet de récupérer un objet donné, comme une classe par exemple
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    //* Ajout d'un listener de click sur le burger
    burger.addEventListener("click", () => {
        //* La liste ci-dessous permet de changer la classe de l'élément en la classe passée en paramètre
        nav.classList.toggle("nav-active");
    });
};

navSlide();
