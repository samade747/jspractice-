
// intiazise  / condition check / increment decrement 
for(var i=1;  i<=10;               i++            ){
    document.write(2 + " x " +i+ "=" +2*i, "<br>")
}

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");




// with user input 

var userinp = +prompt("Enter Value")


// with user input // intiazise  / condition check / increment decrement 
for(var i=1;  i<=10;               i++            ){
    document.write(userinp + " x " +i+ "=" +userinp*i, "<br>")
}

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");



// with user input with 2 prompt 

var userinp = +prompt("Enter Value")
var userinp1 = +prompt("Enter Value")


// with user input // intiazise  / condition check / increment decrement 
for(var i=1;  i<=userinp1;               i++            ){
    document.write(userinp + " x " +i+ "=" +userinp*i, "<br>")
}


// for loop 
var userInp1 = prompt('Enter city name')
var arr = ['Karachi', 'lahore', 'islamabad', 'peshawar', 'quetta']
var match = false

for(var i=0; i < arr.length; i++){
    if(userInp1 == arr[i]){
      match = true
      alert('City found')
      break
    }
}

if(match == false){
    alert('city not found')
}



//Nested loop for 

var arr1 = ['Salman', 'Arbaz', 'Sohail']
var arr2 = ['saleem khan', 'asad']


for(var i=0; i<arr1.length; i++){

    for(var j=0; j<arr2.length; j++){
        document.write(arr1[i] + " " +arr2[j]+ "<br>")
    }
}


// nested  loop for 2 

for(var i=1; i<=100; i=i+10){

    for(var j=i; j < i+10; j++){
    document.write(j+" ")  
}
    document.write("<br>")
}


// arr index of 
var arr3 = ['saad', 'osama', 'taha', 'bilal']

document.write(arr3.indexOf('osama'))

document.write("<br>")

// check double names in index 


var arr4 = ['saad', 'osama', 'taha', 'bilal', 'saad']

document.write(arr4.indexOf('saad', 1)) 

document.write("<br>")

// last  index of (check double names in index )
document.write("<br>")

var arr4 = ['saad', 'osama', 'taha', 'bilal', 'saad']

document.write(arr4.lastIndexOf('saad'))


// Math Round percentage (round to 72)
var perc = 72.2 
document.write(Math.round(perc))

// Math Round ceil (round to 73)
var perc1 = 72.2 
document.write(Math.ceil(perc1))

// Math Round floor  (round to 72)
var perc12 = 72.9
document.write(Math.floor(perc12))

// Math.randam  
// if we give * 1 (otak uthayega )
// if we give * 2 (0 se 2 tak uthayega )
// if we give * 10 (o-9tak uthayega )
document.write(Math.random() * 10)


// Head tail Game 

var player1 = prompt('Enter Heads Name')
var player2 = prompt('Enter Tails Name')


var toss = Math.random() * 2
var ch = Math.floor(ch)

if(toss == 0){
    document.write(player1+ 'Head wins')
}
else{
    document.write(player2+ 'Tails wins')
}


// // infianite loop 

// // for(var i=1; i > 0; i++){
// //     document.write(i)
// // }

// // infianite loop 

// // var i = 1;
// // while (true) {
// //     // Your code here
// //     i++;
// //     console.log(i);
// // }



// to uppercase 

var city = 'karachi'
document.write(city.toUpperCase())

var city = 'kArRcHi'
document.write(city.toUpperCase())

var city = 'kArRcHi'
document.write(city.toLowerCase())

using user input how to do uppercaase lowercase 

var pro = prompt('Enter city Name');

var pro1 = pro.slice(0,1).toUpperCase()
var pro2 = pro.slice(1).toLowerCase()

var res = pro1 + pro2

document.write(res)

// if else 

if
 (x > y) {
  alert("Hello World");
} 
else
 {
  alert("Goodbye");
}