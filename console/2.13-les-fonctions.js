// les function

//declaration

let hello = function() {

    console.log('hello');
}
console.log(hello());

//part 2

let superficie = function(largeur, longueur) {
    return `la surface est de ${largeur*longueur} m2.`
}
console.log(superficie(8, 10));

//part 3

let calculpérimetre = function(rayon) {
    let périmètre = 2 * Math.PI * rayon
    return périmètre
}
console.log(calculpérimetre(5));

// part 4
///life

(function() {
    console.log(`je suis une function life`);
})();

(
    function(name) {
        console.log(`Bonjour ${name}`);
    }
)("coco");

//methode
let player = "jeje";
const Member = {

    add: function() {
        console.log(`ajouter une personne`);
    },
    edit: function(player) {
        console.log(`la fiche du joueur ${player} est modifiè`);
    }
}

console.log(Member.add("toto"));
console.log(Member.edit("john"));