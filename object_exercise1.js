// Morse Code

// Given the following alphabet:

const alphabet =  {
  a: '.-',
  b: '-...r',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

// Try encoding the following strings:

var firstSentence = "hello world";

var secondSentence = "we love Javascript";

function encoding (alphapet, sentence) {
const encodedMessage = []
for (let i = 0; i < sentence.length; i++) {
  for (const [key, value] of Object.entries(alphabet)) {
    if (sentence[i] === key) {
      encodedMessage.push(value);
    }
  } 
};
return encodedMessage.join(" ")
}

console.log(encoding(alphabet, firstSentence)) 

/*
The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.
*/

/*
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
*/

// Decode the following messages:


morseCode1 = "... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. ."

morseCode2 = "-.-- --- ..- .-.  .. -. ... - .-. ..- -.-. - --- .-. ...  .-- .. ... ....  -.-- --- ..- .-.  .-  -. .. -.-. .  .-- . . -.- . -. -.."

morseCode3 = "-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-"

morseCode4 = "..  .-.. --- ...- .  - ---  -... .  -.-. .... .- .-.. .-.. . -. --. . -..  ... .- -.-- ...  - .... .  ... . ..  .--- . -.. -.. .- ....  -.-. .-.. .- ... ...  --- ..-.  ... . .--. - . -- -... . .-.  ... ---  .-- .  .-- .. .-.. .-..  -.-. .... .- .-.. .-.. . -. --. .  - .... . --"

function decoding (alphabet, morseCode) {
const morseArray = morseCode.split (" ");
const decodedMessage = [];
for (let i = 0; i < morseArray.length; i++) {
  for (const [key, value] of Object.entries(alphabet)) {
    if (morseArray[i] === value) {
      decodedMessage.push(key);
    }
  }
}
return decodedMessage.join(" ")
}

console.log(decoding (alphabet, morseCode1))

// Bonus

// Ask the user if they want to encode or decode. Add the ability to take in morse code and spit out the decoded message.

/*
Hints: (don't look unless you need to!)

Each letter of the alphabet is given as a key in the array.

You need to translate every letter in the input string into a bunch of dots and dashes (the value at a particular key in the object).

This repetition of the translation action implies a loop.

The data that this loops runs on, where you translate each letter into a set of dots an dashes, implies an array of characters (one element for each letter of the word- `['c','a','t']` represents the word `cat`).

You can transform a string into an array of individual characters easily in javascript:

```
var word = "hello";
var wordArray = word.split('');
```
*/