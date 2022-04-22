https://www.w3schools.com/js/js_string_methods.asp
https://www.w3schools.com/js/js_string_search.asp


// =========================================================================================
// JavaScript String Length
// =========================================================================================


let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
console.log(length);
// OUTPUT
// 26


let txt = "ABCD";
let length = txt.length;
console.log(length)
// OUTPUT
// 4


let txt = "ABCD" + "EFGH";
let length = txt.length;
console.log(length)
// OUTPUT
// 8


let txt = "ABCD" + "1234";
let length = txt.length;
console.log(length);
// OUTPUT
// 8


let txt = "ABCD" + 1234;
let length = txt.length;
console.log(length);
// // OUTPUT
// // 8


let txt = "ABCD" + 1234 + 5678;
let length = txt.length;
console.log(length);
// // OUTPUT
// // 12


// ============================================================================================
// JavaScript String slice()
// ============================================================================================


let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part);
// OUTPUT
// Banana

let str = "Hammad, Mishaal, Ahmed";
let part = str.slice(17, 22);
console.log(part);
// OUTPUT
// Ahmed


let num = 123456789;
let part = num.slice(5, 6);
console.log(part)
OUTPUT
TypeError: num.slice is not a function
    at Object.<anonymous> (C:\Users\user\Documents\GitHub\my-javascript-corner\step-02-string-methods\script.js:67:16)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
PS C:\Users\user\Documents\GitHub\my-javascript-corner\step-02-string-methods> 


let str = "Hammad" + "Mishaal";
let part = str.slice(6, 13);
console.log(part)
// OUTPUT
// Mishaal


let str = "Hammad" + 123456;
let part = str.slice(6, 12);
console.log(part)
// OUTPUT
// 123456


let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);
console.log(part);
// OUTPUT
// Banana


let str = "Apple, Banana, Kiwi";
let part = str.slice(7);
console.log(part);
// OUTPUT
// Banana, Kiwi


let str = "Apple, Banana, Kiwi";
let part = str.slice(-12);
console.log(part);
// OUTPUT
// Banana, Kiwi


let str = "Apple, Banana, Kiwi";
let part = str.slice(-4);
console.log(part);
// OUTPUT
// Kiwi


// ========================================================================================
// JavaScript String substring()
// ========================================================================================


let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part);
// OUTPUT
// Banana


let str = "Apple, Banana, Kiwi";
let part = str.substring(0, 5);
console.log(part);
// OUTPUT
// Apple


let str = "Apple, Banana, Kiwi";
let part = str.substring(15, 19);
console.log(part);
// OUTPUT
// Kiwi


// ==========================================================================================
// JavaScript String substr()
// ==========================================================================================


let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
console.log(part);
// OUTPUT
// Banana


let str = "Apple, Banana, Kiwi";
let part = str.substr(15, 4);
console.log(part);
// OUTPUT
// Kiwi


let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
console.log(part);
// OUTPUT
// Banana, Kiwi


let str = "Apple, Banana, Kiwi";
let part = str.substr(0);
console.log(part);
// OUTPUT
// Apple, Banana, Kiwi


let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
console.log(part);
// OUTPUT
// Kiwi


let str = "Apple, Banana, Kiwi";
let part = str.substr(-13);
console.log(part);
// OUTPUT
// Banana, Kiwi


// ===========================================================================================
// Replacing String Content
// ===========================================================================================


let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);
// OUTPUT
// Please visit W3Schools!


let text = "My name is Hammad!";
let newText = text.replace("Hammad", "Ahmed");
console.log(newText);
// OUTPUT
// My name is Ahmed!


let text = "My father name is Aslam!";
let newText = text.replace("Aslam", "Siddiqui");
console.log(newText);
// OUTPUT
// My father name is Siddiqui!


let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);
// OUTPUT
// Please visit W3Schools and Microsoft!


let text = "I am very pleased to see you at my house!";
let newText = text.replace("pleased", "happy");
console.log(newText);
// OUTPUT
// I am very happy to see you at my house!


let text = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools");
console.log(newText);
// OUTPUT
// Please visit Microsoft!


let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText);
// OUTPUT
// Please visit W3Schools!


let text = "I am new in this house";
let newText = text.replace(/HOUSE/i, "HOME");
console.log(newText);
// OUTPUT
// I am new in this HOME


let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText);
// OUTPUT
// Please visit W3Schools and W3Schools!


let text = "This is our house and house";
let newText = text.replace(/house/g, "home");
console.log(newText);
// OUTPUT
// This is our home and home


// ======================================================================================
// Converting to Upper and Lower Case
// ======================================================================================


let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);
// OUTPUT
// HELLO WORLD!


let text1 = "My name is Hammad!";
let text2 = text1.toUpperCase();
console.log(text2);
// OUTPUT
// MY NAME IS HAMMAD!


// =====================================================================================
// JavaScript String toLowerCase()
// =====================================================================================


let text1 = "HELLO WORLD!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
console.log(text2);
// OUTPUT
// hello world!


let text1 = "MY NAME IS HAMMAD";
let text2 = text1.toLowerCase();
console.log(text2);
// OUTPUT
// my name is hammad


// ========================================================================================
// JavaScript String concat()
// ========================================================================================


let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);
// OUTPUT
// Hello World


let text1 = "My";
let text2 = "name";
let text3 = "is";
let text4 = "Hammad";
let text5 = "Siddiqui";
let text6 = text1.concat(" "+ text2," "+ text3," "+ text4," "+ text5);
console.log(text6);
// OUTPUT
// My name is Hammad Siddiqui


// =======================================================================================
// JavaScript String trim()
// =======================================================================================


let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2);
// OUTPUT
// Hello World!


let text1 = "\tHello World!";
let text2 = text1.trim();
console.log(text2);
// OUTPUT
// Hello World!


let text1 = "Hello  \t  World";
let text2 = text1.trim();
console.log(text2);
// OUTPUT
// Hello     World


// ========================================================================================
// JavaScript String padStart()
// ========================================================================================


let text = "5";
let padded = text.padStart(5,"x");
console.log(padded);
// OUTPUT
// xxxx7


let text = "7";
let padded = text.padStart(9, "y");
console.log(padded);
// OUTPUT
// yyyyyyyy7


let text = "7";
let padded = text.padStart(5, "z");
console.log(padded);
// OUTPUT
// zzzz7


let text = "5";
let padded = text.padStart(4,"0");
console.log(padded);
// OUTPUT
// 0005


let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");
console.log(padded);
// OUTPUT
// 0005


let numb = 25;
let text = numb.toString();
let padded = text.padStart(5, "1");
console.log(padded);
// OUTPUT
// 11125


// ===========================================================================================
// JavaScript String padEnd()
// ===========================================================================================


let text = "5";
let padded = text.padEnd(4,"x");
console.log(padded);
// OUTPUT
// 5xxx


let text = "Hammad"
let padded = text.padEnd(4, "Siddiqui");
console.log(padded);
// OUTPUT
// Hammad


let text = "3";
let padded = text.padEnd(10, "z");
console.log(padded);
// OUTPUT
// 3zzzzzzzzz


let numb = 7;
let text = numb.toString();
let padded = text.padEnd(6, "y");
console.log(padded);
// OUTPUT
// 7yyyyy


// =========================================================================================
// JavaScript String charAt()
// =========================================================================================


let text = "HELLO WORLD";
let char = text.charAt(0);
console.log(char);
// OUTPUT
// H


let text = "HELLO WORLD";
let char = text.charAt(4);
console.log(char);
// OUTPUT
// 0


let text = "HAMMAD SIDDIQUI";
let char = text.charAt(0, 14);
console.log(char);
// OUTPUT
// H


let text = "HAMMAD SIDDIQUI";
let char = text.charAt(6);
console.log(char);
// OUTPUT
// 


// ========================================================================================
// JavaScript String charCodeAt()
// ========================================================================================


let text = "HELLO WORLD";
let char = text.charCodeAt(0);
console.log(char);
// OUTPUT
// 72


let text = "HAMMAD SIDDIQUI";
let char = text.charCodeAt(5);
console.log(char);
// OUTPUT
// 68


// ========================================================================================
// Property Access
// ========================================================================================


let text = "HELLO WORLD";
let char = text[0];
console.log(char);
// OUTPUT
// H


let text = "HAMMAD SIDDIQUI";
let char = text[5];
console.log(char);
// OUTPUT
// D


let text = "HAMMAD SIDDIQUI";
let char = text[6];
console.log(char);
// OUTPUT
// 


let text = "HELLO WORLD";
text[0] = "A";           // Gives no error, but does not work
console.log(text);
// OUTPUT
// HELLO WORLD


// =========================================================================================
// Converting a String to an Array
// =========================================================================================

If you want to work with a string as an array, you can convert it to an array.

// =========================================================================================
// JavaScript String split()
// =========================================================================================

A string can be converted to an array with the split() method:

EXAMPLE
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe


let text = "HAMMAD";
let myArray = text.split(",");
console.log(myArray);
// OUTPUT
// [ 'HAMMAD' ]


let text = "HAMMAD";
let myArray = text.split(" ");
console.log(myArray);
// OUTPUT
// [ 'HAMMAD' ]


let text = "HAMMAD";
let myArray = text.split("|");
console.log(myArray);
// OUTPUT
// [ 'HAMMAD' ]
