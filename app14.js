// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// function greetUser(){
//     let firstName = prompt('enter firstName');
//     let lastName = prompt('enter firstName');
    
//     const fullName = (`${firstName} ${lastName}`);

//     document.write(`hello ${fullName}`)
// }


// greetUser()


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// function favoriteMobile(){
//     let mobileModel = prompt('enter your mobile phone model');
//     const lengthOfInput = mobileModel.length;

//     document.write(`My favorite phone is : ${mobileModel} <br> The length of your input is ${lengthOfInput}`)


// }

// favoriteMobile()

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser 

// function findIndex(){
//     const word = prompt('Please Enter a word');
//     const index = prompt('find index number of keyword you type above');

//     const indexUser = word.indexOf(index);

//     document.write(`the index of ${index} in the ${word} is on ${indexUser}`); 
// }

// const result = findIndex();

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser

// function findIndex1(){
//     const word1 = prompt('Please Enter a word');
//     const index1 = prompt('write a letter for searching index number');

//     const indexUser1 = word1.lastIndexOf(index1);

//     document.write(`the index of ${index1} in the ${word1} is on ${indexUser1}`); 

// }

// findIndex1();

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// function findCharacterAtIndex(wordUpload, index){
//     const char = wordUpload.charAt(index);
//     return char;
// }

// const wordUpload = prompt('enter the word');
// const indexToFind = +prompt('enter the number to find');
// const charAtIndex3 = findCharacterAtIndex(wordUpload, indexToFind);

// document.write(`charater ${indexToFind}rd index in the ${wordUpload} is ${charAtIndex3}`);


// 06


// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser

// const originalWord = 'hyderabad';
// const modifiedWord = originalWord.replace('hyderabad', 'Islamabad');

// document.write(`Original Word ${originalWord} <br>`);
// document.write(`Modeified Word ${modifiedWord} <br>`);


// replacement word 
// function replace text (original text, toreplace, replacement)
function replaceText(originalText, toReplace, replacement){
    const modifiedText = originalText.replace(toReplace, replacement);
    return modifiedText;
}

// with userinput
const originalWord = prompt('Enter the Original word');
const wordToReplace = prompt('Enter the word to replace');
const replacementWord = prompt('Enter the Replacement word');



const modifiedWord = replaceText(originalWord, wordToReplace, replacementWord);

document.write(`original word: ${originalWord} <br>`);
document.write(`Modified word: ${modifiedWord}`);





