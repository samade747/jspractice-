// // chapter 17-20
// // 1. Declare and initialize an empty multidimensional array.
// // (Array of arrays)
// let emptyArray = [[]];

// // 2. Declare and initialize a multidimensional array 
// // representing the following matrix:
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]

// // 3. Write a program to print numeric counting from 1 to 10.
// //for ( shuru /;  kahan tak chalega ; increment decremnet )
// for (let i =1; i <= 10; i++){
//     console.log(i);
// }


// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user

// let = userinp = +prompt('Enter Value');
// let = userinp1 = +prompt('Enter Value');

// for(var i=1; i<=userinp1; i++){
//     document.write(userinp + 'X' + i + '=' + userinp*i, '<br>')
// }

//5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// let fruits = ['apple', 'banana', 'mango', 'orange', 
//     'strawberry']

//     for(var j=0; j<=fruits.length; j++){
//         document.write(fruits[j] + '<br>');
//     }


// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


//A
// for(var i=1; i<=15; i++){
//   document.write(i + '<br>');
// }


// //b
// for(var j=10; j>=1; j--){
//     document.write(j + '<br>');
//   }

// //c
// for( let i = 0; i <= 20; i +=2 ){
//   document.write(i+ '<br>');
// }


// //d
// for( let i = 1; i <= 19; i +=2 ){
//   document.write(i+ '<br>');
// }


// //e
// for( let i = 2; i <= 20; i +=2 ){
//   document.write(i+ 'k'+ '<br>');
// }


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example


// const bakery = [
//   'cake',
//   'apple pie',
//   'cookie',
//   'chips',
//   'patties'
// ]


// function searchItem(){
//   const userInput = prompt('Enter an item to search: ');

//   if(bakery.includes(userInput)){
//     document.write(`${userInput} is found in the list`);
//   } else {
//     document.write(`${userInput} is not found in the list`);
//   }
// }

// searchItem();



// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

// const A = [24, 53, 78, 91, 500, 500.5, 12];

// function findLargestNumber(arr) {
//   let max = arr[0];

//   for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max ){
//       max = arr[i];
//     }
//   }
//   return max; 
// }

// const largestNumber = findLargestNumber(A);

// document.write(`largest Number ${largestNumber}`);


// const A = [24, 53, 201, 10,500, 78, 91, 12];

// const largestNumber = Math.max(...A);

// document.write(`largest Number ${largestNumber}`);

// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12}

// const A = [24, 53, 78, 91, 12, 0, -1, -1.99];

// const smallestNumber = Math.min(...A);

// document.write(`smallest Number ${smallestNumber}`);



// 10. Write a program to print multiples of 5 ranging 1 to 
// 100

// for(let i=5; i <= 100; i += 5 ){
//   document.write(i+ '<br>');
// }
