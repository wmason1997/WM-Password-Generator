Assignment Code
var generateBtn = document.querySelector("#generate");

// Created global variables that do not need to be reset each time the button is pressed.
var numeric_set = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase_set = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase_set = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special_set = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]; // added escape characters, a \,  for " and \


// console.log(+ true);
// var bool_no = false;
// var bool_yes = true;
// console.log(+bool_no)
// console.log(+true + +bool_yes) // hooray this is what we needed


// var usable_set_1 = [];

function generatePassword() {
  console.log('clicked');
}


// Write password to the #password input
function writePassword() {
window.alert("You clicked me!"); // update later

  var password_to_be_returned = ''; // had to move inside function so that a new empty password string is initialized every time
  var selected_subset = []; // predefining the set that will have 1-4 sets later
  // similarly had to move inside function so that it would be reset to empty every time button is clicked


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
    if (special_include) {selected_subset = selected_subset.concat(special_set);} // will add later on once you get special chars working

    // gotta add the one minimum per selected set hard code
    // lowercase character inclusion hardcode
    if (lowercase_include) {
      var lowercase_hardcode_index = Math.floor(Math.random() * lowercase_set.length);
      password_to_be_returned += lowercase_set[lowercase_hardcode_index];
    }

    // uppercase character inclusion hardcode
    if (uppercase_include) {
      var uppercase_hardcode_index = Math.floor(Math.random() * uppercase_set.length);
      password_to_be_returned += uppercase_set[uppercase_hardcode_index];
    }

    // numeric character inclusion hardcode
    if (numeric_include) {
      var numeric_hardcode_index = Math.floor(Math.random() * numeric_set.length);
      password_to_be_returned += numeric_set[numeric_hardcode_index];
    }

    // special character inclusion hardcode
    if (special_include) {
      var special_hardcode_index = Math.floor(Math.random() * special_set.length);
      password_to_be_returned += special_set[special_hardcode_index];
    }

    for(let i = 0; i < user_desired_length - (+numeric_include + +uppercase_include + +lowercase_include + +special_include); i++) { // could make it i < user_desired_length - sum of bools of the four sets
      // gotta add the one minimum per selected set hard code


      var added_char_index = Math.floor(Math.random() * selected_subset.length);
      password_to_be_returned += selected_subset[added_char_index];
    }

    window.alert(
      "The generated password is: " + password_to_be_returned
    )
    
    // Need to add to box itself
    // Need to use id generate and change text to password_to_be_returned
    // var change_generate = document.querySelector("#generate");
    // change_generate.setAttribute(password_to_be_returned);

    // placeholder 

    // var change_generate = document.querySelector("#password");
    // change_generate.setAttribute(password_to_be_returned);

    // var change_generate = document.getElementById("generate");
    // change_generate.textContent = password_to_be_returned;

    // I WANT TO ADD THE PASSWORD TO THE SCREEN TOO

//     // Get the textarea element by its id
// var textareaElement = document.getElementById("password");
// textareaElement.setAttribute("placeholder", password_to_be_returned);

// // Get the placeholder text
// var placeholderText = textareaElement.getAttribute("placeholder");
// placeholderText = password_to_be_returned;

// console.log(placeholderText); // This will log "Your Secure Password"



    ; 

  } else {
    window.alert("None were selected :((( Try again ");
    return; // breaks out of pw generator
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);