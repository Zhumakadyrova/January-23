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