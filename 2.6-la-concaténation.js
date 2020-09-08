// part 1

//On va additionner des chaine de caracteres avec l'opérateur +

const firsname = "gavroche";
const lastename = "thénardier";
const age = 11;
const citation = "je suis tombé par terre, cest la faute a voltaire, le nez dans le ruisseau, C'est la faute a...";


let user;

//user = firsname +lastname+ age;

//user = "je m appelle " + firsname + " et j'ai " + age + " ans.";

//console.log(user);

//part 2
//les méthodes de chaines de caractères:

// méthode concat.


user = firsname.concat(' ', lastename)
console.log(user);


//part 3

//lenight

user = firsname.length;
console.log(user);

//part 4

//to uppercase

user = firsname.toUpperCase();

user = firsname[0];

console.log(user);

//part 5
//methode endswitch

user = citation.endsWith("a");
console.log(user);

//part 6
// methode includes

user = citation.includes("ruisseau");
console.log(user);

//part 7
// methode replace()

user = citation.replace(/ruisseau/g, "tonneau");
console.log(user)

//part 8
// methode search()

user = citation.search("ruisseau");
console.log(user)


//part 9
// methode split()
// ne pas oublié l'espace
user = citation.split(' ');
console.log(user)