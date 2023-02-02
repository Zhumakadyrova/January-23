let myName = "Nagima";
console.log(myName);

let myTown = "Karakol";
let myHobby = "Books";
let myFavoriteColor = "white";
let myCountry = "Kyrgyzstan";
let myStatus = "Student";
let course = "IT";
let project = "Girls in IT";
console.log(project);
let total = "17 students";
let myDream = "To be best in my major";
console.log(myDream);
let favoriteActivity = "Hiking";
console.log(favoriteActivity);

let myAge = 21;
let myBirthday = 07;
let myMonth = 11;
let myYear = 2001;
let myFavoiteNumber = 9;
let KarakolPostcode = 722200;
let population = 7000000;
let familyMembers = 6;
let students = 25;
let totalAmount = 546000;
let weight = 67;

let student = "male";
if ((student = "male")) {
  console.log("It is male");
}
let lightSwitchIsOn = "Switch is on";
if (lightSwitchIsOn) {
  console.log("Switch is on");
} else {
  console.log("Switch is off");
}

let height = 9;
let width = 10;
let square = height * width;
console.log(square);

let girl = 50;
let boy = 50;
let amount = 50 + 50;
let percent = (50 * 50) / 100;
console.log(percent);

let ex = 5 + 1 >= 6;
let ex1 = 6 == 6;
let ex2 = 10 !== 11;
let ex4 = 10 > 6;
let ex5 = 15 < 20;

let ex6 = 6 ** 6;
let ex7 = 50 % 3;
console.log(ex7);

let number = "five";

if (number > 0) {
  console.log("Number " + number + " positive");
} else if (number < 0) {
  console.log("Number" + number + "negative");
} else if (number === 0) {
  console.log("Number zero is not negative or positive");
} else {
  console.log(number + " This is not a number");
}

let number1 = "km";
if (number1 % 2 === 0) {
  console.log(number1 + " even");
} else if (number1 % 2 === 1) {
  console.log(number1 + " odd");
} else {
  console.log(number1 + " Wrong comand");
}
let money = "knn";
let price = 40;
if (price <= money) {
  console.log(money + "is enough");
} else if (money < price) {
  console.log(money + "is not enough");
} else {
  console.log(money + " wrong comand");
}

let month = "january";
if (month === "december" || month === "january" || month === "february") {
  console.log(month + " this is winter");
} else if (month === "march" || month === "april" || month === "may") {
  console.log(month + " this is spring");
} else if (month === "june" || month === "july" || month === "august") {
  console.log(month + " this is summer");
} else if (
  month === "september" ||
  month === "october" ||
  month === "november"
) {
  console.log(month + " this is autumn");
} else {
  console.log(month + " this is wrong comand");
}
let day = "friday";
if (
  day === "monday" ||
  day === "tuesday" ||
  day === "wednesday" ||
  day === "thursday" ||
  day === "friday"
) {
  console.log(day + " this is a week day");
} else if (day === "saturday" || day === "sunday") {
  console.log(day + " this is a weekend day");
}

// switch (weekday) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     console.log("workday");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("weekend");
//     break;
// }
function sayHello() {
  console.log("Hello");
}

sayHello();
sayHello();

function sayChuse() {
  console.log("Chuse");
}

sayChuse();
sayChuse();
sayChuse();

function sayCheers() {
  console.log("Cheers");
}

sayCheers();

function sayHelloTo(name) {
  console.log("Hello " + name);
}
sayHelloTo("Bakyt");
sayHelloTo("Dastan");

function sayCityName(city) {
  console.log("I was born in " + city);
}
sayCityName("Bishkek");
sayCityName("Karakol");

function myFriend(friend) {
  console.log("My best friend is " + friend);
}

myFriend("Nurzat");
myFriend("Ayana");

function sayMyCountry(country) {
  console.log("My motherland is " + country);
}

sayMyCountry("Kyrgyzstan");

function printSum(a, b) {
  let sum = a + b;
  console.log("The sum of " + a + " and " + b + " is " + sum);
}

printSum(5, 10);
printSum(-5, 0);
printSum(100, 125);

function printDiff(a, b) {
  let diff = a - b;
  console.log("The diff of " + a + " and " + b + " is " + diff);
}
printDiff(5, 10);

function printMultiply(a, b) {
  let multiply = a * b;
  console.log("The amount of " + a + " and " + b + " is " + multiply);
}
printMultiply(5, 10);

function printDivide(a, b) {
  let divide = a / b;
  console.log("The difference of " + a + " and " + b + " is " + divide);
}
printDivide(5, 10);

function printDegree(a, b) {
  let degree = a ** b;
  console.log("The degree of " + a + " and " + b + " is " + degree);
}
printDegree(2, 7);

function isWeekend(weekday) {
  switch (weekday) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      console.log(weekday + " is not weekend");
      break;
    case "saturday":
    case "sunday":
      console.log(weekday + " is weekend");
      break;
  }
}

isWeekend("monday");
isWeekend("tuesday");
isWeekend("sunday");
isWeekend("monday");

//  function isDivisibleBy(a, b) {
//   let remainder = a % b;
//   if (remainder === 0) {
//     console.log (a + " is divisible by 2")
//   }
//   else if (remainder === 1) {
//     console.log (a + " is not divisible by 2")
//   }

//  isDivisibleBy(a);
//  isDivisibleBy(b);

function isEven(a) {
  let remainder = a % 2;
  if (remainder === 0) {
    console.log(a + " is even ");
  } else if (remainder === 0) {
    console.log(a + " is not even ");
  } else {
    console.log("is not a number");
  }
}
isEven(2)
isEven("fhg")

function isPositive(a) { 
  if (number > 0) {
    console.log(a + " is positive number ");
  }
 else if (number < 0) {
  console.log( a + " is not positive number")
 }
 else {
  console.log(a + " is not a number")
 }
}
isPositive(5);
isPositive(-5);



function usdToKgs(a, b) {
let result = a * b;
 console.log(a + " is " + result)

}
usdToKgs(400, 84);

let P = 3.14;
let radius = 5;
let b = 2
let result = P * (radius ** b)
console.log( "Circle with diameter of 5 cm is " + result )

function minutesToHour (a, b) {
  let result = b / a 
  let min = 60
  if (result === min){
    console.log(a + " is equal to " + b + " hours ")
  }
  else if ( result !== min ){
    console.log(a + " is not equal to " + b + " hours ")
  }
}
minutesToHour (4, 240);

function whichIsBigger (a, b) {
  if( a > b) {
    console.log( a + "is biger than" + b)
  }
  else if (a < b) {
    console.log( b + "is biger than" + a)
  }
  else if (a === b) {
    console.log(a + " and " + b +" are equal")
  }
}
whichIsBigger(12, -4);
whichIsBigger(5, 0);
whichIsBigger(2, 2);

function power (a, b) {
  let result= a ** b
    console.log( a + " to the power of " + b + " equals to " + result)
}
power (2, 4);
power (3, 2);




  function rectangleVolume (a, b) {
    let height = 2;
    let result = a * b * height;
    console.log (" Rectancle with dimentions 2 has volume " + result + "cm2")
  }
  rectangleVolume (2, 2);

  