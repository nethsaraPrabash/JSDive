// OPERATORS IN JAVASCRIPT

// 1. Arithmetic Operators
let num1 = 15;
let num2 = 4;

console.log("Arithmetic Operators:");
console.log("Addition (num1 + num2):", num1 + num2);
console.log("Subtraction (num1 - num2):", num1 - num2);
console.log("Multiplication (num1 * num2):", num1 * num2);
console.log("Division (num1 / num2):", num1 / num2);
console.log("Modulus (num1 % num2):", num1 % num2);
console.log("Exponentiation (num1 ** num2):", num1 ** num2);
console.log("Increment (num1++):", num1++); // Post-increment
console.log("Value after Increment:", num1);
console.log("Decrement (--num2):", --num2); // Pre-decrement

// 2. Assignment Operators
let total = 20;
console.log("\nAssignment Operators:");
console.log("Initial total:", total);
total += 5; // Equivalent to total = total + 5
console.log("Add and assign (total += 5):", total);
total -= 3; // Equivalent to total = total - 3
console.log("Subtract and assign (total -= 3):", total);
total *= 2; // Equivalent to total = total * 2
console.log("Multiply and assign (total *= 2):", total);
total /= 4; // Equivalent to total = total / 4
console.log("Divide and assign (total /= 4):", total);
total %= 3; // Equivalent to total = total % 3
console.log("Modulus and assign (total %= 3):", total);

// 3. Comparison Operators
let value1 = 12;
let value2 = 8;

console.log("\nComparison Operators:");
console.log("Equal (value1 == value2):", value1 == value2);
console.log("Not equal (value1 != value2):", value1 != value2);
console.log("Strictly equal (value1 === value2):", value1 === value2);
console.log("Strictly not equal (value1 !== value2):", value1 !== value2);
console.log("Greater than (value1 > value2):", value1 > value2);
console.log("Less than (value1 < value2):", value1 < value2);
console.log("Greater than or equal (value1 >= value2):", value1 >= value2);
console.log("Less than or equal (value1 <= value2):", value1 <= value2);

// 4. Logical Operators
let isLoggedIn = true;
let hasPermission = false;

console.log("\nLogical Operators:");
console.log("Logical AND (isLoggedIn && hasPermission):", isLoggedIn && hasPermission);
console.log("Logical OR (isLoggedIn || hasPermission):", isLoggedIn || hasPermission);
console.log("Logical NOT (!isLoggedIn):", !isLoggedIn);

// 5. Bitwise Operators
let bitwiseA = 6; // Binary: 0110
let bitwiseB = 2; // Binary: 0010

console.log("\nBitwise Operators:");
console.log("Bitwise AND (bitwiseA & bitwiseB):", bitwiseA & bitwiseB); // 0110 & 0010 = 0010
console.log("Bitwise OR (bitwiseA | bitwiseB):", bitwiseA | bitwiseB); // 0110 | 0010 = 0110
console.log("Bitwise XOR (bitwiseA ^ bitwiseB):", bitwiseA ^ bitwiseB); // 0110 ^ 0010 = 0100
console.log("Bitwise NOT (~bitwiseA):", ~bitwiseA); // ~0110 = 1001 (inverted bits)
console.log("Left shift (bitwiseA << 1):", bitwiseA << 1); // 0110 << 1 = 1100
console.log("Right shift (bitwiseA >> 1):", bitwiseA >> 1); // 0110 >> 1 = 0011

// 6. Ternary (Conditional) Operator
let score = 45;
console.log("\nTernary Operator:");
let result = score >= 50 ? "Pass" : "Fail";
console.log("Result:", result);

// 7. Type Operators
let data = [1, 2, 3];

console.log("\nType Operators:");
console.log("Type of data:", typeof data); // object
console.log("Is data an instance of Array?:", data instanceof Array); // true

// 8. Nullish Coalescing Operator (??)
let configValue = undefined;
let fallbackValue = "Default Config";

console.log("\nNullish Coalescing Operator:");
console.log("Nullish Coalescing (configValue ?? fallbackValue):", configValue ?? fallbackValue);

// 9. Optional Chaining Operator (?.)
let userProfile = {
  username: "tech_guru",
  preferences: {
    theme: "dark",
  },
};

console.log("\nOptional Chaining Operator:");
console.log("Accessing theme:", userProfile?.preferences?.theme); // dark
console.log("Accessing non-existent property:", userProfile?.preferences?.language); // undefined

// 10. Spread and Rest Operators (...)
// Spread
let fruits = ["Apple", "Banana", "Cherry"];
console.log("\nSpread Operator:");
console.log("Expanded array:", ...fruits);

// Rest
function multiplyAll(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}
console.log("\nRest Operator:");
console.log("Product of numbers (2, 3, 4):", multiplyAll(2, 3, 4));
