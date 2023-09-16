// chapter 14 16

// 01
let student = [];
// 02
let students = {};
// 03 declare & intialize a string array
let str_Array = ['a', 'b', 'c', 'd'];
// 04 
const num_Array = [1,2,3,4,5];
//05
let boolean_Array = [true, false];
// 06
let mixed_Array = ['abc', 'def', 20, 30, true];
//07
const qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PHD'];
document.write("1) ", qualifications[0], '<br>')
document.write("2) ", qualifications[1], '<br>')
document.write("3) ", qualifications[2], '<br>')
document.write("4) ", qualifications[3], '<br>')
document.write("5) ", qualifications[4], '<br>')
document.write("6) ", qualifications[5], '<br>')
document.write("7) ", qualifications[6], '<br>')
document.write("8) ", qualifications[7], '<br>')

document.write('<hr>');

// 08

var student_Names = ['haroon', 'kamil', 'Samir bawle', 'samad'];
var student_Score = [320,230,180, 499];
var total_Marks = 500;
var percentage1 = (student_Score[0]/total_Marks) * 100;
document.write('Score of' + student_Names[0] + 'is' + student_Score[0] + '.' + 'Percentage:' + percentage1 + '%');
document.write('<hr>');
var percentage2 = (student_Score[1]/total_Marks) * 100;
document.write('Score of' + student_Names[1] + 'is' + student_Score[1] + '.' + 'Percentage:' + percentage2 + '%');
document.write('<hr>');

var percentage3 = (student_Score[2]/total_Marks) * 100;
document.write('Score of' + student_Names[2] + 'is' + student_Score[2] + '.' + 'Percentage:' + percentage3 + '%');
document.write('<hr>');

// 09


let colors = ['black', 'blue', 'white',];
document.write(colors + '<br>');
//09 A
colors.unshift(prompt('which color you want to add at the begining of array?'));
document.write(colors + '<br>');
// 09 B 
colors[colors.length] = prompt('end add array ?');
document.write(colors + '<br>');
//9 c
colors.unshift(prompt('Begining Add'),prompt('add again begining'));
document.write(colors + '<br>');
// 9 d 
colors.shift();
document.write(colors + '<br>');
// 9 e
colors.pop();
document.write(colors + '<br>');
// 9 f

let index_number = prompt('at which index you want to add color');
let color_name = prompt(`write the color name you want to add at ${index_number}?`);
colors.splice(index_number,0,color_name);
document.write(colors + '<br>');

// 9g

let 




















