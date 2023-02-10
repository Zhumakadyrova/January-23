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