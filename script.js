// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate random password
function generatePassword() {

  // Length of the password
  var userlength = Number(prompt("How long should the password be? Enter a number between 8-125."));

  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*()_+-=[]|,./?><";
  let password = "";

  for(var i = 0; i < userlength; i++){
    password = password + values.charAt(Math.floor(Math.random()*Math.floor(values.length - 1)));
  }
  document.querySelector("#password").textContent = password;

  passwordText.value = password;


 
/*
  // Ask what special characters will be used
  var charactertypeLower = prompt("Would you like LOWERCASE characters? (YES or NO)");
  var charactertypeUpper = prompt("Would you like UPPERCASE characters? (YES or NO)");
  var charactertypeNum = prompt("Would you like NUMBER characters? (YES or NO)");
  var charactertypeSpe = prompt("Would you like SPECIAL characters? (YES or NO)");

  var setofCharacters = "";

  
  if (charactertypeLower.toLowerCase === "yes"){
    var setofcharLower = "abcdefghijklmnopqrstuvwxyz";
    setofCharacters.concat(setofcharLower);
  } else {
    setofcharLower = "";
  }

  if (charactertypeUpper.toLowerCase === "yes"){
    var setofcharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    setofcharUpper = "";
  }

  if (charactertypeNum.toLowerCase === "yes"){
    setofcharNum = "0123456789";
  } else {
    setofcharNum = "";
  }

  if (charactertypeSpe.toLowerCase === "yes"){
    setofcharSpe = "!@#$%&*()_+-=[]|,./?><";
  } else {
    setofcharSpe = "";
  }

  //var setofCharacters = setofcharLower//.concat(setofcharUpper, setofcharNum, setofcharSpe);
  var password = "";

  // for loop to iterate over our array equal to the length of our password
  for(var i = 0; i <= userlength; i++){
    var randomIndex = Math.floor(Math.random()*setofCharacters.length);
    password = password.concat(setofCharacters[randomChar]);
  }
  password = password.join('');
  */
}
/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
*/
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
