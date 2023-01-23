const fs = require("fs");

fs.readFile("./autre/liste_francais_t.txt", (err, data) => {
    if (err) throw err;

    arr = data.toString().split("\r\n");
    document.querySelector("main.centre > div").textContent =
        arr[Math.round(Math.random() * arr.length)] + " De Fou";
});
