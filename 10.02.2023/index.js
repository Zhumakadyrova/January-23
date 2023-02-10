function showName(a) {
  console.log("My name is " + a)
}
showName("Nagima");
showName("Ayar");

function showAnswer(a, b) {
  console.log("Nice to meet you " + a + "My name is " + b + ".")
}
showAnswer("Nagima", "Ayana");

let userName = "Nagima";

function showConversation() {
  userName = "Lanna";
  let message = "Hello, " + userName;
  console.log(message)
}
showConversation();
function names(a) {
  if (names.length === 5) {
    console.log( a + " This is correct name!!!")
  }
  else if (names.length !== 5) {
    console.log( a + " This is incorrect name!!!")
  }
  else { 
    console.log( " Wrong command!")
  }
}
names("Nagima");

function numbers(a, b) {
  if (a > b) {
    console.log(a + " is more then " + b)
  }
  else if (a < b) {
    console.log(a + " is less then " + b)
  }
  else {
    console.log(" This is wrong commad")
  }
}

numbers(5, 6);
numbers(6, 10);

function number(a) {
  if( a % 2 ===0) { console.log(a + " is even number.")}
  else if(a % 2 !==0) { console.log(a + " is odd number.")}
  else {
    console.log("This is not a number")
  }
}
number(125);
number(100);
number(50);
number(20);
number(15);
number(40.2);

function countUp(a, b) {
  for (let i =a; i<=b; i++) {
    console.log(i)
  }
}
countUp(10, 15);
countUp(20, 25);

function countDown(a, b) {
  for (let i = a; i >= b; i--) {
    console.log(i)
  }
}
countDown(25, 20);
countDown(35,31);

function checkAge(age) {
  if (age >= 18) {
    console.log("Congradulation you are allowed to visit this website")
  }
  else if (age < 18) {
    console.log("Sorry, you can't enter further to the web")
  }
  else {
    console.log("Wrong command")
  }
}

checkAge(15);
checkAge(18);
checkAge(23);

function min(a, b) {
  return  " The sum of numbers " + a + " and " +  b + " are equal to " + (a + b)
}
console.log(min(10, 15));
console.log(min(1169, 2698));
console.log(min(2352, 1586));

function pov(x, n) {
  return x * n
}
console.log(pov(5, 50));
console.log(pov())