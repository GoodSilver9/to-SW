const daysOfWeek = ["mon" ,"tue" ,"wed" ,"tue" ,"fri" ,"sat"];

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const playerName = "SM"
const playerPoints = 1212111;
const playerHandsome = true;
const playerFat = "little bit";

//player[0] == name
//player[1] == points
//player[2] == HandSome 
//player[3] == Fat
const player2 = ["SM", 1212, true, "little bit"];

const player = {
    name:"SM",
    points: 11212121,
    fat:true,
};
console.log(player);
console.log(player.name);

console.log(player["name"]);

console.log(player);
player.lastName = "Lee";
player.points = player.points + 15;
console.log(player);

console.log("Hello my name is SM");
console.log("Hello my name is das");
console.log("Hello my name is dfag");
console.log("Hello my name is gfdgfdg");
console.log("Hello my name is Sfdgsdfsad");
// function 만들어서 간단화 하기

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}

sayHello("SM", 25);
sayHello("das", 20);
sayHello("lynn", 21);


function plus(a, b){
    console.log(a + b);
}
function divide(a, b){
    console.log(a / b);
}    
plus(8, 60);
divide(98,40)

const player1 = {
    name: "nico",
    Good: function(otherPersonName){
   console.log("helo! " + otherPersonName + "nice to meet you");     
    }
}
console.log(player1.name);
player1.Good("SMSM ");

player1.Good("SM")

const a = 5;
let isSmFat = true;

isSmFat = false;
console.log(a);

const calculator = {
    add: function (a, b) {
        console.log(a +b);  
    },
    minus: function(a, b) {
        console.log(a -b);
    },
    divide: function(a, b){
        console.log(a /b);
    },
    multiply: function(a, b){
        console.log(a *b);
    },
    squared: function(a, b){
        console.log(a **b);
    }
    
}
calculator.add(10, 2);
calculator.minus(60, 3);
calculator.divide(24, 2);
calculator.multiply(2, 4);
calculator.squared(24, 2);


const age1 = 96;
function calculatorKrAge(ageOfForeigner){
    return ageOfForeigner + 2; 
}

const krAge = calculatorKrAge(age1);

console.log(krAge);


const calculator1 = {
    add1: function (a, b) {
        return a + b ;  
    },
    minus1: function(a, b) {
        return a - b;
    },
    divide1: function(a, b){
        return a / b;
    },
    multiply1: function(a, b){
        return a * b;
    },
    square1d: function(a, b){
        return a ** b;
    },
    
};

const add1Result = calculator1.add1(2,3)
const minus1Result = calculator1.minus1(add1Result, 10);
const divide1Result = calculator1.divide1(12 , minus1Result);
const multiply1Result = calculator1.multiply1(divide1Result, 10);
const square1dResult = calculator1.square1d(multiply1Result , 12);

console.log(add1Result);

// consol log 이제 자제 하고 Conditionals 로

//const age1 = prompt("How old are you?");//

console.log(age1, parseInt(age1));

const age = parseInt(prompt("How old are you?"));

true || true === true
false || true === true
true || false === true
false || false === false

console.log(isNaN(age));

if(isNaN(age)) {
     console.log("Please write a number");
    } else if (age < 18) {
        console.log("You are too young.");
    } else if(age === 100) {
        console.log("wow you are wise");
    }
      else if (age >= 18 && age <= 50) {
        console.log("You can drink.");
    }

    if((a && b) || (c && d)) {

    }  
