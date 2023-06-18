// Code your solutions in this file
const names = ['Guadalupe','Ollie','Aki'];
const eventHeld = "Birthday";
function writeCards (names,eventHeld){
    let personalCards = [];
    for (let i=0; i < names.length; i++){
      // let message= `Thank you, ${names[i]}, for the wonderful ${eventHeld} gift!`;
       personalCards.push(`Thank you, ${names[i]}, for the wonderful ${eventHeld} gift!`)
        
    }
    return personalCards;
}
console.log(writeCards(names, eventHeld));

function countDown(positiveNumber){
    let numCountdown = 11;
    while (numCountdown --){
        console.log(numCountdown)
    }
}
