/* 
    - First Pass: Stores our variables declarations (essentially says, "Hey, I know a variable of x is defined, 
    so let me store that in my memory so I know it's there"), but it does not assign them their values.
        - Anything that needs to be hoisted, is hoisted.
    - Second Pass: Assigns the values to our variables and executes any hoisted source code. 


*/


//This will give an error of: Cannot access 'myName' before initalization

// console.log(myName);
// let myName= 'Eric';


// //This gives an error of randomVariable is not defined
// let myName= 'Eric';
// console.log(randomVariable);

b() 

function b() {
    console.log("I have been hoisted");
}