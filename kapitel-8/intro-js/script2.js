// alert("Glädjens dag, det är fredag!");
// var namn = prompt("Vad heter du?");
// var ålder = prompt("Hur gammal är du?");
// alert("hej " + namn + ". du är " + ålder + " år gammal");
// console.log("Det verkar funkar det här!");

// be användaren att mata in 2 tal ock räkna ut summan
// var tal1string = prompt("Välj ett tal");
// var tal2string = prompt("Välj ett annat tal");
// var summa = parseInt(tal1string) + parseInt(tal2string)
// alert(tal1string + " + " + tal2string + " = " + summa);

// be användaren att mata in ålder
// skriv ut ålder på studenten
// var ålder = prompt("Hur gammal år du?");
// var studentenÅlder = parseInt(ålder) + 1;
// alert("Du är " + studentenÅlder + " när du tar studenten")
// document.writeln("<h2>Du är " + studentenÅlder + " när du tar studenten</h2>");

// spam check
// fråga användaren vad slumpad "summa"
var slumptal1 = Math.floor(Math.random() * 100)
var slumptal2 = Math.floor(Math.random() * 100)
var summa = slumptal1 + slumptal2
console.log(slumptal1, slumptal2, summa)
var gissning = prompt("Vad är summan av " + slumptal1 + " + " + slumptal2 + "?")

if (gissning == summa) {
    document.writeln("<h2> Good Job 😁</h2>")
} else {
    document.writeln("<h2> Bad Job 😭</h2>")
}