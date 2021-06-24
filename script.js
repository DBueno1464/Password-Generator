// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate random password
function generatePassword() {

  // Length of the password
  var userlength = Number(prompt("How long should the password be? Enter a number between 8-125."));

  if (userlength < 8){
    alert("Please don't input less than 8, I have a quota to meet. :)");
    return;
  } else if (userlength > 128){
    alert("Are you insane?!?! Paper is not cheap! Please input a number less than 128. Sheesh...");
    return;
  }

  // User criteria
  var lower = confirm("Would you like top include LOWERCASE characters? (YES or NO)");
  var upper = confirm("Would you like top include UPPERCASE characters? (YES or NO)");
  var num = confirm("Would you like top include NUMERIC characters? (YES or NO)");
  var special = confirm("Would you like top include SPECIAL characters? (YES or NO)");

  // determine which criteria to apply

  lowerChar = "qwertyuiopasdfghjklzxcvbnm";
  upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM";
  numChar = "0123456789";
  specialChar = "!@#$%^&*(){}[]=<>/,.";

  let usableChar = "";
  
  if (lower === true){
    usableChar += lowerChar;
  }

  if (upper === true){
    usableChar += upperChar;
  }

  if (num === true){
    usableChar += numChar;
  }

  if (special === true){
    usableChar += specialChar;
  }

  if (lower){
   }else if (upper){
   }else if (num){
   }else if (special){
   }else { alert(":( You need to choose at least one criteria :(")
    return;}

  var usableLength = usableChar.length;
  let password = "";

  for(var i = 0; i < userlength; i++){
    password = password + usableChar.charAt(Math.floor(Math.random()*Math.floor(usableLength - 1)));
  }

  document.querySelector("#password").textContent = password;
}

generateBtn.addEventListener("click", generatePassword);
