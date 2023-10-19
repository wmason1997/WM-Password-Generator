// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // window.prompt("You clicked me!");

  var user_desired_length = window.prompt("How long do you want your password to be? It needs to be at least 8 long and no more than 128 long.");

  if (user_desired_length >= 8 && user_desired_length <= 128){
    window.alert("Great"); }
  else {
    window.alert("Not quite! Try again!");
    return; // breaks out of pw generator
  }

  // Get lowercase characters boolean
  var special_include = window.confirm("Click OK to confirm including special characters");

  // Get numeric characters boolean
  var numeric_include = window.confirm("Click OK to confirm including numeric characters");

  // Get lowercase characters boolean
  var lowercase_include = window.confirm("Click OK to confirm including lowercase characters");

  // Get uppercase characters boolean
  var uppercase_include = window.confirm("Click OK to confirm including uppercase characters");

  // verifies that one character set was confirmed
  // 
  if (special_include || numeric_include || lowercase_include || uppercase_include) {
    window.alert("at least one was selected");
  } else {
    window.alert("None were selected :((( Try again ");
    return; // breaks out of pw generator
  }





  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // var user_desired_length = window.prompt("How long do you want your password to be? It needs to be at least 8 long and no more than 128 long.");
  // if (user_desired_length >= 8 && user_desired_length <= 128){
  //   window.alert("Great") }
  // else {
  //   window.alert("Not quite!")
  // }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
