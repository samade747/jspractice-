// MATH EXPRESSIONS chapter 05 


// 01 
var number1 = 3;
var number2 = 5;
console.log(number1 + number2)
document.write("sum of " +number1+ " and " +number2+ ' is 8')


// 02 
document.write("<br>");
document.write(number1 - number2)
document.write("<br>");
document.write(number1 * number2)
document.write("<br>");
document.write(number1 / number2)
document.write("<br>");
document.write(number1 % number2)

// 03
var a;
document.write('<hr>Value after delaration is' + " " + a);                   
a = 5;
document.write("<br>Inital value is " + a)
var incrEment = ++a;
console.log(incrEment);
document.write('<br>value after increment is ' + incrEment);
var add = 7;
console.log(incrEment + add);
var grandTotal = 13;
document.write('<br> value adter addidtion is' + grandTotal);
var total = 13;
var decrement = --total;
document.write('<br>value after decrement is:12');
var remainder =12;
console.log(remainder % 3);
document.write('<br> The remainder is: ' +remainder%3);
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

// 04 movie ticket 
var ticket = 600; 
var buying = 5;
console.log(ticket + buying);
document.write("Total cost to buy 5 tickets to movie is " +ticket*buying + ' PKR');

//05 table with fuction 
const numberInput = document.getElementById("number");
    const tableContainer = document.getElementById("tableContainer");

    const generateTable = () => {
      // Clear any previous table
      tableContainer.innerHTML = "";

      const number = parseInt(numberInput.value);

      if (!isNaN(number)) {
        const table = document.createElement("table");
        table.border = "1";

        for (let i = 1; i <= 10; i++) {
          const row = document.createElement("tr");

          const cell1 = document.createElement("td");
          cell1.textContent = `${number} x ${i}`;
          row.appendChild(cell1);

          const cell2 = document.createElement("td");
          cell2.textContent = number * i;
          row.appendChild(cell2);

          table.appendChild(row);
        }

        tableContainer.appendChild(table);
      } else {
        tableContainer.textContent = "Please enter a valid number.";
      }
    };