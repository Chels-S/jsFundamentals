
let hi = () => {
     // 1
    return 'hi';
};
      // 2       3
let newName = hi();

console.log(newName);

/* 
    1: The keyword that brings our data out of our function
    2: We need a new variable to hold the value of the return
    3: When called, the function becomes the value of the return
*/

let z;
let a;

let math = (numOne, numTwo) => {
    let total = numOne + numTwo;
    return total;
}

let sum = math(1,2);
let sum2 = math(5293,12394);
let sum3 = math(z,a);
console.log(sum);
console.log(sum2);
console.log(sum3);


/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

let tip = (subTotal, percentage ) => {
    let tipValue = subTotal * (percentage / 100) ;
    let tipTotal = subTotal + tipValue;
    return tipTotal;
}
let myTip = tip(54.78, 20);
console.log(myTip);

//self-note: Figure out how to use math commands to get total to be rounded ($00.00)