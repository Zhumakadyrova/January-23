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
  sum = sum + example[i];
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