/*
* PHONEWORDS
* Write a function that will take a phone word (vanity number) and return the correct telephone number.
* The number pad looks like the following:
* https://en.wikipedia.org/wiki/Telephone_keypad#/media/File:Telephone-keypad2.svg
*
* RULES
* Given a phoneword:
* 1. Ignore any non-alphanumeric characters (), -, etc.
* 2. Keep any existing digits
* 3. Resolve a letter to a number according to the keypad image
* 4. All your code must be contained in the section outlined below
*/


var buttons = ["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"] //DO NOT MODIFY


// YOU CAN ADD TO AND MODIFY THE CODE BELOW THIS LINE
//   |
//   V

function convertPhoneWord(phoneWord) {
    
    var result = "";

    if(phoneWord === null) return result += "";
    else if(phoneWord === undefined) return result += "";
    else {
        for (var i=0; i<phoneWord.length; i++) {
            if(isDigit(phoneWord[i])){
                result += phoneWord[i];
            } else if(isLetter(phoneWord[i])){
                for (var i=0; i<phoneWord.length; i++){
                    // if(buttons[i][j] === phoneWord[i].toLowerCase()){
                        if(phoneWord[i].toLowerCase() === "a" || phoneWord[i].toLowerCase() === 'b' || phoneWord[i].toLowerCase() === "c")
                            result += "2";
                        else if(phoneWord[i].toLowerCase() === "d" || phoneWord[i].toLowerCase() === "e" || phoneWord[i].toLowerCase() === "f")
                            result += "3";
                        else if(phoneWord[i].toLowerCase() === "g" || phoneWord[i].toLowerCase() === "h" || phoneWord[i].toLowerCase() === "i")
                            result += "4";
                        else if(phoneWord[i].toLowerCase() === "j" || phoneWord[i].toLowerCase() === "k" || phoneWord[i].toLowerCase() === "l")
                            result += "5";
                        else if(phoneWord[i].toLowerCase() === "m" || phoneWord[i].toLowerCase() === "n" || phoneWord[i].toLowerCase() === "o")
                            result += "6";
                        else if(phoneWord[i].toLowerCase() === "p" || phoneWord[i].toLowerCase() === "q" || phoneWord[i].toLowerCase() === "r" || phoneWord[i].toLowerCase() === "s")
                            result += "7";
                        else if(phoneWord[i].toLowerCase() === "t" || phoneWord[i].toLowerCase() === "u" || phoneWord[i].toLowerCase() === "v")
                            result += "8";
                        else if(phoneWord[i].toLowerCase() === "z" || phoneWord[i].toLowerCase() === "w" || phoneWord[i].toLowerCase() === "x" || phoneWord[i].toLowerCase() === "y")
                            result += "9";
                    // }
                }
            } 
        }
    }
    return result;
}

//    ^
//    |
//YOU CAN ADD TO OR MODIFY THE CODE ABOVE THIS LINE




// DO NOT CHANGE ANY CODE AFTER THIS LINE.
//     |
//     |
//     V

//helper functions...do not modify, but you can use them in your code

function isDigit(character) {
    return "0123456789".indexOf(character) !== -1;
}

function isLetter(character) {
    character = character.toUpperCase();    
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(character) !== -1;
}

testCode();