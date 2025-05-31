const IS_FRENCH = document.getElementsByTagName("html")[0].lang === "fr";
if (IS_FRENCH) {
    console.log("#! Toujours pas la bonne annonce, mais on y est presque. !#");
} else {
    console.log("#? So much informations everywhere ?#");
}
let NO_TYPING = false;

function toggleTyping() {
    NO_TYPING = !NO_TYPING;
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function randomTimeBetweenRange(min, max) {
    if (NO_TYPING) return 0;
    return Math.max(min, Math.floor(Math.random() * max));
}

async function doTyping() {
    const ALL_TYPING_EFFECTS = document.querySelectorAll(".typing");

    for (let nbTyping=0;nbTyping<ALL_TYPING_EFFECTS.length; nbTyping++) {
        const element = ALL_TYPING_EFFECTS[nbTyping];
        element.classList.remove("typing");
        const TYPING_TEXT = element.getAttribute("typing_text");
        element.removeAttribute("typing_text");
        if (element.classList.contains("progress")) {
            const value = element.getAttribute("value");
            const span = document.createElement("span");
            span.className = "min-width-45";
            span.textContent = value + "%";
            element.append(span);
            await sleep(randomTimeBetweenRange(100, 300));

            const progress = document.createElement("progress");
            progress.setAttribute("max", "100");
            progress.setAttribute("value", value);
            element.append(progress);
            await sleep(randomTimeBetweenRange(100, 300));
            
        }
        for (let i=0;i<TYPING_TEXT.length;i++) {
            element.innerHTML += TYPING_TEXT[i];
            await sleep(randomTimeBetweenRange(30, 70));
        }
        await sleep(randomTimeBetweenRange(300, 700));
    }
}

doTyping();
