// Lösning till uppgift 9. Av Mattias Åfeldt.

"use strict";

// Array som innehåller tre objekt.
const people = [
    {
        name: "Ralph",
        age: 20,
        city: "Åre"
    },
    {
        name: "Robert",
        age: 30,
        city: "Östersund"
    },
    {
        name: "Ronaldo",
        age: 40,
        city: "Sundsvall"
    }
];
// Funktion för personobjekt.
function printPersonInfo(person) {
    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig.");
    } else {
        console.log(person.name + " bor i " + person.city + " och är ej myndig.");
    }
}