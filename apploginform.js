


var userEmail = "samad.e747@gmail.com";
var userPassword = "12345678";



// signup Values

var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var userName = document.getElementById('userName')
var email = document.getElementById('email')
var password = document.getElementById('password')
var cpassword = document.getElementById('cpassword')


// singup fucntion

function singuphandler() {
    
// checking if empty value

    if (firstName.value == '' ||
       lastName.value  == '' ||
       userName.value  == '' ||
       password.value  == '' ||
       cpassword.value == '' ||
       email.value     == ''
       ) {
        alert('Please fill in all fields');
        return;
       }    
    // password Matching 
    if (password.value !== cpassword.value) {
        alert('Password and confirm password do not match.');
        return;
    }

    // Email validation using a regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
       alert('Invalid email address.');
       return;
    }

    // passowrd length minimum
    if (password.value.length < 8) {
        alert('password minimum 8 characters long');
        return;
    }

    // Assuming you want to redirect only if signup is successful

    alert('user sign up succesfullly');
    window.location.href = './login.html';  
}


// loginvalues 
const loginEmail = document.getElementById('loginemail')
const loginPassword = document.getElementById('loginpassword')


function loginhandler(){
    
}