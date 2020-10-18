// creating numerical, alphabetical and special characters variable arrays
var generateBtn = document.querySelector("#generate");
var characters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// creating function to generate random charachters and input field for user to decide password lenght
function generatePassword(generatedPwd) {
  var pwd_lenght = parseInt(prompt("how many charatecters do you want in your password?"));  
  for (var i = 0; i < pwd_lenght; i++) {
    var random_characters = Math.floor(Math.random() * characters.length);
    generatedPwd += characters.charAt(random_characters)
    }
  return generatedPwd
}

// Write password to the #password input
function writePassword() {
  var generatedPwd = "";
  var password = generatePassword(generatedPwd);
  // var password = random;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
