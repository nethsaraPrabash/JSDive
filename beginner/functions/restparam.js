//Allows a function to accept an indefinite number of arguments as an array.

function sum(...numbers){

    numbers.map(number => {

        console.log(`numbers: ${number}`)
    }
        
    )
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1,2,3,4));