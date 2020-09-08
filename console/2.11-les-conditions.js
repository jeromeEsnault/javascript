// if()
/* 
if (il y a cet évènement ) {
    alors tu fais ca

} else {
    tu fais ça
}
*/

let numLoto = 10;

//correspond

if (numLoto == 20) {
    console.log(`bravo j'ai gagner`);
} else {
    console.log(`desole tu as perdu...`);
}

// ne correspond pas
let gilet = "bleu";

if (gilet != "jaune") {
    console.log(`cest bon, on peux aller faire les courses !`);
} else {
    console.log(`on reste chez nous.`);
}

// strictement egale

const yearofbirth = 1985;

if (yearofbirth === 1985) {
    console.log(`tu es né en 1985.`);
} else {
    console.log(`tu nes pas née en 1985`);
}


// if else if

const departement = 75;

if (departement === 35) {
    console.log(`tu es de bretagne`);
} else if (departement === 85) {
    console.log(`tu es de vendée`);
} else if (departement === 17) {
    console.log(`tu es charente maritime `);
} else {
    console.log(`tu ne viens pas de l'ouest de la france `);
}


//&& > et
//|| > ou

if (1 === 1 && 4 === 4) {
    console.log(`c'est vrai`);
} else {
    console.log(`c'est faux`);
}

if (1 === 1 || 4 === 4) {
    console.log(`c'est vrai`);
} else {
    console.log(`c'est faux`);
}