console.log("function");

// define a function w/name sayHello
function sayHello(){
    console.log("hello");
}

sayHello();//trigger/runs the fn

//funtions w/perameters 
function greet(name){
    console.log("Welcome to the system " + name)
}

greet("'Ava the Fabulous'");

//funtions that return values
function addNumber(a,b){
    return a+b;
}

let result = addNumber(3,5);
result = addNumber(6,8);
console.log(result);


//funtion w/default perapeters

function greetings(name="Ava"){
    console.log("hello to " + name);
}

greetings("Jim");

//challenge 1

function doubleNumber(a){
    return a*2;
}
//conflict in terms, "result" already used, had to change result name to "doubledValue"
let doubledValue = doubleNumber(45);
console.log(doubledValue);

//challenge 2
function combineNames(){
    return firstName + " " + lastName
}

let firstName = "Ava";
let lastName = "Tuttle";
let fullname = combineNames(firstName,lastName);
console.log(fullname);

//challenge 3

function convertToSeconds(minutes){
    return minutes * 60;
}

let minutes = (69);
let totalSeconds = convertToSeconds(minutes);
console.log(totalSeconds);

//notes

function sayHello2(){
    let name = prompt("enter your name");
//document.getElementById("result").innerHTML="<p> Welcome to the system " + name + "</p>";
//template string
    document.getElementById("result").innerHTML = `<p> Welcome to the system ${name} </p>`;
}

