
// 1. Declaring variables
let age = 21;          // 'let' allows reassigning the variable
const name = "John";   // 'const' is used for constants, reassignment is not allowed
var isStudent = true;  // 'var' is old and has function-scoped behavior (avoid using it in modern JS)


//1.Primitive Variables
// String
let fullname = "John Doe";
let greeting = "Hello"

let template = `${greeting} how are you ${fullname}`

console.log(template)

//Number
let height = 5.9; // Float
let distance = 42; // Integer
console.log("Height:", height, "Distance:", distance);

// BigInt (for very large numbers)
const bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

let isOnline = false;
console.log("Is online?", isOnline);

// Null
let emptyValue = null; // Represents an intentional absence of value
console.log("Null value:", emptyValue);

// Undefined
let notDefined;
console.log("Undefined value");

// Symbol (unique identifier)
const uniqueKey = Symbol("id")
console.log("Symbol:", uniqueKey)

// 3. Non-Primitive (Reference) Data Types

// Object
const person = {
    name: "Alice",
    age: 25,
    isStudent: true
  };
  console.log("Person Object:", person);
  
  // Array
  const colors = ["Red", "Green", "Blue"];
  console.log("Array of Colors:", colors);
  
  // Function
  function sayHello() {
    console.log("Hello!");
  }
  sayHello();
  
  // 4. Dynamic Typing
  let dynamic = "I am a string";
  console.log("Dynamic (String):", dynamic);
  dynamic = 42; // Can hold a different type later
  console.log("Dynamic (Number):", dynamic);
  
  // 5. Type Checking
  console.log("Type of age:", typeof age); // number
  console.log("Type of person:", typeof person); // object
  console.log("Type of sayHello:", typeof sayHello); // function
  
  // 6. Complex Example (Mixing data types)
  const mixedData = {
    id: 1,
    name: "Project Alpha",
    tags: ["JavaScript", "Tutorial"],
    details: {
      completed: false,
      progress: 75
    },
    greet: function () {
      console.log(`Hello from ${this.name}!`);
    }
  };
  console.log("Mixed Data:", mixedData);
  mixedData.greet();




