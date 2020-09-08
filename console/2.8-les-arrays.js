// part 1

//les arrays

const number = [1, 2, 3, 4, 5];

console.log(number);

const avengers = ["thor", "ironman", "spiderman"];
const dc = ["batman", "superman", "flash"]

const hero = ["thor", 30, true, { LvLAttack: 20, LvLdefense: 30 },
    [1, 2, 3],
    function() { return "bouum!" }
];
console.log(hero);


//part 2

const legume = new Array("tomate", "radis", "poireau");
console.log(legume);

//lenght

const longueur = number.length;
console.log(longueur);

//methode indexof

const index = hero.indexOf(true);
console.log(index);

//methode push

avengers.push("captain marvel");

//methode unshift

avengers.unshift("captain america");
console.log(avengers);

///methode pop

legume.pop();
console.log(legume)

///methode shift
legume.shift();
//console.log(legume);

///methode splice


number.splice(1, 2, "toto");
console.log(number);

//methode reverse

avengers.reverse();
console.log(avengers);



//methode concat
let newhero = avengers.concat(dc);
console.log(newhero);