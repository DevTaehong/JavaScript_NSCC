// Using the data retrieved from the API Endpoint, 
// write a function called 'getPopulation' that returns the total population
// for all countries that BOTH border China
// and list English as one of their official languages

//NOTE: You are NOT permitted to use FOR, FOREACH, or WHILE loops of any kind.
//      You must leverage the available JavaScript Array Iteration Functions to accomplish your goal.
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

// MARKING
// 10/10 - Function is completed to spec and submitted within class time
//  8/10 - Function is completed to spec and submitted within grace period of twelve hours of end of class time
//  6/10 - Function is completed to spec and submitted after twelve-hour grace period
//  0/10 - Function is not completed


(function(test){

    fetch(`https://prog2700.netlify.app/json/restcountries/v2/all.json`)
        .then(response => response.json())
        .then(json => {
            //DO NOT MODIFY THIS CODE
            document.write(`The total population of countries that border China and list English as an official language is ${getPopulation(json)}`)
            test.run(getPopulation(json)) // will output test result to browser console
        })

    // WRITE YOUR getPopulation FUNCTION BELOW
    // |           |             |           |
    // V           V             V           V
    const getPopulation = (json) => {

        let newArray = [];
        newArray = json
            .map( (ele) => {
                return {
                    population: ele.population,
                    languages: ele.languages,
                    borders: ele.borders
                }
            })

        var china = [];
        var english = [];
        newArray.filter((ele) => {
            // Source: https://stackoverflow.com/questions/69016254/typeerror-cannot-read-properties-of-undefined-reading-filter-at-jasmine
                if(Array.isArray(ele.borders)){
                   if(ele.borders.includes("CHN")){
                       china.push(ele.languages);
                       china.push(ele.population);
                   }
                }
                return china;
            })

        var num = 0;

        china.filter((element) => {
            if(Array.isArray(element)){
                element.filter((value) => {
                    if(value.name === "English"){
                        english.push(china[num+1]);
                    }
                })
                num += 2;
            }
        }) 
        let sum = 0;
        sum = english.reduce( (total, population) => {
            total += population;
            return total;
        },0)
        return sum;
    };

})(test);