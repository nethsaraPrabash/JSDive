
//when the function has specific argument to get but in any case it won't get any args the default parameter should be shown 
//and here it is
function greet(name = "Guest"){
    return `Welcome, ${name}`;
}

console.log(greet());
console.log(greet("Charlie"));
