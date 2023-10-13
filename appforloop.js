
// // // intiazise  / condition check / increment decrement 
// for(var i=1;  i<=10;               i++            ){
//     document.write(2 + " x " +i+ "=" +2*i, "<br>")
// }

// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");




// // // with user input 

// var userinp = +prompt("Enter Value")


// // with user input // intiazise  / condition check / increment decrement 
// for(var i=1;  i<=10;               i++            ){
//     document.write(userinp + " x " +i+ "=" +userinp*i, "<br>")
// }

// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");



// // // with user input with 2 prompt 

// var userinp = +prompt("Enter Value")
// var userinp1 = +prompt("Enter Value")


// // with user input // intiazise  / condition check / increment decrement 
// for(var i=1;  i<=userinp1;               i++            ){
//     document.write(userinp + " x " +i+ "=" +userinp*i, "<br>")
// }


// // // for loop 
// var userInp1 = prompt('Enter city name')
// var arr = ['Karachi', 'lahore', 'islamabad', 'peshawar', 'quetta']
// var match = false

// for(var i=0; i < arr.length; i++){
//     if(userInp1 == arr[i]){
//       match = true
//       alert('City found')
//       break
//     }
// }

// if(match == false){
//     alert('city not found')
// }



// // //Nested loop for 

// var arr1 = ['Salman', 'Arbaz', 'Sohail']
// var arr2 = ['saleem khan', 'asad']


// for(var i=0; i<arr1.length; i++){

//     for(var j=0; j<arr2.length; j++){
//         document.write(arr1[i] + " " +arr2[j]+ "<br>")
//     }
// }


// // // nested  loop for 2 

// for(var i=1; i<=100; i=i+10){

//     for(var j=i; j < i+10; j++){
//     document.write(j+" ")  
// }
//     document.write("<br>")
// }


// // // arr index of 
// var arr3 = ['saad', 'osama', 'taha', 'bilal']

// document.write(arr3.indexOf('osama'))

// document.write("<br>")

// // // check double names in index 


// var arr4 = ['saad', 'osama', 'taha', 'bilal', 'saad']

// document.write(arr4.indexOf('saad', 1)) 

// document.write("<br>")

// // last  index of (check double names in index )
// document.write("<br>")

// var arr4 = ['saad', 'osama', 'taha', 'bilal', 'saad']

// document.write(arr4.lastIndexOf('saad'))


// // Math Round percentage (round to 72)
// var perc = 72.2 
// document.write(Math.round(perc))

// // Math Round ceil (round to 73)
// var perc1 = 72.2 
// document.write(Math.ceil(perc1))

// // Math Round floor  (round to 72)
// var perc12 = 72.9
// document.write(Math.floor(perc12))

// // Math.randam  
// //if we give * 1 //(otak uthayega )
// //if we give * 2 //(0 se 2 tak uthayega )
// //if we give * 10 //(o-9tak uthayega )
// document.write(Math.random() * 10)


// // Head tail Game 

// var player1 = prompt('Enter Heads Name')
// var player2 = prompt('Enter Tails Name')


// var toss = Math.random() * 2
// var ch = Math.floor(ch)

// if(toss == 0){
//     document.write(player1+ 'Head wins')
// }
// else{
//     document.write(player2+ 'Tails wins')
// }


// // // // infianite loop 
// //  for(var i=1; i > 0; i++){
// //      document.write(i)
// //  }

// // // // infianite loop 

// //  var i = 1;
// //  while (true) {
// //      // Your code here
// //      i++;
// //      console.log(i);
// // }



// // // to uppercase 

// var city = 'karachi'
// document.write(city.toUpperCase())

// var city = 'kArRcHi'
// document.write(city.toUpperCase())

// var city = 'kArRcHi'
// document.write(city.toLowerCase())

// // using user input how to do uppercaase lowercase 

// var pro = prompt('Enter city Name');

// var pro1 = pro.slice(0,1).toUpperCase()
// var pro2 = pro.slice(1).toLowerCase()

// var res = pro1 + pro2

// document.write(res)

// //if else 

// if
//  (x > y) {
//   alert("Hello World ");
// } 
// else
//  {
//   alert("Goodbye");
  
// }


// // creating a function & Calling in via loop 

// function abc(){
//     alert('Hello World')
// }
// // its runs with above function 

// for(var i=0; i<=10; i++){
//     abc()
// }


// // function will default value, function calling by user & also if not default value is given 
// function sum(a=2,b=2,c=2){
//     var t = +prompt('Enter value 1')
//     var t1 = +prompt('Enter value 2')
//     var t2 = +prompt('Enter value 3')
//     if(t == '' && t1 == '' && t2 == ''){
//         return a + b + c 
//     }
//     else{
//         return t + t1 + t2
//     }
// }

// alert(sum())


// function sum(f=2,h=5,q=3){
//     var wah = +prompt('Enter value 1')
//     var wah1 = +prompt('Enter value 2')
//     var wah2 = +prompt('Enter value 3')
//     if(wah == '' && wah2 == '' && wah2 == ''){
//         return f + h + q;
//     }
// else{
//     return wah + wah1 + wah2
// }
// }
// alert(sum())


// //function we define the value in line 224
// //function using as user input in line 225

// alert(sum(10,10,10))
// alert(sum())

// var a = +prompt('Enter value 1')
// var b = +prompt('Enter value 2')
// var c = +prompt('Enter value 3')

// alert(sum(a, b, c))





// // chapter documnet Object model DOM

// //creating function & function name "abc" is called by id in html
// function abc(){
// // getting the data from html given id 
// document.getElementById('ttt').innerHTML = 'hello world'
// // hidden the ReadMore Button
// document.getElementById('anc').style.display = 'none'
// }

// // creating Calcualator

// function dabaya(e){

//     var inputField = document.getElementById('inp');
//     inputField.value += e;
// }

// function eq(){  
//     var a = document.getElementById('inp')
//     a.value =eval(a.value)
// }

// function calculatePercentage() {
//     var inputField = document.getElementById('inp');
//     var expression = inputField.value;
//     var result = eval(expression) / 100;
//     inputField.value = result;
// }


// // call back function anoanymus function
// setInterval(function(){
//     document.write('hello world')
// },1000)


// // creating stopwatch 

// // set interval = call back function time dete ho, let 2s ke badh bar bar chale ga, chalta hi rehta hai qayamat tak

// setInterval(function(){
//     document.write('hello world')

// },1000)

// // print conunting with 1 2 3 4 5 .... 10 ..11..100 
// var num = 0
// setInterval(function(){
//     num++
//     document.write(num + "<br>")
// },1000)

    



// // set timeout = time dete ho, let 2s ke badh 1 bar chalga 5 sec ke badh chalna hai 

// setTimeout(function(){
//     document.write('abcd')
// },4000)



//clear Interval = time ko rokoh, ke set interval walo ko 



// clear timeout = time ko rokoh, ke set time wale ko 




// creating stopSwitch

// var minutes = 0 
// var seconds = 0
// var miliseconds = 0
// var getmin = document.getElementById('min')
// var getsec = document.getElementById('sec')
// var getmili = document.getElementById('msec')
// var interval;


// function start(){
//     interval = setInterval(function(){
//         miliseconds++
//         getmili.innerHTML = miliseconds
//         if(miliseconds >= 100){
//             seconds++
//             getsec.innerHTML = seconds
//             miliseconds = 0
//         }
//         else if(seconds >= 60){
//             minutes++
//             getmin.innerHTML = minutes
//             seconds = 0
//         }
    
//     },100)
//     document.getElementById('sss').disabled = true
    
// }

// function stop(){
//     clearInterval(interval)
//     document.getElementById('sss').disabled = false

// }

// function reset(){
//     minutes = 0
//     miliseconds = 0
//     seconds = 0
//     getmin.innerHTML = minutes
//     getsec.innerHTML = seconds
//     getmili.innerHTML = miliseconds
// }

 


// crued
// create read update edit delete 

// creating To Do App 

// // getAttribute
// function foo(){ 
//     var a = document.getElementById('inp')
//     var b = a.getAttribute('name')
//     console.log(b)
// }

// // has attribute
// function foo(){ 
//     var a = document.getElementById('inp')
//     var b = a.hasAttribute('class')
//     console.log(b)
// }


// // set attribute // agar nai hai toh lga do 
// function foo(){ 
//     var a = document.getElementById('inp1')
//     var b = a.setAttribute('class','aaa')
//     console.log(b)
// } 


// creating To Do App 



// var getul = document.getElementById('ul')

// function foo1(){
//     var ca = document.getElementById('inp2')
//     var li = document.createElement('li')
//     var litext= document.createTextNode(ca.value)
//     li.appendChild(litext)
//     getul.appendChild(li)
//     ca.value = ''
//     var deletebtn = document.createElement('button');
//     var deletebtnText = document.createTextNode("Delete");
//     deletebtn.appendChild(deletebtnText);
//     li.appendChild(deletebtn);
//     deletebtn.setAttribute('onclick', 'del(this.parentNode)');
// }

// function deleteall(){
//     getul.innerHTML = ''
// }
 

// function del(node){
//    node.remove()

// }






// var total =  (2 + 3) * 4;
// console.log(total) 

  


// var a = 4;
// var b = 3;

// var c = a++ - b-- + --a +a++;
//        // 4 - 3 +  4 + 4  
// console.log(c)


// array for loop for search method

// var text = 'my name is samad';
// var isSamadPresent = false;


// for (var i =0; i < text.length; i++){
//     if(text.slice(i, i+5) === 'samad') {
//         isSamadPresent = true;
//         break;
//     }
// }

// document.write(isSamadPresent);


// touppercase tolowercase

// let fullName = 'samAaaAAAAAAAAAAAd';
// let firstChar = fullName.slice(0, 1).toUpperCase();
// let nextChars = fullName.slice(1).toLowerCase();
// let result = firstChar + nextChars;
// document.write(result);

// slice copy (index, length)
// charAt find single value 
// indexof('s') find full word & single word
// replace want to 2 value (1st word want to change,2nd word want to add)
// math.round (0-4 tak hai toh 5-9 tak hoga toh round if 2.5 )
// math.ceil (if we have 2.1 to up le jaye g)
// math.floor(2.9 hai toh niche le kar jaye g)

// genetating random numbers 
// Math.random range 0-1 
// let randam = Math.floor(Math.random() * 10) ;
// console.log(randam);

// convert the string into number
// parseInt(prompt)
// number(prompt)
// +(prompt)


// number to string
// var number = 22521
// console.log(num.toString);


//controlling length  with .tofixed & change it to string
// console.log(num.toFixed());

let date = new Date();

document.write(date.getDay()+'<br>');

document.write(date.toString().slice(0, 24));












