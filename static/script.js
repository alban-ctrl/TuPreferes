const tupref = document.querySelector('#tupref');
const resultat = document.querySelector('#resultat');
const h1 = document.querySelector('h1');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const next = document.querySelector('#next');
const p = document.querySelector("p");
const h3 = document.querySelector("h3");
const timegg = document.querySelector(".timegg");
const chargement = document.querySelector(".chargement");
const fin = document.querySelector(".fin");
let loaded = 0
// nouveau votes
let nouv_vote = {};
// à ajouter à partir des trucs qu'on aura inshallah
let total = 0
let pourcent1 = 0
let pourcent2 = 0
let reponserecup = null;
let reponse1 = "";
let reponse2 = "";
let nbrep1 = 0;
let nbrep2 = 0;
let y = 0
// pour stopper le satanée fonction
let ecrireTimeoutId = null;
let barreIntervalId = null;
// musique
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let buffer = null;
let currentSource = null; // pour le son en cours

//chargement 
let points = 0;
timegg.style.animation = "secousses 0.5s infinite"; 
const texteChargement = document.querySelector('.nombre');
const intervalChargement = setInterval(() => {
    points = (points + 1) % 4;
    texteChargement.textContent = 'Chargement' + '.'.repeat(points);
}, 500);

//recup le son
fetch("static/assets/sans.mp3")
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(decodedAudio => {
    buffer = decodedAudio;
  });

//pour récup les questions
fetch("/recupquestions", {
method: "POST",
headers: { "Content-Type": "application/json" },
  })
.then((response) => response.json())
.then((data) => {
  liste_questions = data.result;
  console.log(liste_questions)
  console.log('Liste chargée')
  loaded += 1
})
.catch(() => {
  document.getElementById("btn1").textContent = "Erreur serveur.";
  document.getElementById("btn2").textContent = "Veuillez raffraichir la page.";
});

//récup les votes
fetch('/recupjson')
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      console.log("Json récupréré");
      votes = data.data;
      loaded += 1
    } else {
      console.error("Erreur MockAPI:", data.message);
    }
  });


//envoyer les questions
function envoyerquestion() {
    y = liste_questions.length
    if (y == 1) {
        x = 0
    } else  {
        x = Math.floor(Math.random() * y)
    }
    let question = [liste_questions[x]["rep1"], liste_questions[x]["rep2"]];
    liste_questions.splice(x, 1)

    // mettre les questions dans le bail
    reponse1 = question[0]
    reponse2 = question[1]
    btn1.textContent = reponse1
    btn2.textContent = reponse2
}

//jouer le son
function jouerSon() {
  if (buffer) {
    // Stoppe le son precedent s'il est en cours
    if (currentSource) {
      try {
        currentSource.stop();
      } catch (e) {
        // ignore erreurs
      }
    }

    // Crée une nouvelle source
    currentSource = audioContext.createBufferSource();
    currentSource.buffer = buffer;
    currentSource.connect(audioContext.destination);
    currentSource.start(0);
  }
}

//fonction pour que le texte fasse du bruit et tout paw paw zbrrra + couleuuuuuuuuuuuurerrr
let i = 0;
function ecriretexte(nbrep, rep) {
    if (rep == reponse1) {
        couleur = "red" 
    } else {
        couleur = "blue"
    };

    let texteDebut = `${nbrep} personnes ont choisies la réponse "${rep}".`;
    let texteFin = `${nbrep} personnes ont choisies la réponse "<span class="${couleur}">${rep}</span>".`;

    if (i < texteDebut.length) {
        p.innerHTML += texteDebut.charAt(i);

        if (texteDebut.charAt(i).match(/[a-zA-Z0-9]/)) {
            jouerSon();
        }

        i += 1
        ecrireTimeoutId = setTimeout(() => ecriretexte(nbrep, rep), 50);
    } else {
        p.innerHTML = texteFin;
    };
}

//Ptite barre de progression tah les oufs
//Ptite barre de progression tah les oufs
let barreresultat1 = document.querySelector("#resultat1");
let barreresultat2 = document.querySelector("#resultat2");
let progress1 = 0;
let progress2 = 0;

function barre() {
    // Calcul des pourcentages
    pourcent1 = Math.round(nbrep1 / total * 100);
    pourcent2 = Math.round(nbrep2 / total * 100);

    // Nettoie d'abord tout interval précédent
    clearInterval(barreIntervalId);

    // Nouvelle boucle pour animer les deux barres en même temps
    barreIntervalId = setInterval(() => {
        let done1 = false;
        let done2 = false;

        if (progress1 < pourcent1) {
            progress1 += 1;
            barreresultat1.style.width = progress1 + "%";
            barreresultat1.textContent = progress1 + "%";
        } else {
            done1 = true;
        }

        if (progress2 < pourcent2) {
            progress2 += 1;
            barreresultat2.style.width = progress2 + "%";
            barreresultat2.textContent = progress2 + "%";
        } else {
            done2 = true;
        }

        // Quand les deux sont terminées, on arrête l’intervalle
        if (done1 && done2) {
            clearInterval(barreIntervalId);
        }
    }, 20); // Plus fluide que 100ms
}

function envoyervotes() {
    console.log(nouv_vote)
    fetch("/envoyer_reponses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nouv_vote),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      console.log("Erreur serveur.");
    });

}

window.addEventListener("load", () => {
    console.log("assets Chargé");

    const intervalChargement = setInterval(() => {
        if (loaded === 2) {
            clearInterval(intervalChargement);

            timegg.style.animation = "none";

            setTimeout(() => {
                chargement.style.opacity = 0;

                setTimeout(() => {
                    chargement.style.display = "none";
                }, 500);
            }, 300);

            envoyerquestion();
        }
    }, 100);
});

window.addEventListener("click", () => {
  // iOS : le son ne peut être activé qu’après une interaction utilisateur
  if (audioContext.state === 'suspended') {
    audioContext.resume().then(() => {
      console.log("Contexte audio activé !");
    });
  }
}, { once: true });

btn1.addEventListener("click", () => {
    nbrep1 = votes[reponse1];
    nbrep2 = votes[reponse2];
    total = nbrep1 + nbrep2;
    tupref.style.display = "none";
    h1.textContent = "RÉSULTAT";
    resultat.style.display = "flex";
    h3.textContent = total + " réponses au total";
    nouv_vote[reponse1] = 1
    ecriretexte(nbrep1, reponse1);
    barre();
});

btn2.addEventListener("click", () => {
    nbrep1 = votes[reponse1];
    nbrep2 = votes[reponse2];
    total = nbrep1 + nbrep2;
    tupref.style.display = "none";
    h1.textContent = "RÉSULTAT";
    resultat.style.display = "flex";
    h3.textContent = total + " réponses au total";
    nouv_vote[reponse2] = 1
    ecriretexte(nbrep2, reponse2);
    barre();
});

next.addEventListener("click", () => {
    //stopper celle qui fait du bruit elle clc
    clearTimeout(ecrireTimeoutId);
    clearInterval(barreIntervalId);

     if (y > 1) {
        envoyerquestion();
        tupref.style.display = "flex";
        h1.textContent = "TU PRÉFÈRES";
        resultat.style.display = "none";
    } else{
        resultat.style.display = "none";
        tupref.style.display = "none";
        next.style.display = "none";
        h1.textContent = "VOUS AVEZ FINI !";
        fin.style.display = "flex";
    }
    
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
});

addEventListener("beforeunload", () => {
    if (Object.keys(nouv_vote).length > 0) {
        envoyervotes();
}
});
