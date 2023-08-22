
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


