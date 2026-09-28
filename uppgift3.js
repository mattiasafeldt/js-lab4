// Lösning till uppgift 3. Av Mattias Åfeldt.
"use strict";

let age = 20;

if (age < 18) { // Värdet under 18 = Barn.
    console.log("Barn");
} else if (age < 65) { // Värdet under 65 = Vuxen.
    console.log("Vuxen");
} else { // Är värdet något annat = Pensionär.
    console.log("Pensionär");
    
}
