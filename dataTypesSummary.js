/*
Primitive Data Types (e.g., Number, String, Boolean, null, undefined, Symbol, BigInt) are stored directly in memory and compared by value.

Reference Types (e.g., Objects, Arrays, Functions) are stored as references (memory addresses) and compared by reference, not value.
*/



// Primitive

// 7 Types: String, Number, Boolean, Null, undefined, Symbol, bigInt


// Reference (Non-Primitive)

// Arrays, Onjects, Functions


// Statically Typed and Dynamically Typed

/*    Statially Typed

The data type of a variable is checked at compile-time.

You must declare the type before using the variable.

Errors related to type mismatches are caught before execution.

Example languages: C, C++, Java, TypeScript


    Dynamically Typed

The data type is determined at runtime.

You don't need to declare types explicitly.

Variables can hold different types at different times.

Example languages: JavaScript, Python, Ruby

let num = 10;  // Initially a number
num = "Hello";  // ✅ Allowed (type can change at runtime)

*/

/*  
Statically Typed → More error-prone and better for large-scale applications.
Dynamically Typed → More flexible and faster to write but can lead to runtime errors.
*/

//  Use "typeof" to identify datatype


//**************************************************************************************************//

// Stack (Primitive), Heap (Non-Primitive)

let lastName = "Sonagra"

let firstName = lastName
firstName = "Amit"

console.log(lastName);
console.log(firstName);

let useOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = useOne

userTwo.email = "amit@google.com"

console.log(useOne.email);
console.log(userTwo.email);
