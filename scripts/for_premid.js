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
        // Partie carte
        const divCard = document.createElement("div");
        divCard.className = "card_front premid";
        divCard.style = `background-color: ${presence.metadata.color}`;

        // Partie image
        const divFill = document.createElement("div");
        divFill.className = "fill";
        const img = document.createElement("img");
        img.src = presence.metadata.logo;
        divFill.appendChild(img);

        //* Création infos
        const divInfo = document.createElement("div");
        divInfo.className = "info premid";

        // Partie titre
        const title = document.createElement("h2");
        const presenceName = document.createTextNode(presence.metadata.service);
        title.appendChild(presenceName);
        divInfo.appendChild(title);

        // Partie paragraphe
        const description = document.createElement("p");
        const textDesc = document.createTextNode(
            presence.metadata.description?.fr ??
                presence.metadata.description.en
        );
        description.appendChild(textDesc);
        divInfo.appendChild(description);

        // Partie stats
        const divStats = document.createElement("div");
        const [paragrapheCategorie, paragrapheVersion, paragrapheUsers] = [
            document.createElement("p"),
            document.createElement("p"),
            document.createElement("p"),
        ];
        const [textCategorie, textVersion, textUsers] = [
            document.createTextNode(
                `Catégorie : ${presence.metadata.category}`
            ),
            document.createTextNode(`Version : ${presence.metadata.version}`),
            document.createTextNode(`Utilisateurs : ${presence.users}`),
        ];
        paragrapheCategorie.appendChild(textCategorie);
        paragrapheVersion.appendChild(textVersion);
        paragrapheUsers.appendChild(textUsers);
        divStats.appendChild(paragrapheCategorie);
        divStats.appendChild(paragrapheVersion);
        divStats.appendChild(paragrapheUsers);
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
