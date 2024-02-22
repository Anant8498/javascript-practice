// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

// 5. Write a program to print days of a week using switch case.

// let day = 5;
// switch (day) {
//   case 1:
//     console.log("day1 is monday ");
//     break;
//   case 2:
//     console.log("day2 is tuesday");
//     break;
//   case 3:
//     console.log("day3 is wednesday ");
//     break;
//   case 4:
//     console.log("day4 is thursday");
//     break;
//   case 5:
//     console.log("day5 is friday ");
//     break;
//   case 6:
//     console.log("day6 is saturday ");
//     break;
//   case 7:
//     console.log("day7 is sunday ");
//     break;
//   default:
//     console.log( "invalid, enter between 1-7");
// }

// 6. Write a program to find maximum between two numbers using switch case.

// let a = 5;
// let b = "5";
// switch (true) {
//   case a > b:
//     console.log("a is greater");
//     break;
//   case b > a:
//     console.log("b is greater");
//     break;
//   case a === b:
//     console.log("numbers are equal");
//     break;
//   default:
//     console.log("invalid integer");
// }

// 7. Write a program to check whether a number is negative positive or zero using switch case.

// let a = -9;

// switch (true) {
//   case a > 0:
//     console.log("a is positive");
//     break;
//   case 0> a:
//     console.log("b is negative");
//     break;
//   case a === 0:
//     console.log("a is zero");
//     break;
//   default:
//     console.log("invalid integer");
// }

// 14. Write a program to create Simple Calculator using switch case.(+,-,*,/,% etc.)

// let a = 2;
// let b = 5;
//  let operator =  prompt("enter your operator :");

// switch (operator) {
//   case  "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
// }

// 15. Write a program to read temperature in centigrade and display a suitable message according to temperature using switch case as given below:-

// Temperature<0 - Freezing weather
// Temperature 0-10  - Very Cold weather
// Temperature 10-20 - Cold weather
// Temperature 20-30 - Normal in temp
// Temperature 30-40  - Its hot
// Temperature >=40 - Its very hot11

// let temperature = -90;

// switch (true) {
//   case temperature < 0:
//     console.log("Freezing weather");
//     break;
//   case temperature >= 0 && temperature < 10:
//     console.log("Very Cold weatherr");
//     break;
//   case temperature >= 10 && temperature < 20:
//     console.log("Cold weather");
//     break;
//   case temperature >= 20 && temperature < 30:
//     console.log("Normal in temp");
//     break;
//   case temperature >= 30 && temperature < 40:
//     console.log("Its hot");
//     break;
//   case temperature >=40:
//     console.log("Its very hot11");
//     break;
// }

// 20. Write a program  to accept a grade and declare the equivalent description :

// Grade	Description
// E	Excellent
// V	Very Good
// G	Good
// A	Average
// F	Fail

// let grade = prompt("enter your grade:");

// switch (grade) {
//   case "A" :
//   case "a":
//     console.log("average");

//     break;

//   case "F" :
//   case "f":
//     console.log("fail");

//     break;

//   case "E" :
//   case "e":
//     console.log("excellent");

//     break;

//   case "V" :
//   case "v":
//     console.log("very good");

//     break;
//   case "G" :
//   case "g":
//     console.log("good");

//     break;
// }
