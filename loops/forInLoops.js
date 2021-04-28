/* ********

! For In Loops

- Great for iterating over values in an object
- Properties in objects are what's called enumerable
- Enumerable just means 'countable' 

******* */

let student  = {
    name: 'Jake from state farm',
    awesome: true,
    degree: "insurance sales",
    age: 98

};

for (item in student){
    console.log(item);
    console.log(student[item]);
};