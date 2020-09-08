// les switch

let job = "maçon";

switch (job) {
    case "maçon":
        console.log(`il s'occupe des murs`);
        break;
    case "plombier":
        console.log(`il s'occupe de l'eau`);
        break;
    case "électricien":
        console.log(`il s'occupe de l'élèctricitée`);
        break;
    default:
        console.log(`il ne travail pas`);
}


let day;

switch (new Date().getDay()) {
    case 0:
        day = "dimanche"
        break;
    case 1:
        day = "lundi"
        break;
    case 2:
        day = "mardi"
        break;
    case 3:
        day = "mercredi"
        break;
    case 4:
        day = "jeudi"
        break;
    case 5:
        day = "vendredi"
        break;
    case 6:
        day = "samedi"
        break;
}

console.log(`aujourd'huit on est le ${day}`)