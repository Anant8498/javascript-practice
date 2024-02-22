// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }

// 1. Write a program to find maximum between two given numbers.

// let a =prompt("enter first number:");
// let b =prompt("enter second number:");

// // let a =4;
// // let b =7;

// if(a>b){
//     console.log("a is greater");
// }

// else{
//     console.log("b is greater");
// }

// 2. Write a program to check whether given no is even or odd.

// let num = 0;

// if (num === 0) {
//   console.log("num is zero");
// } else if (num % 2 == 0) {
//   console.log("num is even");
// } else {
//   console.log("num is odd");
// }

// 3. Write a program to find maximum between three numbers.

// let a=3;
// let b=40;
// let c=5;

// if(a>b&&a>c){

//     console.log("a is greatest");

// }
// else if(b>a&&b>c){

//     console.log("b is greatest");

// }

// else{
//     console.log("c is greatest");

// }

// 4. Write a program to check whether a number is negative positive or zero.

// let a="-1";

// if(a===0){

//     console.log("a is zero");

// }
// else if(a<0){

//     console.log("a is negative");

// }

// else {
//     console.log("a is positive");

// }

// 5. check whether the number is odd or even or zero

// let num = 0;

// if (num % 2 == 0) {
//   if (num === 0) {
//     console.log("num is zer0");
//   } else {
//     console.log("num is even");
//   }
// } else {
//   console.log("num is odd");
// }

// // or

// let num = 0;

// if (num === 0) {
//   console.log("num is zero");
// } else if (num % 2 == 0) {
//   console.log("num is even");
// } else {
//   console.log("num is odd");
// }

// 8. Write a program to input angles of a triangle and check whether triangle is valid or not.

// const angle_1 = parseFloat(prompt("Enter your 1st angle:"));
// const angle_2 = parseFloat(prompt("Enter your 2nd angle:"));
// const angle_3 = parseFloat(prompt("Enter your 3rd angle:"));

// let sum = angle_1 + angle_2 + angle_3;

// if (sum === 180 && angle_1 > 0 && angle_2 > 0 && angle_3 > 0) {
//   console.log("triangle is valid");
// } else {
//   console.log("triangle is invalid");
// }

// 9. Write a program to input sides of a triangle and check whether triangle is valid or not.

//  const side_1 = parseFloat(prompt("Enter your 1st side:"));
//  const side_2 = parseFloat(prompt("Enter your 2nd side:"));
//  const side_3 = parseFloat(prompt("Enter your 3rd side:"));

//  if(side_1+side_2 > side_3 && side_1+side_3 > side_2 && side_2 + side_3 > side_1){

//     console.log("triangle is valid");
//  }
// else{
//     console.log("triangle is invalid");
// }

// 10. Write a program to check whether the triangle is equilateral,isoceles or scalene triangle.

//  const side_1 = parseFloat(prompt("Enter your 1st side:"));
//  const side_2 = parseFloat(prompt("Enter your 2nd side:"));
//  const side_3 = parseFloat(prompt("Enter your 3rd side:"));

// if(side_1!=side_2 && side_2!= side_3 && side_1 != side_3){
//     console.log("triangle is scalene")
// }

// else if(side_1===side_2 && side_2=== side_3 && side_1 === side_3){

//     console.log("triangle is equivalent")
// }

// // else if (side_1===side_2 || side_2=== side_3 || side_1 === side_3){

// //     console.log("triangle is isoceles ")

// else{
//     console.log("triangle is isoceles ")}

// 11. Write a program to read the age of the candidate and determine whether he is eligible to cast his/her vote.

// let age = parseFloat(prompt("enter your age:"))

// if(age === 18 || age>18){
//     console.log("eligible to vote")
// }

// else{
//     console.log("not eligible for vote")
// }

// 12. Write a program to check whether the input character is alphabet,digit or special character.

// let ch = prompt("enter your character:");

// if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
//   console.log("character is alphabet ");
// } else if (ch >= "0" && ch <= "9") {
//   console.log("character is digit");
// } else {
//   console.log("character is a special character ");
// }

// 13. Write a program to check whether the input character is vowel or consonant.

// let ch = prompt("enter your character:");
// if (((ch === "a"|| ch ==="e"|| ch ==="i"|| ch ==="o"|| ch ==="u") ||( ch === "A"||ch ==="E"|| ch ==="I"||ch ==="O"||ch === "U"))) {
//   console.log("given character is a vowel");
// } else {
//   console.log("given character is not a vowel");
// }



// 16. Write a program to check whether a number is divisible by 5 and 11 Or not. 
 
// let num =55;

// if (num % 5==0 && num % 11 ==0){
//     console.log("num is divisible by 5 and 11");
// }
// else {
//     console.log("num is not divisible by 5 and 11");
// }

// 17. Write a program to check whether a character is upper case Or lower case alphabet. 

// let ch = prompt("enter your character:");

// if (ch >= 'a' && ch <='z'){
//     console.log("character is lower case");

// }
// else if (ch >= 'A' && ch <='Z'){
//     console.log("character is upper case ")
// }
// else {
//     console.log("character is other than alphabet")
// }

// 18. Write a program to find profit or loss. 

// let cost_price =1500;
// let sell_price= 1000;

// if ((sell_price - cost_price)>=0){

//     console.log(" you are in profit");

// }
0
// else{
//     console.log("you are in loss")
// }



// 19. Write a program to print no of days in a month. 


// let month = 6;

// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 9 || month === 11) {
//     console.log("The days in this month is 31 days");
// }
// else if (month === 4 || month === 6 || month === 8 || month === 10 || month === 12) {
//     console.log("The days in this month is 30 days");
// }
// else if (month === 2) {
//     console.log("The days in this month is 29 days");
// }
// else {
//     console.log("Enter a number between 1-12");
// }
