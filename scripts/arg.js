// #! This is NOT the beginning of the real game. Behind the ciphers is the initial context !#
const IS_FRENCH = document.getElementsByTagName("html")[0].lang === "fr";
if (IS_FRENCH) {
    console.log("§1/7 (->6) = §1");
    console.log("§1/32 (<-7) = §2");
    console.log("§2/8 (->21) = §3");
    console.log("§3/4 (->12) = §4");
    console.log("§4/4 (->2) = §5");
    console.log("§6/6 (<-9) = §6");
    console.log("Quand le gauche de = est trouvé, faites l'opération + et dites ce qu'est #? 221824232224 174218234 ?#");
    console.log("Alors, pour chaque rang de C qui peut être divisé par la droite de =, ajoute C à ta clé.");
    console.log("Enfin à la fin, ajoute RSLARG");
} else {
    console.log("§1/8 (->6) = §1");
    console.log("§1/27 (<-7) = §2");
    console.log("§2/7 (->21) = §3");
    console.log("§3/3 (->12) = §4");
    console.log("§4/4 (->2) = §5");
    console.log("§6/6 (<-9) = §6");
    console.log("When the left of = is found, do the + operation and say what is #? 221824232224 174218234 ?#");
    console.log("Then, for each C rank that can be divided by the right of =, add C to your key.");
    console.log("Finally at the end, add RSLARG");
}
