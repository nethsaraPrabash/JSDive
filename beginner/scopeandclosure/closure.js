function outerFunction() {
    let outerVariable = "I'm from the outer function";

    function innerFunction() {
        console.log(outerVariable); // Access outerVariable even after outerFunction ends
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: I'm from the outer function
