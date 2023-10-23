# WM-Password-Generator #

## Description ##

The starter code to be refactored was from the Develop folder within the 02-Challenge folder within the 03-JavaScript folder within the UCSD-VIRT-FSF-PT-09-2023-U-LOLC GitLab repository. On GitLab, it says that user mvpache authored the repository.

I have refactored the script.js file to give the deployed website the same functionality and similar prompts as the example from lecture given by Michael. I also made the decision to have my password generator return the prompted password in both the window alert boxes and the placeholder location on the webpage.

## Credits ##

I used this link - https://stackoverflow.com/questions/7820683/convert-boolean-result-into-number-integer - to figure out how to use the booleans of the included sets to change the length of my for loop afer the hardcoded inclusion of selected sets section.

I met with tutor Sangeetha Kaliaperumal on October 22, 2023 to hammer out the final details of my project. She helped me to figure out how to throw a warning when the input in the acceptable range of 8 to 128 characters was a decimal and not numeric. She also instructed me to update my index file to get rid of a favicon console log error that I was getting. She instructed me that the remaining messages in my Console were not errors and were specific to my Chrome browser because of my extensions and browser settings.

I asked ChatGPT to help me figure out the required escape characters for the special characters that were giving my VS Code a hard time. The double quote " and the backslash \ each needed a backslash \ to precede them. I got the [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation from the README in the source code.

## Screenshots ##

![Screenshot](assets/images/WM-Password-Generator-Landing-Photo.png)
![Screenshot](assets/images/WM-Password-Generator-Char-Length-Input.png)
![Screenshot](assets/images/WM-Password-Generator-Char-Set-Selection.png)
![Screenshot](assets/images/WM-Password-Generator-Window-Returned-Password.png)
![Screenshot](assets/images/WM-Password-Generator-Screen-Returned-Password.png)

## Link to Deployed Application ##
[William Mason Password Generator](https://wmason1997.github.io/WM-Password-Generator/)