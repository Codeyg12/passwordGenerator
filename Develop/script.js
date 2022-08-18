// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function for generatePassword
function generatePassword() {
  //Confirms # of characters needed
  let click = parseInt(prompt("How many characters?", "8-128"));
  let choices = [];
  if (!click) {
    alert("Input is needed");
    //Ensures the character count isn't too high or low
  } else if (click < 8 || click > 128) {
    click = parseInt(prompt("Answer must be between 8 and 128"));
  } else {
    //The proceeding few lines will confirm other variables
    if (confirm("Include numbers?")) {
      choices.push(randomNumber);
    }
    if (confirm("Include lowercase letters?")) {
      choices.push(randomLower);
    }
    if (confirm("Include uppercase letters?")) {
      choices.push(randomUpper);
    }
    if (confirm("Include special characters?")) {
      choices.push(randomSymbol);

    }
  }
  //If all prompts are denied
  if (choices.length == 0) {
    alert("At least one option is needed");
    return;
  }

  //placeholder for an array for user choices
  var pWord = [];
  //for loop to randomize selection
  for (let i = 0; i < click; i++) {
    let selected = choices[Math.floor(Math.random() * choices.length)];
    pWord.push(selected());
    // pWord.push(selected); WHY NO WORK
  }

  //.join will take all choices in the array pWord and turns it into a string
  var pass = pWord.join("");
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//The following will be access to the letters, numbers or symbols
//random lowercase from character code
function randomLower() {
  // var randomLower = function()
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//random uppercase from character code
function randomUpper() {
  // var randomUpper = function()
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//random number from character code
function randomNumber() {
  // var randomNumber = function()
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// random symbol from character code
function randomSymbol() {
  // var randomSymbol = function()
  let symbol = "!@#$%^&*()_-><[]}{";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

