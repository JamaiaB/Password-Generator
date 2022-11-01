

var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specChar = ["@", "#", "$", "%", "^", "&", "*", "+", "?", "/", "~"];
var input = [];
var password = '';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var length = window.prompt("How many characters would you like to use?")

    // Password length 8-128 characters. Can include numbers, letters and special characters.
    if (length < 8 || length > 128) {
        window.alert("Password must be between 8 and 128 characters!");
        return;
    }
    // Create Prompts for password criteria
    var userLowCase = window.confirm("Would you like to include lower case characters?");
    var userUpperCase = window.confirm("Would you like to include upper case characters?");
    var userNum = window.confirm("Would you like to include numbers?");
    var userSpecChar = window.confirm("Would you like to include special characters?");

    if (userUpperCase) {
        input += upperCase;
    }

    if (userLowCase) {
        input += lowCase;
    }

    if (userNum) {
        input += num;
    }

    if (userSpecChar) {
        input += specChar;
    }
    // Confirm the use of uppercase, lowercase, numeric and/or special characters.
    if (!userUpperCase && !userLowCase && !userNum && !userSpecChar) {
        window.alert("Invalid! You must make at least one selection!")
        writePassword()
    }
    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * input.length);
        console.log("password;", password)
        console.log("input;", input)
        password += input[randomNumber];
    }
    return password

    
    // When prompts are answered correctly, I can generate a password. 
    //return generatePassword()
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

