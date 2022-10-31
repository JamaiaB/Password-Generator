// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passLength = 8;


  passwordText.value = password;

}

for (var i = 0; i <= passLength; i++){
    var randomnumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
}
// Create Prompts [window.prompt]for password criteria

// Password length 8-128 characters. Can include numbers, letters and special characters.
// Confirm the use of uppercase, lowercase, numeric and/or special characters.
// When prompts are answered correctly, I can generate a password. 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
