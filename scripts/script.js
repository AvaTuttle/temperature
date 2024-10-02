console.log("script");

//creating string variables
//keyword nameVariable = value;
let myName = "Ava";
let lastName = "Tuttle";

console.log(myName);
console.log(lastName);
console.log(myName + " " +lastName);//concatenation

//creating numerical variables
let myAge = 28
console.log("Age: " + myAge);

let myGrade = 9.5;
console.log(myGrade);

//creating boolean variables (true/false)
let isAdmin=true;
let isStudent=false;
let isProfessor=true;
console.log(isProfessor);

/*many lins of comments
xxxx
xxxx
xxxx
xxxx
*/

myName="Ava";
lastName="Tuttle";
//my name is Ava Tuttle and I am 99 years old.
console.log("My Name Is " +myName +" " +lastName +" an I am " + myAge + " years old");

let Number1 =1
let Number2 =2

//addition
let addition = Number1 + Number2;
console.log(Number1 + " + " + Number2 + " = " + addition);
//subtraction
let subtraction = Number1 - Number2;
console.log(Number1 - " - " - Number2 - " = " + subtraction);
//multiplication
let multiplication = Number1 * Number2;
console.log(Number1 * " * " * Number2 * " = " * addition);
//division
let division = Number1 / Number2;
console.log(Number1 / " / " + Number2 / " = " / addition);
//constants
//keyword constName = value;

const pi = 3.1416
//pi=4.5; cant modify a constant
console.log(pi);

//promt: interact w/user
let pet =prompt("insert yuur pet name: ");
console.log ("your pet is " +pet)