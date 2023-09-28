// indexof learning Array indexof method 

// var myFreindNames = ['samad', 'noman', 'abdulrauf', 'ahmed' ]


// finding index with name 'noman' and provide the search start index in numbers

// console.log(myFreindNames.indexOf('noman', 0));


// lasIndexOf
// var myFreindNames = ['samad', 'noman', 'abdulrauf', 'ahmed' ]

// // start from last 

// console.log(myFreindNames.lastIndexOf('noman',3));



//includes 

// var myFriendNames = ['samad', 'noman', 'abdulrauf', 'ahmed' ]

//if value is inculde its reply true & false
// determines whether the array contains a value
// returning true or false 
// no backward search, only forward search
// console.log(myFriendNames.includes('noman'));
// console.log(myFriendNames.includes('ahmed'));


// find method 

// Return the found element in the array, 
// if not found its shows undefined
// only problem is that its return only one element


const prices = [200, 300, 350, 400, 450, 500, 600];

// Question < 400
const findElem = prices.find((currVal){
    return currVal < 400;
});

console.log(findElem);



