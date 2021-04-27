
let         a        =          2;
//1         2        3          4

//1 - Javascript keyword to denote the creation of a variable
//2 - The name of the variable.
//3 - Assignment operator
//4 - The initial value

let x = 10;

//Declaration  => This is where the variable is created by utilizing designated JS keywords(var, let, and const)
//Initialization => This is where the developer sets the value for the declared variable.

let y;
console.log('Declaration', y, a, x);


y=10;
console.log('Initialization', y);
//Code runs top to bottom. So the console.log under let y will not print y because it is not defined until later.


// Console => an object that can give us access to a browser's debugging console
// We use the console to check the values and variables of things we create in our code

console.log('This is a message');