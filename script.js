// Assignment Code
function generatePassword() {

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numberic = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialchar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", 
  "}", "|", "~"];

  var passwordfinal = [];


  passwordlength = prompt("Choose a password length between 8 and 128 characters.");
  if (passwordlength < 8 || passwordlength > 128) {
    return "Choose a number between 8 and 128 characters.";
  } 
  else {
    alert("Your password will be " + passwordlength + " characters long.");
  }

  lowercasequestion = confirm("Do you want your password to include lowercase letters?");

  uppercasecasequestion = confirm("Do you want your password to include uppercase letters?");

  numbericquestion = confirm("Do you want your password to include numbers?");

  specialcharquestion = confirm("Do you want your password to include special characters?");

  if (lowercasequestion === false && uppercasecasequestion === false && numbericquestion === false && specialcharquestion === false) {
  return "Select at least one character type.";
  };


  if (lowercasequestion) {
      passwordfinal = passwordfinal.concat(lowercase);
  }
  if (uppercasequestion) {
    passwordfinal = passwordfinal.concat(uppercase);
  }
  if (numbericquestion) {
    passwordfinal = passwordfinal.concat(numberic);
  }
  if (specialcharquestion) {
    passwordfinal = passwordfinal.concat(specialchar);
  }

  
  let completepassword = ""
  for (let i = 0; i < passwordlength; i++) {
    let rng = [Math.floor(Math.random() * passwordfinal.length)];
    completepassword += passwordfinal[rng];
  }
  return completepassword;
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






