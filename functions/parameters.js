//              1
function hi(userName) {
    console.log(`Hi, ${userName}.`)
    //                    2
}


//     3
hi('Summer');

/* 
    1: The parameter(s) that the function is accepting or holding.
    2: Using string interpolation, we can refer to the parameter given to the function
    3: This is where we define what the parameter's value will be
    */

hi('Adam');

/*
- Write a function that takes two parameters:
    - One parameter is for a first name,
    - the other parameter is for a last name.
    - have  them come together in a variable inside the function.
    - console.log 'Hellow, my name is <your name>'
    - call (or invoke) your function
*/



function helloAgain(first, last){
    let myName = first + " " + last;
    //or let myName = `${first} ${last};
    console.log("Hello, my name is " + myName);
}

helloAgain('Chelsey', 'Sexton');


function  hello(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}.`);
}

hello('Chelsey','Sexton');