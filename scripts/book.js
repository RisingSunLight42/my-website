const IS_FRENCH = document.getElementsByTagName("html")[0].lang === "fr";
if (IS_FRENCH) {
    console.log("#! Tu vas un peu loin, mais ce n'est pas la bonne annonce pour espérer voir quelque chose ici... !#");
} else {
    console.log("#? Why why why why why ?#");
}

// #! Hm, donc tu lis ces mots aussi... Intéressant :) !#
// #! Oh sorry, you may be an english speaker, here's a translation from what is above: "Hm, so you read those words too... Interesting :)" !#

const RANDOM_NUMBER = Math.floor(Math.random() * 42) + 1;

if (RANDOM_NUMBER === 42 && IS_FRENCH) {
    // #! Hon hon baguette !#
    console.log("#@ ☺♏ ❖♏◆⌧ ⬧□❒⧫♓❒ @#");
} else if (RANDOM_NUMBER === 42) {
    // #! Oh well, you're reading this too right ? !#
    console.log("#! The Project 42... will take probably several years... !#");
}