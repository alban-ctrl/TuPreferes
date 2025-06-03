from flask import Flask, request, jsonify, render_template
from random import randint

question1 = {"rep1": "avoir un téléphone de la hess", "rep2": "un téléphone qui te vibre dans les fesses"}
question2 = {"rep1": "Pamplemoussenamaspamousse", "rep2": "Ananazi"}
question3 = {"rep1": "date RebeuLove", "rep2": "date Mathieu Meriot"}
question4 = {"rep1": "bertrand françois", "rep2": "françois xavier"}
question5 = {"rep1": "aller au taf", "rep2": "rester sur son paf"}
question6 = {"rep1": "être un vélociraptor le sang", "rep2": "être un tractopelle"}
question7 = {"rep1": "Larry le Malicieux", "rep2": "l'électricien"}
question8 = {"rep1": "avoir l'haleine qui sent la bite", "rep2": "la bite qui sent la laine"}
question9 = {"rep1": "moi", "rep2": "ton père"}
question10 = {"rep1": "Gabriel", "rep2": "un gros clebs"}
question11 = {"rep1": "embrasser Nasdas", "rep2": "manger du crousti fromage toute ta vie"}
question12 = {"rep1": "être dans la team Nasdas", "rep2": "être dans Nasdas"}
question13 = {"rep1": "te faire full piece par ton petit frère", "rep2": "full pisser dessus par une petite chèvre"}
question14 = {"rep1": "te faire Mongraal classique", "rep2": "que Mongraal te pose un classique dessus"}
question15 = {"rep1": "chevaucher un chameau", "rep2": "te faire chevaucher par un chameau"}
question16 = {"rep1": "GMT qui sort le vrai dz", "rep2": "les dz qui ont volé la voiture à GMT"}
question17 = {"rep1": "parler comme GMK", "rep2": "parler comme Kaydop"}
question18 = {"rep1": "avoir la classe", "rep2": "avoir la chiasse"}
question19 = {"rep1": "arrêter la puff pour les paf", "rep2": "arrêter les paf pour les puffs"}
question20 = {"rep1": "te prendre un pressing tah KLS", "rep2": "te prendre une AK dans les fesses"}
question21 = {"rep1": "être malien", "rep2": "être nazi"}
question22 = {"rep1": "bz ta femme dans le corps de ta mère", "rep2": "bz ta mère dans le corps de ta femme"}
question23 = {"rep1": "t’appeler blocus périphérique", "rep2": "t’appeler Glhynnyl Hylhyr Yzzyghy"}
question24 = {"rep1": "avoir un pénis de la taille d’un téton", "rep2": "avoir des tétons de la taille d’un pénis"}
question25 = {"rep1": "que ton chat soit rapide comme l’éclair", "rep2": "que ton chat soit la réincarnation d’Hitler"}
question26 = {"rep1": "toucher l’argent de la CAF", "rep2": "revendre ton caca"}
question27 = {"rep1": "la chicha à 1 euro", "rep2": "le chichi par un corbeau"}
question28 = {"rep1": "te faire cambrioler", "rep2": "te faire piller ton village COC par 김정은"}
question29 = {"rep1": "embrasser Charolife", "rep2": "embrasser Zarzour"}
question30 = {"rep1": "m’harceler", "rep2": "Marcel"}
question31 = {"rep1": "te faire humilier par un yop à la fraise", "rep2": "que Pythagore et Thalès te baise"}
question32 = {"rep1": "faire le freestyle pardon au milieu du lycée", "rep2": "manger un sale pied"}
question33 = {"rep1": "être cité dans un rap de Fresh la Douille", "rep2": "être cité dans un rap de Jeanfils"}
question34 = {"rep1": "avoir la mentalité kaizen", "rep2": "travailler chez Osama Ben Laden"}
question35 = {"rep1": "sauver un enfant de la noyade", "rep2": "avoir un iPhone 16 Pro Max tacos giga"}
question36 = {"rep1": "confier ton chien à ton ami Xi-Laufon", "rep2": "confier ton curry massala à Pindoumakiri"}
question37 = {"rep1": "avoir une queue de cheval", "rep2": "avoir une queue de cheval 😈"}
question38 = {"rep1": "jouer au billard avec tes propres boules", "rep2": "jouer avec mes boules"}
question39 = {"rep1": "être autiste", "rep2": "être salafiste"}
question40 = {"rep1": "Gabriel la diablesse", "rep2": "Alvès la duchesse"}
question41 = {"rep1": "avoir le crâne luisant", "rep2": "avoir le paf saillant"}
question42 = {"rep1": "avoir le menton à Buzz l’Éclair", "rep2": "te faire taillader le crâne chez Zbeubal’Hair"}
question43 = {"rep1": "les naines", "rep2": "les pieds el Mordjene"}
question44 = {"rep1": "la mort", "rep2": "tchi tchi"}
question45 = {"rep1": "Timéo", "rep2": "un malien"}
question46 = {"rep1": "habiter à Roubaix", "rep2": "sucer un roux berbère"}
question47 = {"rep1": "Booba", "rep2": "Kaaris"}
question48 = {"rep1": "te promener le paf à l'air", "rep2": "te prendre les griffes de buzz l'éclair"}

liste_questions = []

for i in range(1, 48):
    question = globals()[f"question{i}"]
    liste_questions.append(question)

def prendrequestion():
    y = len(liste_questions)
    if y == 1:
      x = 0
    else:
      x = randint(0,y-1)
    question = (liste_questions[x].get('rep1'), liste_questions[x].get('rep2'))
    liste_questions.pop(x)
    return question, y

prendrequestion()

#if y == 1, alors fin à next

app = Flask(__name__)
