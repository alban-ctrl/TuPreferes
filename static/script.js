const tupref = document.querySelector('#tupref');
const resultat = document.querySelector('#resultat');
const h1 = document.querySelector('h1');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const next = document.querySelector('#next');
const p = document.querySelector("p");
const h3 = document.querySelector("h3")
// à ajouter à partir des trucs qu'on aura inshallah
let reponse1 = "embrasser Charolife";
let reponse2 = "embrasser ReubeuLove";
let nbrep1 = 10111;
let nbrep2 = 101250;
let total = nbrep1 + nbrep2;
// pour stopper le satanée fonction
let ecrireTimeoutId = null;

//fonction pour que le texte fasse du bruit et tout paw paw zbrrra + couleuuuuuuuuuuuurerrr
var son = new Audio("../assets/sans.wav");
son.volume = 0.40
let i = 0;
function ecriretexte(nbrep, rep) {
    if (rep == reponse1) {
        couleur = "red" 
    } else {
        couleur = "blue"
    };

    let texteDebut = `${nbrep} personnes ont choisies comme vous la réponse "${rep}".`;
    let texteFin = `${nbrep} personnes ont choisies comme vous la réponse "<span class="${couleur}">${rep}</span>".`;

    if (i < texteDebut.length) {
        p.innerHTML += texteDebut.charAt(i);

        if (texteDebut.charAt(i).match(/[a-zA-Z0-9]/)) {
            son.currentTime = 0;
            son.play();
        }

        i += 1
        ecrireTimeoutId = setTimeout(() => ecriretexte(nbrep, rep), 60);
    } else {
        p.innerHTML = texteFin;
    };
}

//Ptite barre de progression tah les oufs
let barreresultat1 = document.querySelector("#resultat1");
let barreresultat2 = document.querySelector("#resultat2");
let progress1 = 0;
let progress2 = 0;
let pourcent1 = Math.round(nbrep1 / total * 100)
let pourcent2 = Math.round(nbrep2 / total * 100)
function barre() {
    if (progress1 < pourcent1) {
        progress1 = progress1 + 1;
        if (progress1 > pourcent1) {
            progress1 = pourcent1;
        }
        barreresultat1.style.width = progress1 + "%";
        barreresultat1.textContent = progress1 + "%";
        setTimeout(barre, 100);
    };

    if (progress2 < pourcent2) {
        progress2 = progress2 + 1;
        if (progress2 > pourcent2) {
            progress2 = pourcent2
        }
        barreresultat2.style.width = progress2 + "%";
        barreresultat2.textContent = progress2 + "%";
        setTimeout(barre, 100)
    };
}


btn1.textContent = reponse1
btn2.textContent = reponse2

btn1.addEventListener("click", () => {
    tupref.style.display = "none";
    h1.textContent = "RÉSULTAT";
    resultat.style.display = "flex";
    h3.textContent = total + " réponses au total";
    ecriretexte(nbrep1, reponse1);
    barre();
    totalite();
});

btn2.addEventListener("click", () => {
    tupref.style.display = "none";
    h1.textContent = "RÉSULTAT";
    resultat.style.display = "flex";
    h3.textContent = total + " réponses au total";
    ecriretexte(nbrep2, reponse2);
    barre();
    totalite();
});

next.addEventListener("click", () => {
    tupref.style.display = "flex"
    h1.textContent = "TU PRÉFÈRES";
    resultat.style.display = "none";

    //reset ecriture
    i = 0;
    p.textContent = "";

    //reset barre
    progress1 = 0;
    progress2 = 0;
    barreresultat1.style.width = "0%";
    barreresultat1.textContent = "0%";
    barreresultat2.style.width = "0%";
    barreresultat2.textContent = "0%";

    //stopper celle qui fait du bruit elle clc
    clearTimeout(ecrireTimeoutId);
});
