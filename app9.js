// chapter 9 -11 


// // 001

// document.write('<h2>Question1</h2>');
// var city = prompt('Enter the city name:');
// if (city.toLowerCase() === 'karachi') {
//     document.write('<h2>Welcome to city of lighs</h2>')
// }

// document.write('<br>');

// //002 

// let gender1 = prompt('Enter your gender:');
// if ( gender1.toLowerCase() === 'male'){
//     document.write('Good Morning Sir Ji');
// } else if (gender1.toLowerCase() === 'female'){
//     document.write('Good Morning Beautiful girl');
// }

// document.write('<br>');

// 003 

// let color = prompt('Enter color of Traffic Signal (Red, Yellow, Green)');

// if (color.toLowerCase() === 'red') {
//     document.write('Must Stop');
// } else if (color.toLowerCase() === 'yellow') {
//     document.write('Get Ready to Move');
// } else if (color.toLowerCase() === 'green' ) {
//     document.write('GO Now');
// } else { 
//     document.write('Type Only Red, Green, or Yellow. Wrong input.');
// }

// document.write('<br>');

// // 004

// const fuel = +prompt('enter remining fuel in car(in liters): ');
// if ( fuel <= 0.25 ) {
//     document.write('pls Refill the fuel or ready to dka lgaing');
// }

// document.write('<br>');

// 05 

let a1 = 4;
document.write('fixed value '+ a1);
document.write('<br>');

if (++a1 === +prompt('your Number')) {
    document.write('Is True ');
} else {
    document.write('Is False');
}


// 05 part b

var b = 82;
if (b++ === 83){
    document.write("b is true");
}

// 5 part c 

var c = 12;
if (c++ === 13){
    document.write("b is true");
} 

if (c === 13){
    document.write("condition 2 is true");
}

if (++c < 14){
    document.write("condition 3 is true");
}

if (c === 14){
    document.write("condition 14 is true");
}

// 5 part D 

var MaterialCost = 20000;
var laborCost = 2000;
var totalCost = MaterialCost + laborCost;
if (totalCost === laborCost + MaterialCost){
    document.write('the cost equals');
}
if (true) {
    document.write('true');
}
if (false) {
    document.write('false');
}

// 5 f
if ('car' < 'cat'){
    document.write('car is smaller than cat')
}

// 006

document.write('<h2>Marks Sheets</h2>');
let totalMarks = +prompt('Total Marks:');
document.write('<h3>Total Marks : </h3>' + totalMarks);

let obtainedMarks = +prompt('Enter marks obtained in three subjects: ');
document.write('<h3>Marks Obtained: </h3>' + obtainedMarks);

let percentage = (obtainedMarks/totalMarks) * 100;
document.write('<h3>Percentage: </h3>' + percentage + '<h3>%</h3>');
if (percentage >= 80){
    document.write('<h3>Grade: A-One</h3>');
    document.write('<h3>Remarks: Excellent</h3>');
} else if (percentage >= 70){
    document.write('<h3>Grade: A</h3>');
    document.write('<h3>Remarks: Good</h3>');
} else if (percentage >= 60 ) {
    document.write('<h3>Grade: B</h3>');
    document.write('<h3>Remarks: You need to improve</h3>');
} else if (percentage < 60 ) {
    document.write('<h3>Grade: Fail</h3>');
    document.write('<h3>Remarks: Sorry</h3>');
}

document.write('<br>');

//007
document.write('<h2>Guess Game</h2>');
const secretNumber = 5;
const guessNumber = +prompt('Enter the number inrange 1 to 10');
if ( secretNumber === guessNumber) {
    document.write('<h3>Bingo! Correct answer</h3>')
} else if (++secretNumber === guessNumber){
    document.write('<h3>Close enough to correct answer</h3>')       
} else {
    document.write('<h3>Wrong Answer</h3>');
}


document.write('<br>');

// 008

const givenNumber = +prompt('enter the number: ');
if (givenNumber % 3 === 0) {
    document.write('the number is divisble by 3');
} else {
    document.write('the number is not divisible by 3')
}

document.write('<br>');


// 009 checking give number is odd or even

let inputNumber1 = +prompt('enter the number: ');
if ( inputNumber1 % 2 === 0) {
    document.write('<h3>Even Number</h3>');
} else {
    document.write('<h3>Odd Number</h3>');
}


document.write('<br>');

// 010 

let temperature = +prompt('Enter the temperature: ');
if (temperature > 40) {
    document.write('it is too hot outside');
} else if (temperature > 30) {
    document.write('Normal weather');    
} else if (temperature > 20) {
    document.write('Cool Weather');    
} else if (temperature > 00) {
    document.write('wow ! Today Weather is cool ');    
}

document.write('<br>');


// 011

