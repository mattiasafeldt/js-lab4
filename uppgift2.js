// Lösning till uppgift 2. Av Mattias Åfeldt.
"use strict";

let productPrice = 100; // Pris per produkt
let quantity = 3; // Antal
let totalPrice = productPrice * quantity; // Totalpris för samtliga produkter
let totalPriceVat = totalPrice * 1.25; // Pris inklusive 25% moms

console.log("Pris: " + productPrice + "kr")
console.log("Antal: " + quantity)
console.log("Totalt: " + totalPrice)
console.log("Totalt inklusive moms: " + totalPriceVat + "kr")