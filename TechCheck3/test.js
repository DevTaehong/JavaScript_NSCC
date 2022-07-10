//DO NOT MODIFY THIS CODE IN ANY WAY....USED TO TEST YOUR getPopulation FUNCTION
const test = {
    fontSize: '20px',
    passColor: '#00FF00',
    failColor: '#FF0000',
    correctOutput: 1608378516,
    run: function(input) {
        const displayInput = input === '' ? 'an Empty String' : input
        if(input === this.correctOutput) {
            console.log(
                `%cFUNCTION getPopulation is CORRECT`, 
                `color: ${this.passColor}; font-size: ${this.fontSize};`
            )
        } else {
            console.log(
                `%cFUNCTION getPopulation is INCORRECT\n\tExpected ${this.correctOutput} but got ${displayInput}`,
                `color: ${this.failColor}; font-size: ${this.fontSize};`)
        }
    }
}