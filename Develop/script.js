// Assignment code here
// Clicking the generate button
var click;
// This will hold all the choices
var choices;
// Confirmation through prompts
var useNumbers
var useLower
var useUpper
var useSymbol

//The following will be access to the letters, numbers or symbols
//random lowercase from character code
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//random uppercase from character code
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//random number from character code
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// random symbol from character code
function randomSymbol() {
  let symbol = "!@#$%^&*()_-><[]}{";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function for generatePassword
function generatePassword() {
  //Confirms # of characters needed
  click = parseInt(prompt("How many characters?", "8-128"));
  if (!click) {
    alert("Input is needed");
    //Ensures the character count isn't too high or low
  } else if (click < 8 || click > 128) {
    click = parseInt(prompt("Answer must be between 8 and 128"));
  } else {
    //The proceeding few lines will confirm other variables
    useNumbers = confirm("Include numbers?");
    useLower = confirm("Include lowercase letters?");
    useUpper = confirm("Include uppercase letters?");
    useSymbol = confirm("Include special characters?");
  }

  //If all prompts are denied
  if (!useLower && !useUpper && !useNumbers && !useSymbol) {
    choices = alert("At least one option is needed");
    //If all prompts are accepted
  } else if (useLower && useUpper && useNumbers && useSymbol) {
    choices = randomLower().concat(randomUpper, randomNumber, randomSymbol);
    //the following 4 are for 3 criteria chosen
  } else if (useLower && useUpper && useNumbers) {
    choices = randomLower().concat(randomUpper, randomNumber);
  } else if (useLower && useUpper && useSymbol) {
    choices = randomLower().concat(randomUpper, randomSymbol);
  } else if (useUpper && useNumbers && useSymbol) {
    choices = randomUpper().concat(randomNumber, randomSymbol);
  } else if (useLower && useNumbers && useSymbol) {
    choices = randomLower().concat(randomNumber, randomSymbol);
    //the following are for 2 choices
  } else if (useLower && useUpper) {
    choices = randomLower().concat(randomUpper);
  } else if (useLower && useNumbers) {
    choices = randomLower().concat(randomNumber);
  } else if (useLower && useSymbol) {
    choices = randomLower().concat(randomSymbol);
  } else if (useUpper && useNumbers) {
    choices = randomUpper().concat(randomNumber);
  } else if (useUpper && useSymbol) {
    choices = randomUpper().concat(randomSymbol);
  } else if (useNumbers && useSymbol) {
    choices = randomNumber().concat(randomSymbol);
    //following are for single response
  } else if (useLower) {
    choices = randomLower();
  } else if (useUpper) {
    choices = randomUpper();
  } else if (useNumbers) {
    choices = randomNumber();
  } else {
    choices = randomSymbol();
  }
  //placeholder for an array for user choices
  var pWord = [];
  //for loop to randomize selection
  for (let i = 0; i < click; i++) {
    var selected = choices[Math.floor(Math.random() * choices.length)];
    pWord.push(selected);
  }

  //.join will take all choices in the array pWord and turns it into a string
  var pass = pWord.join("");
  UserInput(pass);
  return pass;
}
// This puts the new password into the textbox
function UserInput(pass) {
  document.getElementById("password").value = pass;
}
