let flightNumberInput = document.getElementById('flightNumber');
let NumberPassengerInput = document.getElementById('NumberPassenger');
let priceInput = document.getElementById('price');
let outputContainer = document.getElementById('output-container');

const bookings = [];

function BookingHandler(){
    const flightNumber = flightNumberInput.value;
    const numPassengers = Number(NumberPassengerInput.value);
    const bookingPrice = Number(priceInput.value);

    createBooking(flightNumber, numPassengers, bookingPrice);
}


const createBooking = function (flightNum, numPassengers = 1, price = 199) {
    const booking = {
    flightNum,
    numPassengers,
    price,
    };
    console.log(booking);
    bookings.push(booking);

    updateOutput();
}


function updateOutput(){
    outputContainer.innerHTML = '';

bookings.forEach((booking, index) =>{
    const outputDiv = document.createElement('div');
    outputDiv.textContent = `Booking ${index + 1}: Flight ${booking.flightNum}, Passengers ${booking.numPassengers}, Price${booking.price}`;
    outputContainer.appendChild(outputDiv);
});

}

 