/*
OBJETS - PRÉPA 2 : Modélisation d'un chien
Écris un programme qui :

1. Crée un objet chien contenant
   - les propriétés nom ("Tobby"), race ("Border Collie") et couleur ("bleu merle tricolore") ;

   - la méthode grogner() qui retourne "Grrr ! Grrr !"

     et la méthode aboyer() qui retourne "Wah ! Wah !"

2. Affiche dans la console le message "… est un … de couleur …"

3. Affiche dans la console le message "Tiens, un chat ! … aboie : …"
   (où … est le nom du chien et … utilise la méthode aboyer du chien pour le faire aboyer)
*/

const dog ={
    name:"Tobby",
    bread:"Border Collie",
    color:"Bleu merle tricolore",

    grogner:function(){
        return"Grrr ! Grrr !";
    },
    aboyer:function (){
        return "Wah ! Wah !";
    }
};

console.log(`${dog.name} est une ${dog.bread} de couleur ${dog.color}`);
console.log(`Tiens, un chat ! ${dog.name} aboie : …`)