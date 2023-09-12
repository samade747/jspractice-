// chapter 12-13


// 001
let charater1 = prompt('Enter a character(number or string)');
charater1 = charater1.charCodeAt(0);
if((charater1 >= 65)&&(charater1 <= 90)){
     document.write('<h3>Input is uppercase Letter</h3>');
} else if ((charater1 >= 97)&&(charater1 <= 122)){
    document.write('<h3>Input is lowercase letter</h3>');
}

document.write('<br>'); 

// 002 "OR operator any single condition is true"

const intergar1 = +prompt('Enter the first integer: ');
const intergar2 = +prompt('Enter the first integer: ');
if((intergar1 > intergar2)||(intergar2 < intergar1)) {
    document.write(intergar1 + 'is larger than' + intergar2);

}else if ((intergar2 > intergar1) || (intergar1 < intergar2)){
    document.write(intergar2 + 'is larger than' + intergar1);
} else if (intergar1 + 'is equal to' + intergar2);{
    document.write(intergar1 + 'is equal to' + intergar2);
}


document.write('<br>'); 


// 003

const userNumber = +prompt('Enter the Number: ');
if (userNumber < 0){
    document.write('<h3>The number is negative</h3>')
} else if(userNumber === 0) {
    document.write('<h3>The number is zero</h3>')
} else {
    document.write('<h3>The number is positive</h3>')
}

document.write('<br>'); 

// 004

const chara1 = prompt('Enter any alphabet from a to z:');
chara1 = chara1.toLowerCase();
if((chara1 === 'a')||(chara1 === 'e')||(chara1 === 'i')(chara1 === 'o')(chara1 === 'u')){
    document.write('<h3>true</h3>')
} else {
    document.write('<h3>false</h3>')
}

document.write('<br>'); 

// 005 
let correctPassword = "210000";
let userPasswor = prompt('enter your password: ');
if (userPasswor === ''){
    document.write('please enter your paswword');
} else if (correctPassword === userPasswor){
    document.write('Correct ! password Matched')
} else if (correctPassword !== userPasswor){
    document.write('incorrect paswword');
}

document.write('<br>'); 






