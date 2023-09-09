// // MATH EXPRESSIONS chapter 05 


// // 01 
// var number1 = 3;
// var number2 = 5;
// console.log(number1 + number2)
// document.write("sum of " +number1+ " and " +number2+ ' is 8')


// // 02 
// document.write("<br>");
// document.write(number1 - number2)
// document.write("<br>");
// document.write(number1 * number2)
// document.write("<br>");
// document.write(number1 / number2)
// document.write("<br>");
// document.write(number1 % number2)

// // 03
// var a;
// document.write('<hr>Value after delaration is' + " " + a);                   
// a = 5;
// document.write("<br>Inital value is " + a)
// var incrEment = ++a;
// console.log(incrEment);
// document.write('<br>value after increment is ' + incrEment);
// var add = 7;
// console.log(incrEment + add);
// var grandTotal = 13;
// document.write('<br> value adter addidtion is' + grandTotal);
// var total = 13;
// var decrement = --total;
// document.write('<br>value after decrement is:12');
// var remainder =12;
// console.log(remainder % 3);
// document.write('<br> The remainder is: ' +remainder%3);
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// // 04 movie ticket 
// var ticket = 600; 
// var buying = 5;
// console.log(ticket + buying);
// document.write("Total cost to buy 5 tickets to movie is " +ticket*buying + ' PKR');

// // //05 table with fuction 
// // const numberInput = document.getElementById("number");
// //     const tableContainer = document.getElementById("tableContainer");

// //     const generateTable = () => {
// //       // Clear any previous table
// //       tableContainer.innerHTML = "";

// //       const number = parseInt(numberInput.value);

// //       if (!isNaN(number)) {
// //         const table = document.createElement("table");
// //         table.border = "1";

// //         for (let i = 1; i <= 10; i++) {
// //           const row = document.createElement("tr");

// //           const cell1 = document.createElement("td");
// //           cell1.textContent = `${number} x ${i}`;
// //           row.appendChild(cell1);

// //           const cell2 = document.createElement("td");
// //           cell2.textContent = number * i;
// //           row.appendChild(cell2);

// //           table.appendChild(row);
// //         }

// //         tableContainer.appendChild(table);
// //       } else {
// //         tableContainer.textContent = "Please enter a valid number.";
// //       }
// //     };

// //05 chapter
// var getValuefromUser = prompt('which table do you want to generate?')

// document.write(getValuefromUser + " X 1 =" + (getValuefromUser * 1))
// document.write("<br>");
// document.write(getValuefromUser + " X 2 =" + (getValuefromUser * 2))
// document.write("<br>");
// document.write(getValuefromUser + " X 3 =" + (getValuefromUser * 3))
// document.write("<br>");
// document.write(getValuefromUser + " X 4 =" + (getValuefromUser * 4))
// document.write("<br>");
// document.write(getValuefromUser + " X 5 =" + (getValuefromUser * 5))
// document.write("<br>");
// document.write(getValuefromUser + " X 6 =" + (getValuefromUser * 6))
// document.write("<br>");
// document.write(getValuefromUser + " X 7 =" + (getValuefromUser * 7))
// document.write("<br>");
// document.write(getValuefromUser + " X 8 =" + (getValuefromUser * 8))
// document.write("<br>");
// document.write(getValuefromUser + " X 9 =" + (getValuefromUser * 9))
// document.write("<br>");
// document.write(getValuefromUser + " X 10 =" + (getValuefromUser * 10))
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// //  06

// var Celsius = 25;
// var Fahrenheit = (Celsius * 9 / 5 ) +32;
// document.write("<b>" +Celsius+"</b> <sup>0</sup> is" +Fahrenheit+"</br><sup>C<br><br><br>")       

// var Fahrenheit = 70 
// var Celsius = (Fahrenheit-32)*5/9
// document.write("<b>" +Fahrenheit+"</b> <sup>0</sup> is" +Celsius+"</br><sup>C<br><br><br>")        




// // 07 
// var Price1 = 650;
// var Price2 = 100;
// var Order1 = 3;
// var Order2 = 7;
// var shipping = 100;

// document.write("<h1>Shopping Cart</h1>");
// document.write("<br><br><br><br>");
// document.write("<h3>Price of item 1 is 650</h3>");
// document.write("<h3>Quantity of item 1 is 3</h3>");
// document.write("<h3>Price of item 2 is 100</h3>");
// document.write("<h3>Quantity of item 2 is 7</h3>");
// document.write("<h3>Shipping charges 100</h3>");

// var totalPrice = Price1  * Order1 + Price2 * Order2 + shipping;

// document.write("Total Price: " + totalPrice);

// document.write("<br><br><br><br>");




// // 08
// document.write("<br>");
// var Mark = "Mark Sheet";
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// var TotalMarks = 980;
// document.write("<br>");
// var MarksObtained = 804;
// document.write("<br>");
// document.write("<br>");
// var Percentage = MarksObtained / TotalMarks *100

// document.write("<h1>Mark Sheet</h1>");
// document.write("<br>");
// document.write("<br>");
// document.write( "Total marks  " + TotalMarks);
// document.write("<br>");
// document.write("<br>");
// document.write( "Marks obtained " +  MarksObtained);
// document.write("<br>");
// document.write("<br>");
// document.write( "Percentage " + Percentage)

// //09
// var usRate = 104.80;
// var usDollar = 10;
// var AmountUS = usRate * usDollar;

// var SaudiRate = 28;
// var SaudiDollar = 25;
// var AmountSaudi = SaudiRate * SaudiDollar;

// var totalPkr = AmountUS + AmountSaudi;

// document.write("<h1>Curreny in PKR</h1>");
// document.write("<br>");
// document.write('Total Currency in PKR:' + totalPkr);
// document.write("<br>");

// //10 

// let number2 = 10;
// let resultTotal = (number2 + 5) * 10 / 2;

// document.getElementById("resultContainer").innerHTML = "Result Total: " + resultTotal;

// 11
document.write('<h1>Age Calculator</h1>');

const birthYear = 1992;
document.write('Current Year ' +birthYear);
document.write("<br>");

const currentYear = 2016;
document.write('Birth Year ' +currentYear);
document.write("<br>");


let currentAge = currentYear - birthYear;
document.write('Your Age ' + currentAge);


//12
document.write("<br>");
document.write("<br>");

document.write("<br>");
document.write("<br>");

const radius = 20;

const circumference = 2 * Math.PI * radius;

const area = Math.PI * Math.pow(radius, 2);

document.write(`Radius of circle: ${radius}`);

document.write("<br>");
document.write(`The circumference is: ${circumference}`);

document.write("<br>");
document.write(`The area is: ${area}`);

// 13 
document.write("<br>");
document.write("<br>");
document.write("<br>");



let favoriteSnack = 'chocolate chip';
let currentiAge = 15;
let maxAge = 165;
let snacksPerDay = 3;

let yearsRemaining = maxAge - currentiAge;
let snacksWanted = yearsRemaining * 365 * snacksPerDay;

document.write('the lifetime supply calculator');
document.write("<br>");
document.write("Favorite snack" + favoriteSnack);
document.write("<br>");
document.write("Current age: " + currentiAge);
document.write("<br>");
document.write('Estimated Maximum Age:'+ maxAge);
document.write("<br>");
document.write('Amount of snacks per day:'+snacksPerDay);
document.write("<br>");
document.write('You will need '+snacksWanted + favoriteSnack + 'to last you until the ripe old age of' + maximumAge);



