/*****************************
 * 029-2 - Boucles pour parcourir des objets
 */

// 2. Boucle for/in pour parcourir des objets

/*
for(const prop in objet) {
  console.log(prop + " : " + objet[prop]);
}
*/

/*
EXERCICE 1 :
Parcours l'objet mesFruits pour afficher, pour chacun des fruits, "Le fruit … coûte … €"
*/

const mesFruits = {
  "Pomme": 1.3,
  "Poire": 0.5,
  "Ananas": 3
};

for (const fruitKey in mesFruits) {
  console.log(`Le nom du fruit est ${fruitKey} et son prix est à ${mesFruits[fruitKey]}`);
}
// Écris ton code ici

/*
EXERCICE 2 :
Parcours l'objet fruit pour afficher chacune de ses propriétés avec, pour chacune, sa valeur
*/

const fruit ={
  nom:"Fraise",
  coût:5,
}

for (const fruitKey in fruit) {
  console.log(`Le nom du fruit est ${fruitKey} et son prix est fixé à ${fruit[fruitKey]}`);
}

// Écris ton code ici

// Un mot est un objet de type String => ceci fonctionne également…
/*
EXERCICE 3 :
Parcours le mot "Bonjour" pour afficher séparément chacune de ses lettres
*/
const mot = "Bonjour";
for (let i = 0; i < mot.length ; i++) {
  console.log(mot[i]);
}

// Écris ton code ici
