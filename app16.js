// chapter 31-34

// Write a program that displays current date and time in 
// your browser.

// let currentDate = new Date();

// document.write(`current date and time: ${currentDate}`)

// 2. Write a program that alerts the current month in words. 
// For example December


// let months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
// ];

// let currentDate = new Date();
// let currentMonth = months[currentDate.getMonth()];

// document.write(`current month is ${currentMonth}`);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun


// let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// let currentDate = new Date();
// let currentDay = days[currentDate.getDay()];

// document.write(`current day ${currentDay}`);


// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today

// let currentDate = new Date();
// let currentDay = currentDate.getDay();

// if(currentDay === 0 || currentDay === 6) {
//     document.write(`Its a fun day`);
// } else {
//     document.write(`Its not fun day`);
// }

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// let currentDate = new Date ();
// let currentDay = currentDate.getDate();

// if(currentDay < 16){
//     document.write(`first 1st fifteen days of month`);
// } else{
//     document.write(`last fifteen days of month`);
// }


// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object

// let now = new Date();
// let minutesMidnight = (now.getHours() * 60) + now.getMinutes();

// document.write(`Minutes since midnight, Jan 1, 1970: ${minutesMidnight}`);

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”


// let currentDate = new Date();
// let currentHour = currentDate.getHours();

// if (currentHour < 12){
//     document.write(`its AM`);
// } else {
//     document.write(`its PM`);
// }

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate



// let laterDate = new Date(2020, 11, 31);
// // Month is 0-based (11 represents December)

// document.write(`${laterDate}`);

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


// declare a variable with function new Date & define the date
// let ramdanStartDate = new Date(2015, 5, 18);

// let currentDate = new Date();
// let timeDifference = currentDate - ramdanStartDate;
// let daysPassed = Math.floor(timeDifference / (1000 *60 * 60 *24));

// document.write(`Number days Passed Since 1st Ramadan ${daysPassed}`);


// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015

// var referenceDate = new Date("January 1, 1970 00:00:00 UTC");
// var beginningOf2015 = new Date("January 1, 2015 00:00:00 UTC");

// var elapsedMilliseconds = beginningOf2015 - referenceDate;
// var elapsedSeconds = elapsedMilliseconds / 1000;

// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + elapsedSeconds);


// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser

// let currentDate = new Date();

// // Extract the Current Hour
// let currentHour = currentDate.getHours();


// // Reset the date object an hour Ahed
// currentDate.setHours(currentHour + 1);

// // Display the updated date object
// document.write(`updated date ${currentDate}`);

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// let currentDate = new Date();
// let year = currentDate.getFullYear();

// //seting the year 100 years back
// currentDate.setFullYear(year -100);

// document.write(`Date reset to 100 years back ${currentDate}`);

function resetDate() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    currentDate.setFullYear(year - 100);

    document.getElementById('updatedDate').innerText = currentDate;
}

// Display the current date on page load
let currentDateString = new Date().toLocaleString();
document.getElementById('currentDate').innerText = currentDateString;




