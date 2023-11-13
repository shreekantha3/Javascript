// Functions

// simple function

function sayHello(){
    console.log(' Hello Shree! How are you!')
}

sayHello()  // calling of function
sayHello()
sayHello()
sayHello()
sayHello()


// function that add the two number
// Arguments 
function add(a, b){
 console.log(a+b);
}

add(5,10) // parameters 

add(9,34)



// Function that multiplies two numbers

function multi(num1, num2){
    // console.log(num1*num2)

    return num1 * num2
}

let d = multi(30,40)

console.log('The result is ' + d)


// exersise

function addNumbers(...args){
    return args.reduce((a, b) => a + b);

}

console.log(addNumbers(1,2,3,3,4,5))