


var userEmail 
var userPassword



// signup Values

var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var userName = document.getElementById('userName')
var email = document.getElementById('email')
var password = document.getElementById('password')
var cPassword = document.getElementById('cPassword')


// singup fucntion

function singuphandler(){
    
// checking if empty value

    if (firstName.value == '' ||
       lastName.value  == '' ||
       userName.value  == '' ||
       password.value  == '' ||
       cPassword.value == '' ||
       email.value     == ''  ) {
        return alert('fillup all fields')        
       }    
    // password Matching 
    if (password.value != cPassword.value) {
        return alert('password and confirm mismatched')
    }

    // checking if already user exist 

    if (email.value == userEmail){
        return alert('account already exist')
    } 

    
    
    


}