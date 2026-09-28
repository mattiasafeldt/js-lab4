// Lösning till uppgift 7. Av Mattias Åfeldt.

"use strict";

let numbers = [10, 20, 30, 40, 50, 60]; // Array med sex tal.
function calculateSum(values) { // Funktion som tar emot en array genom parametern values.
    let sum = 0; // Börjar med summan 0.

    for (let i = 0; i < values.length; i++) {
        /* let i = 0: Börjar på arrayens första index.
        i < values.length: Fortsätt så länge index är mindre än antalet tal.
        i++: Ökar index med 1 efter varje varv. */
        sum = sum + values[i];
    }

}