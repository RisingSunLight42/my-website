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
        const newDiv = document.createElement("div");
        const presenceName = document.createTextNode(presence.metadata.service);
        newDiv.appendChild(presenceName);
        document.querySelector("main").appendChild(newDiv);
    }
};

const PremidPage = async () => {
    await createDynamicPresencesCard();
};

PremidPage();
