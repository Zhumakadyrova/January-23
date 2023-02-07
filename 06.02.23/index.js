let num = 60;
while (num <= 100) {
  console.log(num);
  num +=5
}

let num2 = 80;
while (num2 >= 20) {
  console.log(num2);
  num2 -=10;
}

for (let a = 5; a >= 0; a --) {
  console.log(a)
}

let num3 = 1000;
for (let b = 1000; b >= 500; b -=100) {
  console.log(b)
}
for (let c = 500; c >= 100; c -=30) {
  console.log(c)
}
for (let e = 100; e <= 1500; e += 150) {
  console.log(e)
}

function getE(kgs) {
  return kgs * 94.8;
}
let ex1 = getE(150);
let ex2 = getE(200);

console.log(ex1);
console.log(ex2);

function coffee() {
  console.log("latte");
}
coffee();

function Karakol() {
  console.log("Capital of winter tourism")

}
Karakol();

