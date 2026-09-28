// Lösning för uppgift 5. Av Mattias Åfeldt.
"use strict";

let goodFood = ["pasta", "burger", "kebab", "pizza", "surströmming"]; // Array för maträtter
console.log(goodFood);
console.log(goodFood[0]) // Skriver ut första elementet
console.log(goodFood[4]) // Skriver ut sista elementet
goodFood.push("soup"); // Lägger till maträtt sist i arrayen
goodFood.shift("pasta"); // Tar bort första maträtten i arrayen
console.log(goodFood);