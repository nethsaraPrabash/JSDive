
//Functions that take other functions as arguments or return them as output.
function calculate(a,b, op)
{
    return op(a, b);
}

const sum = (x, y) => x+y;
const sub = (x, y) => x-y;

console.log(calculate(5,3, sum));
console.log(calculate(5,3, sub));
