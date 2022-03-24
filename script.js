//create an array for each of the character options and concat based on choices
//+= add all character values to the var password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = ['~','`','/','!,','@','#','$','%','^','&','*','(',')',"'",'_','+','-','=','[',']','{','}',';',':','"',',','.','<','>','?'];


function generatePassword() {
    //window prompts and booleans
    var capChars = window.confirm("Should the password contain Upper Case Letters?");
    var lowChars = window.confirm("Should the password contain Lower Case Letters?");
    var numbs = window.confirm("Should the password contain Numbers?");
    var spec = window.confirm("Should the password contain Special Characters?");
    var number = Number(window.prompt("How many characters should the password be? Must be larger than 8 and no more than 128"));

    //list var init
    var charList = [];

    //adds desired characters to the character array
    if(capChars){
      charList = charList.concat(upperCase);
    }
    if(lowChars){
      charList = charList.concat(lowerCase);
    }
    if(numbs){
      charList = charList.concat(numbers);
    }
    if(spec){
      charList = charList.concat(special);
    }
    console.log(charList);

    //checks to see that password conditions are met
    if (number >= 8 && number <= 128 && (capChars || lowChars || numbs || spec)) {
        password = "";
      //creates random number and retrieves value from charList. iterates desired number of times to create password of desired length
      for (var i = 0; i < number; i++){
        //Random number init
        var value = Math.floor(Math.random() * charList.length);
        password += charList[value];
      }
    } else {
      window.alert("At least one Character Type must be accepted and the password must be between 8 and 128 characters");
    }
    return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
