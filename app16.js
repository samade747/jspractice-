// Write a program that displays current date and time in 
// your browser.

// let currentDate = new Date();

// document.write(`current date and time: ${currentDate}`)

// 2. Write a program that alerts the current month in words. 
// For example December


let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let currentDate = new Date();
let currentMonth = months[currentDate.getMonth()];

document.write(`current month is ${currentMonth}`);