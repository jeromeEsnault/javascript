// les objets


const user = {
    firtName: "hugo",
    age: 35,
    adress: {
        street: "rue de la mairie",
        postalCode: 44000,
        city: "nantes"
    },
    language: ["javascript", "ruby", "python"],
    birthDay: function() {
        return 2019 - this.age
    }
}

let foo = user.firtName

console.log(foo);

// new object()

let player = new Object();
player.name = "john";
player.game = "APEX"

//TEMPLATING

const user2 = {
    firtName: "hugo",
    age: 40,
    adress: {
        street: "rue de la mairie",
        postalCode: 44000,
        city: "nantes"
    },
    language: ["javascript", "ruby", "python"],
    message: function(firtName, age, street, city, postalCode) {
        console.log(`bonjour je m'appelle ${this.firtName}, j'ai ${age} ans et j habite a ${street} au ${ postalCode } a ${city}`);
    }
}
console.log(user2.message(user2.firtName, user2.age, user2.adress.street, user2.adress.postalCode, user2.adress.city));