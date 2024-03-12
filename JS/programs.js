// Leap Year

let year = Number(prompt("Enter Year"));

if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}

// Temperature

let temp = Number(prompt("Enter temperature"));

temp < 20
  ? console.log("Cold")
  : temp >= 20 && temp <= 35
  ? console.log("Neutral")
  : console.log("Hot");

// Vowel checker

let a = prompt("Enter an alphabet");

if (
  a == "a" ||
  a == "e" ||
  a == "i" ||
  a == "o" ||
  a == "u" ||
  a == "A" ||
  a == "E" ||
  a == "I" ||
  a == "O" ||
  a == "U"
) {
  console.log("vowel");
} else {
  console.log("not a vowel");
}

// Even or odd

let n = Number(prompt("Enter a number"));

n % 2 == 0 ? console.log("even") : console.log("odd");

// Checking months

let num = prompt("Enter a number");

switch (num) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Febraury");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Enter a number between 1 and 12");
}

// checking day

let value = prompt("Enter a number");

switch (value) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 6:
    console.log("Sunday");
    break;
  default:
    console.log("enter valid number");
    break;
}

// triangles

let x = Number(prompt("Enter x"));
let y = Number(prompt("Enter y"));
let z = Number(prompt("Enter z"));

if (x === y && y === z && z === x) {
  console.log("equilateral triangle");
} else if (x === y || y === z || z === x) {
  console.log("isosceles triangle");
} else {
  console.log("scalene triangle");
}
