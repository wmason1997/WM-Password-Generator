// Assignment Code
var generateBtn = document.querySelector("#generate");
var numeric_set = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase_set = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase_set = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var special_set = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ']', '\^', '_', "`", "{", "|", "}", "~"];

var selected_subset = []; // predefining the set that will have 1-4 sets later

var password_to_be_returned = '';

// var usable_set_1 = [];

function generatePassword() {
  console.log('clicked');
}


// Write password to the #password input
function writePassword() {
window.alert("You clicked me!"); // update later

  var user_desired_length = window.prompt("How long do you want your password to be? It needs to be at least 8 long and no more than 128 long.");

  if (user_desired_length >= 8 && user_desired_length <= 128){
    window.alert("Great"); }
  else if (user_desired_length < 8){
    window.alert("Your password needs to be at least 8 characters long. Try again.");
    return; }
  else if (user_desired_length > 128){
    window.alert("Your password needs to be no more than 128 characters long. Try again");
    return; }
  else {
    window.alert("Your input was not numeric. Try again.")
    return;
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

    if (numeric_include) {selected_subset = selected_subset.concat(numeric_set);}
    if (uppercase_include) {selected_subset = selected_subset.concat(uppercase_set);}
    if (lowercase_include) {selected_subset = selected_subset.concat(lowercase_set);}
    // if (special_include) {selected_subset = selected_subset.concat(special_set);} // will add later on once you get special chars working

    // gotta add the one minimum per selected set hard code

    for(let i = 0; i < user_desired_length; i++) { // could make it i < user_desired_length - sum of bools of the four sets

      // gotta add the one minimum per selected set hard code


      var added_char_index = Math.floor(Math.random() * selected_subset.length);
      password_to_be_returned += selected_subset[added_char_index];
    }

    window.alert(
      "The generated password is: " + password_to_be_returned
    ); 

  } else {
    window.alert("None were selected :((( Try again ");
    return; // breaks out of pw generator
  }

  

  
// var usable_set = [];

// add concat code

// add for loop with rand number generator

// add password output







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
