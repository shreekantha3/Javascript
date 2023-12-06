// In Javascript we datatypes loosely assigned. Not like other languages we need to assign the datatypes

// Js is loosely typed language so its assign the datatypes automatically 

// Naming conventions- Var should start with - Camel case

// If first letter is capital we use that for class

// Var scope is global - 




// // var scope is global. We can create anywhere and access anywhere

// // for example



// console.log(age)



// // let is also loosely typed and it can be used only local

// We can also declare multiple variables in one line:


// Let a = 10, b= 15 , 


// A variable should be declared only once.
// A repeated declaration of the same variable is an error:

// Let  hello = ‘hello world’

// Let hello = ‘who’

// 1. The name must contain only letters, digits, or the symbols $ and _.
// 2. The first character must not be a digit.


// // let - scope local

// // if i choose to use anyone is i will use the let to avoid errors


// // const - scope is local, But if we assign value once we can't change at all

// // in the const we can't undefined. we need to define while creating it self. once created it can't be changed.





//-----------------------

//datatypes
// numbers

let num = 3
let num1 = 3.14

// strings

let firstName = 'shree'
const lastName = 'biradar'

console.log(firstName)
console.log(lastName)

// boolean

let loggedIn = true

//Null

let lastLoginDate = null
// lastLoginDate = 3

console.log(lastLoginDate)

/// objects

const person = {
    firstName :'shree',
    lastName: 'biradar',
    age : 28
}

console.log(typeof(person))

// 





// ternary operator

// cam be used only when you have the if and else. if you more option if elseif else


// 

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) {
    console.log( 'You are right!' );
}