# JS | Functions

<br>

## Pass the functions around - Exercise

![](https://media.giphy.com/media/5IqxJsqlCtkqc/giphy.gif)

<br>

For this exercise you can use [Repl.it](https://repl.it/) or your code editor.

Using the below file `pass-functions.js` finish the tasks as specified in the comments in the script.

<br>

#### `pass-functions.js`

```js
// Task 1. Create 3 functions:
// function sayHello that logs "Hello" on the console.
// function sayHola that  logs "Hola" on the console.
// function sayPrivjet that "Privjet" on the console.
function sayHola() {
  console.log("Hola");
}
function sayHello() {
  console.log("Hello");
}
function sayPrivjet() {
  console.log("Privjet");
}
// Task 2. Create an array named "globalGreetings" and push all 3 functions
//  into that array.
let globalGreetings = [];
globalGreetings.push(sayHello, sayHola, sayPrivjet);
console.log("globalGreetings", globalGreetings);
// Task 3. Create an object and name it 'greeting'.
// Copy the functions from the array "globalGreetings" to the object 'greeting' and make them into methods with new names:
// `inEnglish`, `inSpanish`, `inRussian`.
// After you are done uncomment the below line to see if it is working:
/*
  	
  greeting.inEnglish() // should log "Hello" 
	greeting.inSpanish() // should log "Hola" 
	greeting.inRussian() // should log "Privjet" 
	
	*/
let greeting = {};
greeting.inEnglish = globalGreetings[0];
greeting.inSpanish = globalGreetings[1];
greeting.inRussian = globalGreetings[2];
console.log("greeting", greeting);
greeting.inEnglish(); //	"Hello"
greeting.inSpanish(); //	"Hola"
greeting.inRussian(); //	"Privjet"
// Task 4. Create a higher order function "greetInAllLanguages" that
//  takes the 3 functions as arguments and invokes each of those function arguments.
//  When finished invoke "greetInAllLanguages()" and pass it 3 functions from the
//  "greeting" object using the dot notation.
function greetInAllLanguages(lang1, lang2, lang3) {
  lang1();
  lang2();
  lang3();
}
greetInAllLanguages(greeting.inEnglish, greeting.inSpanish, greeting.inRussian);