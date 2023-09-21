

// chapter Object 

// // for in loop for object

// var obj = {
//     s_id : '01',
//     s_name : 'samad ',
//     s_age : 33,
//     s_roll : 'CSC-20s=088',
//     s_depart : 'cs'
// }



// for(var key in obj){
//     document.write(key, ' : ', obj[key], "<br>");
// } 

function signup(){
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('Email',email)
    localStorage.setItem('password',pass)
    location.href = './signIn.html'
}

function signin(){
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    if(localStorage.getItem('Email') == email && localStorage.getItem('password') == pass){
        location.href = './welcome.html'
    }
    else{
    alert('invalid user name password  ..');
    location.href = './signup.html'
    }
}


 

// // date
 
// var date = new Date();
// var convert = date.toString();
// var copy = convert.slice(16,24);
// document.write(copy +  '<br>');

// // 
// var date = new Date ()
// var getday = date.getDay()
// document.write(getday + '<br>')