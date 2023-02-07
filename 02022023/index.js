function printMyName(){
  console.log("Nagima");
}
printMyName();

function myColor() {
  console.log("White");
}
myColor();
function printMyCountry() {
  console.log("Kyrgyzstan");
}

function myTown() {
  console.log("Karakol"); 
}
printMyCountry();
printMyCountry();

function myHobby() {
  console.log("Hiking");
}
myHobby();
function coffeeHouse() {
  console.log("Light House");
}
coffeeHouse();

function parrentsHouse() {
  console.log("Issyk-Kul");
}
parrentsHouse();
function area() {
  console.log( "North");
}
area()
function capitalOfTheCountry () {
  console.log("Bishkek");
}
capitalOfTheCountry ();

function mountain (){
  console.log("My favorite mountain is Olimp");
}
 mountain();

function capital (a, b) {
  console.log(a + " is the capital of " + b)
}
capital("Parish", "France");

function area(width, height) {
  let result = width * height;
  return result
}
let a = area(5, 5);
let b = area(6, 6);

if (a <= b) {
  console.log("Yes it does");

}
else {
  console.log("No it doesn't");
}

// function diamond(width, height) {
//   let result = width + height
// }
function getUSD(kgs) {
  return kgs * 87.5;
}
let example1 = getUSD(100);
let example2 = getUSD(150);

console.log(example1);
console.log(example2);

function getF(c) {
  return c * 1.8 + 32;
}
let example3 = getF(28);

console.log(example3)

function getKilometers(m) {
  return m * 1.62;
}
let example4 = getKilometers(30);
console.log(example4);

function getInch(i) {
  return i * 2.54;
} 
let example5 = getInch(30);
console.log(example5);


// ROUND/ Series



let i = 1;
console.log(i);
i = 2; 
console.log(i);

i = i + 1;
console.log(i);

i += 8;
console.log(i);

i++;
console.log(i);


let num = 50;
while (num <=100) {
  console.log(num);
  num +=2;
}

let number = 10;
while (number >=1) {
  console.log(number);
  number -=1;
  
}
let num1 = 6000;
while (num1 >= 100) {
  console.log(num1);
  num1 -=100;
}

for (let a = 1; a <= 10; a ++) {
  console.log(a);
}

for (let b = 10; b <=90; b +=15) {
  console.log(b);
}
for (let a = 10; a >= 1; a --) {
  console.log(a);
}

let car1Fuel = 10;
let car2Fuel = 15;
let fuel = 50;

let distance = "";
for (let i = 0; i <= fuel; i += car1Fuel) {
  distance += "-";
}
console.log(distance);

distance = "";
for (let i = 0; i <= fuel; i += car2Fuel) {
  distance += "-";
}
console.log(distance);

let num3 = 100;
for (let a = 100; a >= 10; a -=10) {
  console.log(num3);
}

let num5 = 50;
while (num5 <=50);{
  console.log(num5);
  num5
}
