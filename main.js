const userName = prompt('inserisci il tuo nome e cognome');

const userJourney = parseInt(prompt('inserisci i km da percorrere'));

const userAge = parseInt(prompt('inserisci la tua età'));

console.log(userAge, userJourney);

const pricePerkm = 0.21;

let ticketPrice = pricePerkm;

console.log(ticketPrice);

ticketPrice = ticketPrice * userJourney;

if (userAge < 18) {

    const discount = ((ticketPrice * 20) / 100);
    ticketPrice = ticketPrice - discount;

}

else if (userAge > 65) {

    const discount = ((ticketPrice * 40) / 100);
    ticketPrice = ticketPrice - discount;

}


document.getElementById('user-age').innerHTML = userAge;

document.getElementById('user-journey').innerHTML = userJourney;

document.getElementById('user-name').innerHTML = userName;