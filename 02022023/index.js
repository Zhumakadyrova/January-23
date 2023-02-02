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
