
// Variables declared with let or const inside a block ({}) are accessible only within that block.
{
    let blockScoped = "I'm block scoped";
    var notBlocScoped = "I'm not block scoped";
    console.log(blockScoped)// can be accessible inside the block scope
}

// console.log(blockScoped); // cannot be accessible outside the block scope rs: let,const

{
    var notBlockScoped = "I'm not block scoped";
}

//accessible with var
console.log(notBlocScoped)

