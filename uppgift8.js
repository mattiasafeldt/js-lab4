// Lösning till uppgift 8. Av Mattias Åfeldt.

"use strict";

// Objekt för bokens titel, författare och utgivningsår.
const book = {
    title: "Råttan i pizzan",
    author: "Bent af Klintberg",
    publicationYear: 1986
};
// Funktion som tar emot bokobjekt.
function printBookInfo(bookDetails) {
    console.log("Titel: " + bookDetails.title);
    console.log("Författare: " + bookDetails.author);
    console.log("Utgivningsår: " + bookDetails.publicationYear);
}
printBookInfo(book);