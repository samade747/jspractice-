// chapter 9 -11 


// // 001

// document.write('<h2>Question1</h2>');
// var city = prompt('Enter the city name:');
// if (city.toLowerCase() === 'karachi') {
//     document.write('<h2>Welcome to city of lighs</h2>')
// }

// document.write('<br>');

// //002 

// let gender1 = prompt('Enter your gender:');
// if ( gender1.toLowerCase() === 'male'){
//     document.write('Good Morning Sir Ji');
// } else if (gender1.toLowerCase() === 'female'){
//     document.write('Good Morning Beautiful girl');
// }

// document.write('<br>');

// 003 

let color = prompt('Enter color of Traffic Signal (Red, Yellow, Green)');

if (color.toLowerCase() === 'red') {
    document.write('Must Stop');
} else if (color.toLowerCase() === 'yellow') {
    document.write('Get Ready to Move');
} else if (color.toLowerCase() === 'green' ) {
    document.write('GO Now');
} else { 
    document.write('Type Only Red, Green, or Yellow. Wrong input.');
}

document.write('<br>');