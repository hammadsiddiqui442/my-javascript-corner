var name = "Muhammad Hammad Siddiqui";
console.log(name)
// OUTPUT
// Muhammad Hammad Siddiqui


var name = "Hammad";
console.log(name + name + name)
// OUTPUT
// HammadHammadHammad


var name = "Muhammad Hammad Siddiqui\nMuhammad Hammad Siddiqui\nMuhammad Hammad Siddiqui";
console.log(name)
// OUTPUT
// Muhammad Hammad Siddiqui
// Muhammad Hammad Siddiqui
// Muhammad Hammad Siddiqui


var name = "Hammad";
console.log(name + "\n" + name + "\n" + name)
// OUTPUT
// Hammad
// Hammad
// Hammad


var name = "Hammad";
console.log(name, "\n", name, "\n", name)
// OUTPUT
// Hammad 
//  Hammad
//  Hammad


// var name = "Hammad";
// console.log(name "\n" name "\n" name)
// // OUTPUT
// // Error


var myString = "My name is Hammad"
var myInteger = 28
var myFloat = 3.142
var myBoolean = true
console.log(myString, myInteger, myFloat, myBoolean)
console.log(typeof myString, typeof myInteger, typeof myFloat, typeof myBoolean)
// OUTPUT
// My name is Hammad 28 3.142 true
// string number number boolean


console.log("2" + "2")
console.log("2" + 2)
console.log("2" + 2 + 4 + 6 + 9)
console.log(2 + 2 + 4 + "6" + 9)
console.log(2 + 2 + 4 + 6 + "9")
console.log(2 + 2)
console.log("Hammad" + true)
// OUTPUT
// 22
// 22
// 22469
// 869
// 149
// 4
// Hammadtrue


var name = `Hammad`
var name2 = "Siddiqui"
console.log(`My name is ${name} ${name2}`)
console.log(typeof `My name is ${name} ${name2}`)
// OUTPUT
// My name is Hammad Siddiqui
// string



var age = 28
console.log("My age is " + age )
console.log(`My age is ${age}`)
age = 22
console.log(`My age is ${age}`)
// OUTPUT
// My age is 28
// My age is 28
// My age is 22

// ==================================================================================
// Starting "let" and "const"
// ==================================================================================

let age = 28
console.log(`My age is ${age}`)
age = 22
console.log(`My age is ${age}`)
// OUTPUT
// My age is 28
// My age is 22


const age = 28
console.log(`My age is ${age}`)
age = 22
console.log(`My name is ${age}`)
// OUTPUT
// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (C:\Users\user\Documents\GitHub\my-javascript-corner\step-01-variables\script.js:106:5)
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47


const company = "Axiom"
console.log(`Company name is ${company}`)
company = "Panacloud"
console.log(`Company name is ${company}`)
// OUTPUT
// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (C:\Users\user\Documents\GitHub\my-javascript-corner\step-01-variables\script.js:121:9)
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47


const Steaklover = true
console.log(`Hammad is a ${Steaklover}`)
Steaklover = false
console.log(`Hammad is a ${Steaklover}`)
// OUTPUT
// Hammad is a true
// C:\Users\user\Documents\GitHub\my-javascript-corner\step-01-variables\script.js:136
// Steaklover = false
//            ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (C:\Users\user\Documents\GitHub\my-javascript-corner\step-01-variables\script.js:136:12)       
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47
// PS C:\Users\user\Documents\GitHub\my-javascript-corner\step-01-variables> 


