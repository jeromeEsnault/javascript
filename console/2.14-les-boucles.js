//les boucle

for (let i = 0; i < 5; i++)

    console.log(i);

for (let distanceMarathon = 5; distanceMarathon < 42; distanceMarathon++)

    console.log(distanceMarathon);
let player = ["chaudard", "pitivier", "tassin", "colonel blanchet"];

for (let i = 0; i < 4; i++) {
    if (player[i] === "pitivier") {
        console.log(`${player[i]}: j'ai glisseé chef`);
    }
}

//while

let i = 0;
while (i <= 5) {
    i++;
    console.log(i)
}


let fruits = ["pomme", "poire", "banane", "fraise"];
while (i <= fruits.length) {
    console.log(fruits[i]);
    i++
}