let textHello = "Hello World";
let textBye = "Bye World";

textHello = textBye;
textBye = "Chau mundo";
textHello = "Hola mundo";


let person1 = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    identification: {
        type: "DNI",
        number: 12345678
    }
};

let person2 = {
    name: "Juana",
    age: 27,
    city: "Corrientes",
    country: "Argentina",
    identification: {
        type: "DNI",
        number: 382719
    }
};

person1.age = 33;
person2.age = 49;
person1 = person2;
person2.age = 50;


function save(person) {
    person.identification = null;
    // Algún código para persistir en la DB
}

function clone(item) {
    // return JSON.parse(JSON.stringify(item));
    return Object.assign({}, item);
}

save(person2);