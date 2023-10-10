// chapter 26-30

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// let userInput = prompt('Enter Postive floating point number');
// let number = parseFloat(userInput);

// if(number > 0){
//     let roundOffValue = Math.round(number);
//     let floorValue = Math.floor(number);
//     let ceilValue = Math.ceil(number);

//     document.write(`a. Original Number ${number} <br>`);
//     document.write(`b. Round off Value:  ${roundOffValue} <br>`);
//     document.write(`b. floor Value:  ${floorValue} <br>`);
//     document.write(`b. Ceil Value:  ${ceilValue} <br>`);
// } else {
//     alert(`pls enter a postive number.`);
// }

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



// let userInput = prompt('Enter Negative floating point number');
// let number = parseFloat(userInput);

// if(number < 0){
//     let roundOffValue = Math.round(number);
//     let floorValue = Math.floor(number);
//     let ceilValue = Math.ceil(number);

//     document.write(`a. Original Number ${number} <br>`);
//     document.write(`b. Round off Value:  ${roundOffValue} <br>`);
//     document.write(`b. floor Value:  ${floorValue} <br>`);
//     document.write(`b. Ceil Value:  ${ceilValue} <br>`);
// } else {
//     alert(`pls enter a negative floating number.`);
// }


// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let userInput = prompt('enter a number');
// let number = parseFloat(userInput);

// let absoluteValue = Math.abs(number);

// document.write(`the absolte value of ${number} is ${absoluteValue}`);

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.
// 2 dice rolled 

// let dicevalue = Math.floor(Math.random() * 6) + 1;

// document.write(`the dice rolled: ${dicevalue} <br>`)

// let dicevalue1 = Math.floor(Math.random() * 6) + 1;

// document.write(`the dice rolled: ${dicevalue1}`)

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// let coinToss = Math.random() < 0.5 ? 'Heads' : 'Tails';

// document.write("The coin landed on: " + coinToss);



// 6. Write a program that shows a random number between 1 
// and 100 in your browser

// let randomNumber = Math.floor(Math.random() *100 ) + 1;


// document.write(`Random number between 1 and 100 ${randomNumber}`);

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// let userInput = prompt(`Enter your weight`);
// let weight;

// let match = userInput.match(/^\d+(\.\d+)?/);

// if (match){
//     weight = parseFloat(match[0]);
//     document.write(`your weight is : ${weight} kilograms`);   
// } else {
//     document.write(`Invaild Input please enter a valid weight`);
// }


// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user


// let secretNumber = Math.floor(Math.random() * 10) +1;
// let userInput = parseInt(prompt(`Guess the secret number between 1 & 10`));

// if (userInput === secretNumber){
//     document.write(`Congraultaion! you guess the secret Number:`);    
// } else {
//     document.write(`Sorry the secret number was ${secretNumber}`);
// }



