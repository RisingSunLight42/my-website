const getMyPresencesDatas = async (author) => {
    const response = await fetch("https://api.premid.app/v3", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            { presences (${
                author ? "author" : "contributor"
            }: "240521747852558347") {
                metadata {
                    service,
                    description,
                    version,
                    logo,
                    thumbnail,
                    color,
                    category,
                },
                users
            }}`,
        }),
    });
    const data = await response.json();
    const presencesUsersSorted = data.data.presences.sort(
        (a, b) => b.users - a.users
    );
    return presencesUsersSorted;
};

const createDynamicPresencesCard = async (author) => {
    const presencesArray = await getMyPresencesDatas(author);
    let total_user = 0;
    for (const presence of presencesArray) {
        const meta = presence.metadata;
        // Partie carte
        const divCard = document.createElement("div");
        divCard.className = "card_front premid";
        divCard.id = meta.service;
        divCard.style = `border: 3px solid ${meta.color}`;

        // Partie image
        const divFill = document.createElement("div");
        divFill.className = "fill";
        const img = document.createElement("img");
        img.src = meta.logo;
        divFill.appendChild(img);

        //* Création infos
        const divInfo = document.createElement("div");
        divInfo.className = "info premid";

        // Partie titre
        const title = document.createElement("h2");
        const presenceName = document.createTextNode(meta.service);
        title.appendChild(presenceName);
        divInfo.appendChild(title);

        // Partie paragraphe
        const description = document.createElement("p");
        const textDesc = document.createTextNode(
            meta.description?.fr ?? meta.description.en
        );
        description.appendChild(textDesc);
        divInfo.appendChild(description);

        // Partie stats
        const divStats = document.createElement("div");
        for (const stat of [
            `Catégorie : ${meta.category}`,
            `Version : ${meta.version}`,
            `Utilisateurs : ${presence.users}`,
        ]) {
            const paragrapheStat = document.createElement("p");
            const texteStat = document.createTextNode(stat);
            paragrapheStat.appendChild(texteStat);
            divStats.appendChild(paragrapheStat);
        }
        divInfo.appendChild(divStats);

        // Complétion carte
        divCard.appendChild(divFill);
        divCard.appendChild(divInfo);

        document
            .querySelector(`section#${author ? "author" : "contributor"}`)
            .appendChild(divCard);
        total_user += presence.users;
    }

    //* Gère ma carte personnelle
    document.getElementById(
        `presence_${author ? "created" : "contributed"}`
    ).textContent = `${
        author ? "Présences créées" : "Présences contribuées"
    } : ${presencesArray.length}`;
    if (author) {
        document.getElementById(
            "total_user"
        ).textContent = `Utilisateurs totaux : ${total_user}`;
    }
};

const PremidPage = async () => {
    await createDynamicPresencesCard(true);
    await createDynamicPresencesCard(false);
};

PremidPage();
