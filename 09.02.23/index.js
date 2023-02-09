let num = 5
while (num <= 100) {
  console.log(num)
  num +=10
}
let num1 = 5 
while (num1 >= -15){
  console.log(num1)
  num1 -= 3
}

for(let a= 15; a >= 10; a--) {
  console.log(a);
}

let fruits = ["apple", "pear", "orange"];
console.log(fruits);
console.log(fruits.length);
fruits.push("cherry");
console.log(fruits);
fruits.unshift("appricote");
console.log(fruits);

fruits[0] = "melon";
console.log(fruits);
console.log(fruits.length)

for (let i =0; i <fruits.length; i ++) {
  console.log("Hello, this is a(n) " + fruits[i]);
}

let example = [50, 60, 40, 35];
let sum = 0;
for (let i = 0; i < example.length; i++) {
  sum = sum + example[i]; 150
}
console.log(sum);
// ???? is not clear
square(0); 
function square(num) {
  return num*num
  }
console.log(square(6));
houseArea()
function houseArea(a, b) {
  return " The house area is " + a*b + "m2"
}
console.log(houseArea(7, 8));

function showName(b) {
  return "Hello " + b
}
console.log(showName("Nagima"));
console.log(showName("Temirlan"));
console.log(showName("Nazima"));

function circleArea(d) {
  let r = d / 2;
  let p = 3.14;
  return "The circle area is " + p * r**2;
}
console.log(circleArea(10))

function diamondArea(a) {
  return "The perimeter of diamond is " + (a+a);
}
console.log(diamondArea(15));

let example1 = [30, 50, 60, 40];
let sum1 = 0;
for (let i = 0; i < example1.length; i++) {
  sum1 = sum1 + example1[i]; 
}
console.log(sum1);

function sum2(a, b){
  console.log (a + b)
}
sum2(8, 6);

function sum3(a, b) {
  console.log (a - b)
}
sum3(45, 15);

function sum4(a, b){
  console.log (a + b)
}
sum4(50, 45);

function rectangleArea(a, b) {
  return "Rectangle area is " + (a * b) + " m";

}
console.log(rectangleArea(5, 6));
console.log(rectangleArea(15, 6));

function rectangleArea(a, b) {
  console.log ("Rectangle area is " + (a * b))
}
rectangleArea(10, 12);
rectangleArea(15, 12);

function number(a) { 
  if (number % 2 === 0) {
    console.log ("this number is even");
  }
  else if (number % 2 === 1) {
    console.log ("this number is not even");
  }
  else {
    console.log ("This is wrong command");
  }
}
number(5);

let num2 = 5;
while(num2 <= 10 ) {
  console.log(num2)
  num2 ++
}
let num3 = 10;
while(num3 >= -10) {
  console.log(num3)
  num3 --
}