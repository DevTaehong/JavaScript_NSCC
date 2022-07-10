var random_Array = [];

(function(){
    //Source:
    //https://kkn1125.github.io/javascript-prime-number/
    //https://gurtn.tistory.com/103
    //https://www.w3schools.com/js/js_random.asp

    function question4(){
        while (random_Array.length < 10){
            var r = Math.floor(Math.random() * 100) + 1;
            random_Array.push(r);
        }
    }

    function IsPrimeNumber(n){
        if (n === 1){
            return "1 is not prime by definition!"
        }
        for (var i = 2; i < n; ++i){
            if (n % i === 0 ) {
                return n + " - no";
            } 
        }
        return n + " - yes";
    }

    question4();

    for(var i = 0; i < 10; ++i){
        var checkIfPrime = IsPrimeNumber(random_Array[i]);
        random_Array[i] = checkIfPrime;
    }
    
    console.log(random_Array);

})();