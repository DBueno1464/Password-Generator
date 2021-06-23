// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate random password
function generatePassword() {

  // Length of the password
  var userlength = Number(prompt("How long should the password be? Enter a number between 8-125."));

  // User criteria
  var lower = prompt("Would you like top include LOWERCASE characters? (YES or NO)");
  //var upper = prompt("Would you like top include UPPERCASE characters? (YES or NO)");
  //var num = prompt("Would you like top include NUMERIC characters? (YES or NO)");
  //var special = prompt("Would you like top include SPECIAL characters? (YES or NO)");

  // determine which criteria to apply

  lowerChar = "qwertyuiopasdfghjklzxcvbnm";
  upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM";
  numChar = "0123456789";
  specialChar = "!@#$%^&*(){}[]=<>/,.";

  let usableChar = "";
  
  if (lower.toLowerCase == "yes"){
      usableChar.concat(lowerChar);
  }
  console.log(usableChar);

  /*if (upper.toLowerCase === "yes"){
    usableChar = usableChar.concat(upperChar);
  }

  if (num.toLowerCase === "yes"){
    usableChar = usableChar.concat(numChar);
  }

  if (special.toLowerCase === "yes"){
    usableChar = usableChar.concat(specialChar);
  }
*/
  var usableLength = usableChar.length;
  let password = "";

  for(var i = 0; i < userlength; i++){
    password = password + usableChar.charAt(Math.floor(Math.random()*Math.floor(usableLength - 1)));
  }

  document.querySelector("#password").textContent = password;
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
