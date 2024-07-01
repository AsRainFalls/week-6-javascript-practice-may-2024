let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
playerOne.control = prompt("do you prefer controllers or keyboard?")

  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name} Thank you for selecting ${playerOne.control}?`;

}

part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  customer.payment = prompt("will you be paying with credit or debit?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  

  
  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address} and your payment method is ${customer.payment}.`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};
pet.type = prompt("do you have a cat or a dog?")
pet.service = prompt("what is the reason for your visit?")
  // Try it!
  // TODO: create a prompt to ask about a pet
  messageParagraph.innerHTML = `Thank you, your ${pet.type} has been scheduled for ${pet.service}`}
  // Try it!
  // TODO: make a message based on the answers to the prompt.

}
part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  alert("hello!");
let game;
game = {}
game.type = prompt("what type of game are you playing?")
game.score = prompt("What is your score?")
messageParagraph.innerHTML = `${game.score} is a very nice score for ${game.type}!`}
  


part4.onclick = day1Part4;