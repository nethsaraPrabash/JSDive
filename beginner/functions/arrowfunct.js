
const sayHello = (name) => {
    return `Hello ${name}`
}

console.log(sayHello("Nethsara"))


//In a regular function arguments are accessible with arguments keyword it is accessible as a array of objects
function numbers(a,b)
{
    console.log(arguments);
}

numbers(1,2)

//in arrow functions argument are not passed like that
const arrownum1 = (a, b) => {
    console.log(arguments)
}

//We can access arguments as an array
const arrownum = (...args) => {
    console.log(args)
}

arrownum(1,2)