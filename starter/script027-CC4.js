/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)

2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const mark ={
    firstName:"Mark",
    weight:80,
    height:180,
    bmi:function (){
        this.bmiValue = this.weight / (this.height * this.height);
        return this.bmiValue;
    }
}

const john ={
    firstName:"John",
    weight:60,
    height:160,
    bmi:function (){
        this.bmiValue = this.weight / (this.height * this.height);
        return this.bmiValue;
    }
}

const markBmi = mark.bmi();
const johnBmi = john.bmi();

if (johnBmi > markBmi) {
    console.log(`${john.firstName} has a higher BMI than ${mark.firstName}.`);
} else {
    console.log(`${mark.firstName} has a higher BMI than ${john.firstName}`);
}

