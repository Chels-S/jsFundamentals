/* **********

! For Of Loops
    - Iterate over the values of an iterable object(strings and arrays included)
    - Iterable means to be able to parse through with numbers
********* */


//This does not work because the properties are not 'iterable' 
let student  = {
    name: 'Jake from state farm',
    awesome: true,
    degree: "insurance sales",
    age: 98

};

// for (item of student) {
//     console.log(item);
// }


let soupArray = ['potato', 'broccoli', 'carrot', 'chicken noodle', 'chili'];

for (soup of soupArray) {
    console.log(soup);
}