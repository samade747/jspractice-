
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

// new date
// let date = new Date();

// // new date se get day its shows as index number 
// document.write(date.getDay()+'<br>');

// // date ko string mai convert then slice se 0 se 24 tak show karwaiya hai
// document.write(date.toString().slice(0, 24));

// Method            // get               // Range    
// getDay()          // days of week       // 0-6           0 is sunday 
// getMonth()        // month               //0-11          0 is january 
// getDate()         // days of month       //  1-31        1 is 1st of month
// getFullYear()     // year                //              2015
// getHours()       // hour                 //  0-23        0 is midnight 12 is noon 23is 11pm
// getMinutes       // minute               //  0-59
// getMiliseconds()  // milisecond          // 0-999
// getTime()          // miliseconds since midnight jan 1, 1970       


// let firstRamdan = new Date('12 March 2024');
// let today = new Date();

// let diff = firstRamdan.getTime() - today.getTime();
// // answer in miliseconds
// //       secondskeliye 1000         
// let days = diff / (1000*60*60*24);
// let month = diff / (1000*60*60*24*30);
// let year = diff / (1000*60*60*24*30*365);
// document.write(Math.round(days)+ ' days <br><br>');
// document.write(Math.round(month)+ ' months <br><br>');
// document.write(Math.round(year)+ ' year <br><br>');



// chapter 32 revision completed 

// pending till 40 


// function submitForm(){
//     let name = document.getElementById('Name');
//     let email = document.getElementById('email');

//     if(name.value && email.value) {
//         console.log('name-->',  name.value);
//         console.log('email-->', email.value);
//         name.value = '';
//         email.value = '';        
//     } else {
//         console.log('please enter value');
//     }
// }


// // // switch Case 

// // let date = new Date();

// // let day = date.toString().slice(0, 3)

// // // document.write(day)

// // day = day;

// // switch(day){
// //     case 'mon':
// //         document.write(`today is ${day}`)
// //     break;
// //     case 'tue':
// //         document.write(`today is ${day}`)
// //     break;
// //     case 'wed':
// //         document.write(`today is ${day}`)
// //     break;
// //     case 'thu':
// //         document.write(`today is ${day}`)
// //     break;
// //     case 'fri':
// //         document.write(`today is ${day}`)
// //     break;
// //     case 'Sat':
// //         document.write(`today is ${day}`)
// //     break;
// //     case 'Sun':
// //         document.write(`today is ${day}`)
// //     break;
// // default:
// //     document.write(`invalid ${day}`)
// // }   


// //creating 2 functions & getting data by 2 function

// function foo(){
//     var obj = {
//         name: 'saad',
//         age:  24
//     }

//     doo(obj)
// }


// function doo(e){
//     console.log(e)
// }

// // foo()

// // for each array 
// // for in object 
// // map 

// var data = [12, 3, 234, 25, 12]
// var b = data.filter(function(data){
//     return data > 200
// }) 

// document.write(b +'<br>')



// var data = [12, 3, 200, 335, 25, 12, 100]
// var b = data.filter(function(e){
//     return e >= 100
// }) 

// document.write(b +'<br>')


// // for each method 
// // its dosent return anything 
// // it didnt create new array 
// // 

// var tayyaba = ['samad', 'saad', 'kamil', 'harron']

// tayyaba.forEach(function(e){
//     document.write(e, '<br>')
// })

// // reverse method on above method

// var dabaya = tayyaba.reverse()

// console.log(dabaya)

// // map method 
// // it dosent modify the original array 
// // its create a new array 
// // its returns a new array contain the modified elements

// var sabdabaya = tayyaba.map(function(e){
//     document.write(e )
// })
   

// a function with for in loop 

// function foo(a, b, ...rest){
//     let num = 0

//     for(let key in rest){
//         num += rest[key]
//     }

//     return (a +  b + num)

// }


// document.write(foo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// const arr = ['samad', 'kamil', 'haroon']

// arr[0] = 'samad1'

// document.write(arr);



// ... function // rest operator

// ...  // obj , arr, arr of object // spread operator // copy karnah


// // spread Operator 
// let arr = [1, 2, 3, 24, 44, 66543, 3, 0, 505,]
// let arr2 = [7, 1321, 12321, 32121, 312213231, 0]

// let arr3 = [...arr, ...arr2]

// // arr + arr2 copied by spread operator
// document.write(`${arr3} <br><br>`)


// // & above code without (  comma , )
// document.write(...(arr3))
// document.write('<br><br><br><br>')


// // spread Operator On Object

// let obj = {
//     first : '1',
//     second : '2',
//     end : '3'
// }

// let obj2 = {
//     ...obj,
//     lname: 'samad bhai'

// }


// console.log(obj2)

// housting 
// apply on variable 
// function 

//Calling function & below created 
// abc()

// function abc(){
//     console.log('hello')
// }


// // function expression 
// // Escript 6 
// let foo = function(){
//     console.log('samad')
// }

//ES6 FUNCTION 
// ARROW FUNCTION
// let abc = (a) =>{
//     document.write(a)
// }

// abc('samad')

// let abc = (a, b) =>{
//     document.write(a, b)
// }

// abc(`samad', 'kamil`)

// let eq = (a,b,c) => a + b - c
// document.write(eq(1,2,5))

// var a =5 
// if(a == 5){
//     console.log('han Ok')
// } else{
//     console.log('Not Ok')
// }


// var a = (5 == 5 ? 'han Ok' : 'nikal')

// Api 
// json format, javascript object notation 
// loader chalne ke badh data agye toh reslove chale ga after loading
// loader chalne ke badh data na aye toh rejet chale ga

// callback function
// function ke andar parameter ki surat mai 1 aur function pass hojata hai 

// arrow function  
//                   (parameter)// (reslove or reject) (res, rej)
// let pro = new Promise((resolve, reject) => {
//     let kilwao = 'zinger kilaooo'
//     if(kilwao == 'zinger kilaooo'){
//         resolve('han bahi theek hai')
//     } else {
//         reject('nikal bhai')
//     }
// })
// // promise ka respone ata hai 2 surato mai
// // .done if fulfiled chalte hain
// // .catch if rejected chalte hain


// // pro ka data //. then is a call back function //(parameter)
// pro.then((data) => {
//     console.log(data)
// // catch is a call back function
// // is promise not fullfiled error show
// }).catch((err) => {
//     console.log(err)
// })




// // new promise reslove reject 

// let pro1 = new Promise((reslove, reject) =>{
//     let worldCup = 'Pakistan'
//     if(worldCup == 'Pakistan'){
//         reslove('jeet gaya')
//     } else {
//         reject('haar gaya')
//     }
// })

// // then is a call back function
// pro1.then(data => console.log(data) )
// .catch(error => console.log(error))




// Destructing in javascript
// array & object par chalega 
// const abc1 = ['abc', 'def', 'lkm', 'pqrs', 'xyz']

// const [a,b,c,d,e] = abc 

// console.log(c)


// const obj = {
//     abc : 'ABCD',
//     ddd : 'zzjjh',
//     yyzy: 'addasda',
//     iloi: 'dassadas'
// }


// const {abc, ddd, yyzy, iloi} = obj

// console.log(abc, ddd, yyzy, iloi)

//api 

// fetch('https://jsonplaceholder.typicode.com/posts')
// // converting object into json format array of object 
// .then(data => data.json())


// // getting full data 
// .then(data => console.log(data))

// // if error 
// .catch(err => console.log(err))


// another 
fetch('https://jsonplaceholder.typicode.com/posts')
// converting object into json format array of object 
.then(data => data.json())


// getting data of 0 index ka title 
.then(data => console.log(data[0].title))

// if error 
.catch(err => console.log(err))
