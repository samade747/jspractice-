// // chapter 6-9

// // 01 
// // prgm 1
// let prgm1 = prompt(10);

// document.write('The Value of a is :' +prgm1)

// document.write('<br>');
// document.write('<br>');
// // prgm2
// let prgm2 = ++prgm1;
// document.write('The Value of ++a is' + prgm1);
// document.write('<br>');
// document.write('Now the Value of a is:' +prgm2);

// document.write('<br>');
// // prgm3
// let prgm3 = prgm2++;
// document.write('<br>');
// document.write('The Value of a++ is' + prgm3);

// document.write('<br>');
// document.write('Now the Value of a is:' + ++prgm3);

// // prgm4
// document.write('<br>');
// let prgm4 = --prgm3;
// document.write('<br>');
// document.write('The Value of --a is' + prgm4);

// document.write('<br>');
// document.write('now the Value of a is:' +prgm4);

// // prgm5
// document.write('<br>');
// let prgm5 = prgm4--;
// document.write('<br>');
// document.write('The Value of a-- is' + prgm5);

// document.write('<br>');
// document.write('The Value of a is:' + --prgm5);


// // 02 

// var a = 2;
// var b = 1;

// let calcu = (-aa - --b + bb + b--);

// document.write('a =2<br>');
// document.write('b =1<br>');
// document.write('calculation: --a - --b + ++b + b-- <br>');
// document.write('answer:1<br>');


// //03
// var name1 = prompt('write your name here');
// document.write('welcome' + name1 + 'on board we will fly soon <br>')


// 04 table with user input using loop 

var userinp = +prompt("Enter Value");


// with user input // intiazise  / condition check / increment decrement 
for(var i=1;  i<=10;               i++            ){
    document.write(userinp + " x " +i+ "=" +userinp*i, "<br>")
}

document.write("<br>");

// 06

let subject1 = prompt('subject no:01');
let subject2 = prompt('subject no:02');
let subject3 = prompt('subject no:03');

let totalMarks = 100;

let Marks1 = prompt('Marks no:01');
let Marks2 = prompt('Marks no:02');
let Marks3 = prompt('Marks no:03');

let percent1 = ((Marks1 / totalMarks) * 100);
let percent2 = ((Marks1 / totalMarks) * 100);
let percent3 = ((Marks1 / totalMarks) * 100);

document.write("maths"   + totalMarks +  Marks1 + subject1 + ' '  + percent1 + ' %<br>');
document.write('english' + totalMarks +  Marks2 + subject2 + ' '  +  percent2 + ' %<br>');
document.write( 'urdu '  + totalMarks +  Marks3 + subject3 + ' '  + percent3 + ' %<br>');

