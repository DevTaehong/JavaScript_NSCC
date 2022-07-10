const array_sum = [1,2,3,6,9,34,2,6];
const array_sum2 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
const array_sum3 = [100, 101, 102, 3, 4, 5, 6, 9];
const array_sum4 = [2,3,1,2,3,4,5];
const array_sum5 = [2,5,7,9];

(function(){
    // Resources
    // https://www.w3schools.com/js/js_arrays.asp
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    var sum = 0;
    var temp_sum = 0;
    let temp2 = 0;
    let return_number = 0; 
    let no_consecutive = true;
    let counter = 0;
    let counter2 = 0;

    function question2 (array){
        for(let i=0; i<array.length; ++i){
            if(array[i]+1 !== array[i+1] && array[i]-1 !== array[i-1]){
                continue;
            } else {
                sum += array[i];
                temp_sum = sum;
                counter++;
                if (array[i]+1 !== array[i+1]){
                    sum = 0;
                    if(temp2 > temp_sum && counter2 >= counter) {
                        return_number = temp2;
                        no_consecutive = false;
                    } else {
                        return_number = temp_sum;
                        no_consecutive = false;
                    }
                    temp2 = temp_sum;
                    temp_sum = 0;
                    counter2 = counter;
                    counter = 0;
                }
            }
        } 
        if (no_consecutive){
            return console.log(0);
        }else {
            return console.log(return_number);
        }
    }

    question2(array_sum4);

})();