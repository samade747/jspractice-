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

// 002