question1 = {"rep1": "te taper ta mère mais personne le sait", "rep2": "ne pas te taper ta mère mais tout le monde est persuadé que tu l'as fait"}
question2 = {"rep1": "de très mauvais préliminaires avec ta grand-mère", "rep2": "de très bons préliminaires avec ta grand-mère"}
question3 = {"rep1": "avoir des poils pubiens à la place des dents", "rep2": "avoir des dents à la place des poils pubiens"}
question4 = {"rep1": "avoir un pénis de la taille d'un téton", "rep2": "avoir des tétons de la taille d'un pénis"}
question5 = {"rep1": "avoir un orgasme à chaque fois que tu entends 'Sapé comme jamais'", "rep2": "hurler 'Sapéééé comme jamais' à chaque fois que tu orgasmes"}
question6 = {"rep1": "ne parler qu'avec des consonnes", "rep2": "ne parler qu'avec des voyelles"}
question7 = {"rep1": "qu'on te serve la mauvaise commande au McDo à vie", "rep2": "être derrière un type qui a 30 bons de réduction à chaque fois que tu fais les courses"}
question8 = {"rep1": "sauver la vie d'un enfant que tu ne connais pas", "rep2": "avoir le pouvoir de voler"}
question9 = {"rep1": "manger un brownie parfum caca", "rep2": "manger un caca parfum brownie"}
question10 = {"rep1": "tenir un food truck avec Philippe Etchebest qui te gueule dessus 24h/24 toute ta vie", "rep2": "relancer la tecktonik"}
question11 = {"rep1": "avoir le hoquet toute ta vie", "rep2": "avoir tout le temps 'Afrika' de Toto dans la tête"}
question12 = {"rep1": "être irrésistible et avoir la diarrhée à chaque fois que tu chopes", "rep2": "passer complètement inaperçu et avoir la diarrhée quand même"}
question13 = {"rep1": "savoir respirer sous l'eau", "rep2": "faire l'amour à ton cousin par inadvertance"}
question14 = {"rep1": "uriner par les yeux", "rep2": "pleurer par l'urètre"}
question15 = {"rep1": "qu'on te coupe les jambes et les bras et être très beau/belle", "rep2": "qu'on te coupe juste la tête et être moyennement attirant.e"}
question16 = {"rep1": "manger une soupe bio avec un gros cheveu dedans", "rep2": "manger une soupe pas bio avec un petit cheveu dedans"}
question17 = {"rep1": "qu'on t'offre un grille-pain pour ton mariage", "rep2": "ne jamais avoir de grille-pain de toute ta vie"}
question18 = {"rep1": "avoir une intolérance au gras", "rep2": "avoir une intolérance à l'eau"}
question19 = {"rep1": "rater ton permis à vie", "rep2": "avoir ton permis mais être allergique au fromage"}
question20 = {"rep1": "marcher sur du verre pilé une fois", "rep2": "devoir porter des talons aiguilles TOUS les jours"}
question21 = {"rep1": "que ton chat soit doué de parole et te raconte tout ce qu’il t’a vu faire de dégueu", "rep2": "que ton chat soit la réincarnation de Hitler"}
question22 = {"rep1": "lécher le pourtour de tous les verres avant de boire", "rep2": "roter dès que tu bois une gorgée"}
question23 = {"rep1": "péter dès qu'on te roule une pelle", "rep2": "avoir une haleine de foie de morue"}
question24 = {"rep1": "avoir des doigts de pieds de 20 cm", "rep2": "avoir des doigts de main de 1 cm"}
question25 = {"rep1": "t'appeler 'Jacques Laputte'", "rep2": "t'appeler 'Josiane Grossemairde'"}
question26 = {"rep1": "coucher avec l'esprit de ta mère/père dans le corps de ta meuf/mec", "rep2": "coucher avec l'esprit de ta meuf/mec dans le corps de ta mère/père"}
question27 = {"rep1": "avoir des oncles et tantes très cons et très racistes", "rep2": "avoir des oncles et tantes drôles et intelligents mais condamnés dans 12 mois"}
question28 = {"rep1": "lire dans les pensées uniquement quand c’est méchant sur toi", "rep2": "avoir ta carte bancaire sans contact dans ton poignet"}
question29 = {"rep1": "t'endormir toujours en moins de 1 minute", "rep2": "ne pas avoir besoin de te brosser les dents"}
question30 = {"rep1": "mettre fin à la faim dans le monde en rendant les crottes de nez comestibles", "rep2": "mettre fin au réchauffement climatique en rendant tout le monde chauve"}
question31 = {"rep1": "être coincé dans un film de Nicolas Bedos", "rep2": "être Nicolas Bedos"}
question32 = {"rep1": "être hyper connu pour un livre que tu n’as pas écrit", "rep2": "être hyper connu pour un livre que tu as mal écrit"}
question33 = {"rep1": "avoir un groupe sanguin 0+ et suer des joues", "rep2": "être A- et ne pas avoir de sourcils"}
question34 = {"rep1": "qu’il faut interdire le subjonctif", "rep2": "qu’il faille interdite l’infinitif"}
question35 = {"rep1": "avoir constamment des aphtes purulents sur la langue", "rep2": "avoir constamment des boutons sous-cutanés dans les narines"}
question36 = {"rep1": "être capable de traverser les murs mais toujours à poil", "rep2": "voir à travers les murs mais avoir un gros strabisme"}

liste_questions = []

for i in range(1, 37):
    question = globals()[f"question{i}"]
    liste_questions.append(question)

print(liste_questions)
