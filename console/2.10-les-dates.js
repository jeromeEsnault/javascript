// les dates

const date = new Date();

let today;
today = date;

console.log(date);

console.log(`aujourd'huit on n'est le ${today}`);

/* 
let month = date.getmonth();
console.log(month);
*/


let year = date.getFullYear();
console.log(year);

let month = new Array();
month[0] = "Janvier";
month[1] = "Fevrier";
month[2] = "Mars";
month[3] = "avril";
month[4] = "mai";
month[5] = "juin";
month[6] = "juillet";
month[7] = "aout";
month[8] = "septembre";
month[9] = "octobre";
month[10] = "novembre";
month[11] = "decembre";

//donne le mois d aujourd'huit
let mois = month[date.getMonth()];
// donne le mois de mars alors que l'on est au mois de septembre
let jour = month[date.getDay()];
// donne le mois de decembre alors que l'on est au mois de septembre
let heure = month[date.getHours()];
// undefined car pas de valeurs
let temps = month[date.getTime()];
// donne le mois de octobre alors que l'on est au mois de septembre
let chour = month[date.getUTCHours()];

console.log(mois, jour, heure, temps, chour);