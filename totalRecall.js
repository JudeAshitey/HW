/*
A. Q + A
1.How do we assign a value to a variable? 
 Either const variable = value or let variable1 = value

2.How do we change the value of a variable?
You just reassign it the same way on another line eg let variable1 = cars 
This only works for the let keyword

3.How do we assign an existing variable to a new variable?
let a1 = ready  let a2 = steady
a2 = a1 . In this scenario, A1 has become the value thereby making the value of A2 to be 'steady'.


4.Remind me, what are declare, assign, and define?
Declare = this informs what kind of variable is being used, the name of it and its value
Define = It simply states where the variable is stored
Assign = It is symbolically allocating a name to any value of choice

5.What is pseudocoding and why should you do it?
It is an informal way of programming mainly focused bringing out logic before programming actually starts.
Pseudocoding helps to problem-solve logical problems with the need to worry about the accuracy of a syntax with a programming language.
The engineer can focus solely on logic and problem-solving and worry about accuracy later.

6.What percentage of time should be spent thinking about how you're going to solve 
a problem vs actually typing in code to solve it?

I think 70% would be spent thinking about the code and 30% would be write the actual code. Sometimes figuring out the problem takes some more time.
*/

/* B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.

Create a variable called firstVariable
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariable in a new variable called secondVariable
Change the value of secondVariable to any string.
What is the value of firstVariable?
Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean

*/

// let firstVariable = "Hello World";
// firstVariable = 24;
// let secondVariable = firstVariable;
// secondVariable = 'A String it is';
// console.log(firstVariable);

// let yourName = 'Jude T Ashitey.';
// console.log("Hello, my name is " + yourName);

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console.
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false || false || false || false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a !== b !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a === a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 !== '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// let animal = 'cow';
// if (animal === 'cow'){
//     console.log('mooooo');
// } else{
//     console.log("Hey! You're not a cow.");
// }

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// let personAge = 16;

// if (personAge >= 16){
//     console.log("Here are the keys!");
// }else {
//     console.log("Sorry, you're too young.");
// }

//======================================= Loops ==========================================================================

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// for (let i = 0 ; i < 11; i++){
//     console.log(i);
// }
// Write a loop that will print out all the numbers from 10 up to and including 400

// for (let i = 10 ; i < 401; i++){
//     console.log(i);
// }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12 ; i < 4001; i++){
//     if(i % 3 === 0){
//         console.log(i);

//     }

//  }
// B. Get even
// Print out the numbers that are within the range of 1 - 100

// for (let i = 1 ; i < 101; i++){

//     if(i%2 === 0){
//         console.log(`${i} is an even number`);
//     }

//     console.log(i);
// }
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:

// I found a 5. High five!
// I found a 10. High five!

// for (let i = 0; i<101 ; i++){
//     if(i % 5 === 0 && i % 3 === 0){
//         console.log(`I found a ${i}. High five!`);
//         console.log(`I found a ${i}. Three is a crowd`);
//     }else if (i % 5 === 0){
//         console.log(`I found a ${i}. High five!`);
//     } else if (i % 3 === 0){
//         console.log(`I found a ${i}. Three is a crowd`);
//     }else{
//         console.log(i)
//     }
// }

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

// For numbers divisible by both three and five, be sure your code prints both messages

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// let bank_account = 0;
// for (let i = 0; i<11; i++){
//       bank_account += i;
// }
// console.log(`$${bank_account}`);

// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// let bank_account2 = 0;
// for (let index = 1; index <= 100; index++) {
//     let element = index*2;
//     bank_account2 += element;
// }
// console.log(bank_account2);
// Check your work! Your bank_account should have $10,100 in it.

// ==============================================   III. Arrays & Control flow ================================================================

// A. Talk about it:
// What are the things in an array called? Elements
// Do Arrays guarantee those things will be in order? Yes
// What real-life thing could you model with an array? Meal plans, Restaurant Menu, Car Titles, Top10Artists

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
// const quotes = [`Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi`,
// `We cannot solve problems with the kind of thinking we employed when we came up with them. — Albert Einstein`,
// `It is better to fail in originality than to succeed in imitation. — Herman Melville`
// ];

// C. Accessing elements
// Given the following array
// const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
// console.log(randomThings[0]);
// Change the value of "Hello"to "World"
// randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings[2]);

// D. Change values
// Given the following array
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// console.log(ourClass[2]);
// Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";
// console.log(ourClass[4]);
// Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City");
// console.log(ourClass);

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array:
// const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("Aegon");
// myArray.push("Cool Beans");
// console.log(myArray);
// Remove the 5 from the beginning of the array.
// myArray.shift();
// Add the string "Bob Marley" to the beginning of the array.
// myArray.unshift("Bob Marley");
// Remove the string of your choice from the end of the array.
// myArray.pop();
// console.log(myArray);

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// myArray.reverse();
// console.log(myArray);

// F. Biggie Smalls
// Create a variable that contains an integer.
// let myInt = 27;
// Write an if ... else statement that:
// if (myInt < 100) {
//     console.log("little number");
// } else {
//     console.log("big number");
// }
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// let num = 200;
// if (num < 5) {
//     console.log('little number');
// }else if (num >=100) {
//     console.log('big number');
// } else {
//   console.log('monkey');
// }
// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// //   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log(`Kristyn is rocking that " + ${kristynsCloset[2]} + " today!`);
// //   Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(6,0,"raybans");
// console.log(kristynsCloset);
// //   Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);
// //   Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// console.log(thomsCloset[0][0]);
// //   In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][0]);
// //   Access one item from Thom's accessories array.
// console.log(thomsCloset[2][0]);
// //   Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}!`);
// //   Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = 'Footie Pajamas';
// console.log(thomsCloset);

// IV. Functions

// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// function printGreeting(name){
//     console.log(`Hello there, ${name}`);
// }
// printGreeting('Mum')
// You think you could? I think so too. Feel free to skip this problem, because you've already done it.
// If you've done the problem twice, read entire problems carefully before doing them from now on.

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// let name = '';
// function printCool (name){
//     console.log(`${name} is cool`);
// }
//  console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

// function calculateCube (number){
//     console.log(number*number*number);
// }
// console.log(calculateCube(5));
// => 125

// function isVowel(char) {
//   let vowel = ["a", "e", "o", "u", "i"];
//   for (let index = 0; index < vowel.length; index++) {
//     const element = vowel[index];
//     if (char.toLowerCase() === vowel[index]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(isVowel("a"));

// function getTwoLengths(l1, l2) {
//   let larray = [l1.length, l2.length];
//   console.log(larray);
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// function getMultipleLengths(stingray) {
//   let element = [];
//   for (let index = 0; index < stingray.length; index++) {
//     element.push(stingray[index].length);
//   }
//   console.log(element);
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// NEEDS COMPLETION

function maxOfThree(num1, num2, num3) {
  let arra1 = [num1, num2, num3];
  let arra2 = [];

  if (arra1[0] > arra1[1] && arra1[0] > arra1[2]) {
    return arra1[0];
  } else if (arra1[1] > arra1[0] && arra1[1] > arra1[2]) {
    return arra1[1];
  } else if (arra1[2] > arra1[0] && arra1[2] > arra1[1]) {
    return arra1[2];
  }
}
// console.log(maxOfThree(3, 2, 4));
// maxOfThree(3, 2, 4);

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings.
// The method should return the longest word in the array.
// In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

// function printLongestWord(arrast) {
//   let stingray = [];
//   for (let index = 0; index < arrast.length; index++) {
//     stingray.push(arrast[index].length);
//   }

//   let max = Math.max(...stingray);

// console.log(
//   printLongestWord([
//     "BoJack",
//     "Princess",
//     "Diane",
//     "a",
//     "Max",
//     "Peanutbutter",
//     "big",
//     "Todd",
//   ])
// );

// const user = {
//   name: "Josh",
//   email: "josh@qwa.com",
//   age: 40,
//   purchased: [],
// };

// user.email = "goodvibes@gmail.com";
// console.log(user.email);

// user.age++;
// console.log(user.age);

// user.location = "Chantilly";
// console.log(user.location);

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
// Console.log just the "Merino jodhpurs" from the purchased array.
// user["purchased"].push("carbohydrates", "peace of mind", "Merino jodhpurs");
// console.log(user.purchased);

// user.friend = {
//   name: "John Ansong",
//   age: 85,
//   location: "Ghana",
//   purchased: [],
// };

// console.log(user.friend);
// console.log(user.friend.location);

// user.friend.age = 55;

// user.friend.purchased.push("The One Ring", "A latte");
// console.log(user.friend.purchased[1]);

// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.

// let array1 = user.purchased;
// for (let i = 0; i < array1.length; i++) {
//   console.log(array1[i]);
// }

// let array2 = user.friend.purchased;
// for (let i = 0; i < array2.length; i++) {
//   console.log(array2[i]);
// }
