let test = "Triscuit";
let test2= "Cracker";
let string1 = "Taehong";
let string2 = "JavaScript";

(function(){
    // Resources: 
    // https://www.w3schools.com/js/js_string_methods.asp
    // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    function question1(str){
        var length = str.length;
        var newString = "";

        console.log(str);
        console.log(str[0].toUpperCase())
        console.log(str[length - 1].toUpperCase());
        
        if (str[0].toUpperCase() == str[length - 1].toUpperCase()){
            for (var i=str.length-1; i>=0; i--){
                newString += str[i];
            }
            return console.log(newString);
        } else {
            return console.log(str.substring(1, str.length -1));
        }
    }

    question1(test2);

})();

