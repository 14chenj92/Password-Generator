var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
function generatePassword() {
  // types of arrays to include in password criteria
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numberic = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialchar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", 
  "}", "|", "~"];

  var passwordfinal = [];

    // prompt to determine length of the password generated
    passwordlength = prompt("Choose a password length between 8 and 128 characters.");
    if (passwordlength < 8 || passwordlength > 128) {
    return "Choose a number between 8 and 128 characters.";
    } 

  lowercasequestion = confirm("Do you want your password to include lowercase letters?");

  uppercasequestion = confirm("Do you want your password to include uppercase letters?");

  numbericquestion = confirm("Do you want your password to include numbers?");

  specialcharquestion = confirm("Do you want your password to include special characters?");

  // password must have at least 1 array of criteria
  if (lowercasequestion === false && uppercasecasequestion === false && numbericquestion === false && specialcharquestion === false) {
  return "Select at least one character type.";
  };

  // clicking yes to confirm adds the corresponding array to the passwordfinal array
  if (lowercasequestion === true) {
    passwordfinal = passwordfinal.concat(lowercase);
  }
  if (uppercasequestion === true) {
    passwordfinal = passwordfinal.concat(uppercase);
  }
  if (numbericquestion === true) {
    passwordfinal = passwordfinal.concat(numberic);
  }
  if (specialcharquestion === true) {
    passwordfinal = passwordfinal.concat(specialchar);
  }

  // completepassword will be a string
  let completepassword = "";
  // this loop will take the password criteria selected and generate a completepassword based on the confirm selection
  for (let i = 0; i < passwordlength; i++) {
    let total = [Math.floor(Math.random() * passwordfinal.length)];
    completepassword += passwordfinal[total];
  }
  return completepassword;
};








