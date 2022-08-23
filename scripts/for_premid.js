const getMyPresencesDatas = async () => {
    const response = await fetch("https://api.premid.app/v3", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            { presences (author: "240521747852558347") {
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
    return data.data.presences;
};

const createDynamicPresencesCard = async () => {
    const presencesArray = await getMyPresencesDatas();
    for (const presence of presencesArray) {
        const meta = presence.metadata;
        // Partie carte
        const divCard = document.createElement("div");
        divCard.className = "card_front premid";
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

        document.querySelector("main").appendChild(divCard);
    }
};

const PremidPage = async () => {
    await createDynamicPresencesCard();
};

PremidPage();
