let flightNumber = document.getElementById('flightNumber');
let NumberPassenger = document.getElementById('NumberPassenger');
let price = document.getElementById('price');

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
    const booking = {
    flightNum,
    numPassengers,
    price,
    };
    console.log(booking);
    bookings.push(booking);
}




createBooking('LH123', '300', 190000);