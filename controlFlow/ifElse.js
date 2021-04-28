let weather = 75;

if(weather < 70){
    console.log('Wear a jacket!');
} else {
    console.log('No jacket necessary');
}

/* 
if (true) {
    if returns ture
} else {
    if returns false
}

*/


/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
Silver:
    If It is your name, console log 'Hello, my name is <name>'
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/


//Bronze 

let name = 'Mira';

if(name == 'Chelsey') {
    console.log(name);
} else {
    console.log ('Hello, what is your name?');
}

//Silver
if(name == 'Chelsey') {
    console.log('Hello, my name is ' + name);
} else {
    console.log('Hello, what is your name?');
}

//Gold
if (name == 'Chelsey') {
    console.log('Hello, ' + name + "!")
} else {
    console.log('Hello, is your name ' + name +'?');
}

/* *******

! Else If

***********/

let newName = 'Chelsey';

if (newName == 'Waldo'){
    console.log( 'Hello ' + newName + ', welcome back.');
} else if(newName === 'Chelsey'){
    console.log ('Hello ' + newName);
} else {
    console.log("I don't know " + newName + ".");
}



/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/


let myAge = 22;

if (myAge <= 17){
    console.log ("Sorry, you're too young to do anything");
} else if(myAge >= 18 && myAge < 21){
    console.log("You can vote!");
} else if (myAge >= 21 && myAge < 25){
    console.log("You can drink!");
} else if (myAge >=25){
    console.log("You can rent a car!");
}