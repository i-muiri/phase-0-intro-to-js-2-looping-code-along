// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
  //}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  //}

  //return gifts;
//}

//wrapGifts(gifts);

function writeCards(name, event)
{
    var thisarray = []; 
    for (let counter = 0; counter < name.length; counter++)
    {    
        thisarray.push(`Thank you, ${name[counter]}, for the wonderful ${event} gift!`);
    
    }
    return thisarray;
}

function countDown(num)
 {
    
    while (num >= 0)
    {
        console.log(num)
        num--;
    }
 }

