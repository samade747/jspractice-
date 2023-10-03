// // indexof learning Array indexof method 

// // var myFreindNames = ['samad', 'noman', 'abdulrauf', 'ahmed' ]


// // finding index with name 'noman' and provide the search start index in numbers

// // console.log(myFreindNames.indexOf('noman', 0));


// // lasIndexOf
// // var myFreindNames = ['samad', 'noman', 'abdulrauf', 'ahmed' ]

// // // start from last 

// // console.log(myFreindNames.lastIndexOf('noman',3));



// //includes 

// // var myFriendNames = ['samad', 'noman', 'abdulrauf', 'ahmed' ]

// //if value is inculde its reply true & false
// // determines whether the array contains a value
// // returning true or false 
// // no backward search, only forward search
// // console.log(myFriendNames.includes('noman'));
// // console.log(myFriendNames.includes('ahmed'));


// // find method 

// // Return the found element in the array, 
// // if not found its shows undefined
// // only problem is that its return only one element


// // const prices = [200, 300, 350, 400, 450, 500, 600];

// // // Question < 400
// // const findElem = prices.find((currVal){
// //     return currVal < 400;
// // });

// // console.log(findElem);



// // filter Method 

// // Return a new array contain all elements we call calling 
// // provided filtering function for array returns true,
// // if condition has no value in it it returns an empty array

// // const prices = [200, 300, 350, 400, 450, 500, 600];


// // const newPricesTag = prices.filter(function(prices){
// //     // return prices > 400;
// //     return prices > 300;
// // })


// // document.write(newPricesTag);




// // Sort Method

// // sort the elements in Array 
// // return the sorted Array 
// // default order is ascending 
// // converting elements into string 


// // const months = ['March', 'Jan', 'Feb', 'Dec', 'Nov'];


// // const sorMonths = months.sort();

// // document.write(sorMonths);



// const lumber = [1, 130, 4, 21, 1000, 99];

// const lumber1 = lumber.sort();

// document.write(lumber1);




// // array 

// var ary = new Array(3);

// for(var g = 0; g < 3; g++){
//     ary[g] = prompt('enter the value: ');
// }


// // document.write('<li>'  + ary +'</li> <br>');

// // array pop 

// var a = ['samad', 'harron', 'kamil', 'samir'];
// document.write(a + '<br>')
// a.pop();
// document.write(a + '<br><br>');


// // array push

// a.push('samad1');

// document.write(a + '<br><br>');


// // array shift remove from start 

// a.shift();
// document.write(a + '<br><br>');



// /// array unshift add value in start 
// a.unshift('samad');
// document.write(a + '<br><br>');

// // array for Each 
// var c = {
//     name : 'samad', 
//     fname : 'hanif',
//     age : 25,
//     email : 'hell@ysamad.com'
// }

// Array indexOf function

// if start from min. value in start in start form backwards
// if word is not available return -1


// var a = ['samad', 'aman', 'eman', 'imranhasmi'];

// indexOf('Search item', start)
 


// Array includes function Method 

// search a value 
// it case senstive 


// var a = ['samad', 'aman', 'eman', 'imranhasmi'];
// document.write(a + '<br><br>');

// var b = a.includes('eman');
// document.write(b + '<br><br>')


// Array Some 
// some must be use with functioon 
// return true & false check the value if 1 single value is available it return true

// var ages = [10,13,18,20];
// document.write(ages + '<br><br>');

// var b = ages.some(checkAdult);
// document.write(b + '<br><br>');

// function checkAdult(age){
//     return age >= 18;
// }


// array every
// its return true fasle
// work with function
// must be all value true then its return true


// var ages = [100,19,25,20];
// document.write(ages + '<br><br>');

// var b = ages.every(checkAdult);
// document.write(b + '<br><br>');

// function checkAdult(age){
//     return age >= 18;
// }


// Array find Method 
// find method return value of the first 
// element in the array that pass a test
// which first value clear the test its return only first value 


// var ages = [10, 23, 19, 20];

// document.write(ages + '<br><br>');

// var b = ages.find(checkAdult);
// document.write(b + '<br><br>');

// function checkAdult(age){
//     return age >= 18;
// }

// array findIndex ***


// its  find Index 

// var ages = [10, 23, 19, 20];

// document.write(ages + '<br><br>');

// var b = ages.findIndex(checkAdult);
// document.write(b + '<br><br>');

// function checkAdult(age){
//     return age >= 18;
// }

// Array filter Method ***
// its return a  new array 
// whcih Condition is passed so return in new array 
 
// var ages = [10, 23, 19, 20];

// document.write(ages + '<br><br>');

// var b = ages.filter(checkAdult);
// document.write(b + '<br><br>');

// function checkAdult(age){
//     return age >= 18;
// }

// Array To string Function Method ***
// its convert the string method into array 


// var a = ['samad', 'micheal', 'salman', 'saad'];
// a.toString();

// document.write(a);

// Array valueof() function ***
//its print the array value 

// var a = ['samad', 'micheal', 'salman', 'saad'];
// a.valueOf();

// document.write(a);

// fill function *** 
// assing new array with name give value 

// var a = ['samad', 'micheal', 'salman', 'saad'];
// a.fill('samad');

// document.write(a);


// Array for Each 

// var a = ['samad', 'micheal', 'salman', 'saad'];

// a.forEach(function(value, index){
//     document.write(value + '<br>');
// });


// document.write(a);


// ******** Object ***********

// var a = {
//     // properties // value 
//     id: 1,
//     firstName : 'samad',
//     lastName : 'samad1',
//     Age: 18,
//     country: 'Paksitan',
//     favMovies : ['madnichannel', 'naat'],
//     living: {
//         'country' : 'Pakistan',
//         'city' : 'karachi'

//     },
//     salary: function(){
//         return 25000;   
// },
//     firstName : function(){
//         return this.firstName + " " + this.Age;
    
// }
// }


// console.log(a);
// document.write(a.firstName());
// document.write(a.salary());



// Object 
// declare a var = object , then adding the value 


// var person = new Object();

// person.firstName = 'samad';
// person.lastName = 'abvdul';
// person.age = 25;

// console.log(person);
// document.write(person['age']);


// Array of Objects 

// var student = [
//     {name: 'samad', age: 25},
//     {name: 'kamil', age: 25},
//     {name: 'harron', age: 555}
// ];

// console.log(student);

// for(var a = 0; a < student.length; a++){
//     document.write(student[a].name + ' ' + student[a].age + '<br>' );
// } 



// Date Object 

// newDate 

var now  = new Date();

document.write(now);

document.write(now.toDateString());


document.write(now.getFullYear());

document.write(now.getMonth());

document.write(now.getday());

document.write(now.());


