//String Properties
// - properties associated with a datatype
// - strings have only one property and that is the length property

let myName = "Chelsey";
console.log(myName.length);

//String Methods
// - Methods are tools that can help us manipulate our data
// - .method() .property
// - Methods are functions associated with dataTypes

console.log(myName.toUpperCase());
// .toUpperCase() will capitalize all letters

let home = 'My home is Indiana';
console.log(home.includes('Indiana'));
console.log(home.includes('Indy'));
//.includes() will check if a certain string is included in another string

let sent = 'This sentence will be split into individual pieces';
console.log(sent.split(' '));