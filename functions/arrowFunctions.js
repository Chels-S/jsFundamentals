/* 
      1         2
    let hi = () => {
     console.log('hi');
    }

    1: We need to set the fat arrow function to a variable.
    2: We use the 'fat arrow' to signify its a function
    
    - arrow functions (fat arrow functions) introduced in ES6
        - a more concise way to write function expressions *not declarations
        - arrow functions do NOT get hoisted
    - 2 types of arrow functions: 
        - Concise body
        - Block body

*/

//! Concise body
let hi = () => console.log('hi');
// concise body arrow functions return by default.
// hi();

//! Block Body
let hiAgain = () => {
    console.log('hi');
}
//block body arrow functions must have a return in the body of the function (between the { })

let apples = x => console.log(`There are ${x} apples.`)

apples(10);

let bananas = (x,y) => {
    console.log(`There are ${x} bananas`);
}

bananas(10);

//if no or multi parameters are needed - use () 
// do not need () if we are only passing 1 parameter