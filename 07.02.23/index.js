function getSum(a, b) {
  console.log ( a + b)
}
getSum(15, 6);
getSum(200, 5);


function getDiv(a, b) {
  console.log (a - b)
}
getDiv(25, 5);
getDiv(30, 50);

function getSum(a, b) {
  console.log (a * b)
}
getSum(30, 20)

function length( x ) {
  console.log ('Слово ' + x +  ' занимает ' + x.length + ' кодовых значений.')
}

length("Karakol");
length("Kyrgyzstan");
length("History of KR");
length("Democracy");

let num = 5;
while (num <= 25) {
  console.log(num)
  num ++
}

let num2 = 6;
while (num2 <=36) {
  console.log(num2)
  num2 +=3
}

for(let a= 10; a >= -10; a--) {
  console.log(a);
}

for(let b = 100; b <= 120; b++) {
  console.log(b);
}

for(let c = 15; c <= 150; c += 20) {
  console.log(c);
}

let example1 = [];
let example2 = [3,4,1,54,33];
let example3 = ["Hello",55,true,null];

let example4 = ["Aijan", "Dastan", "Omurbek"];
example4.push("Nagima"); //adds
example4.unshift("Temirlan"); //adds at the beginning
console.log(example4);

let name1 = example4.pop(); //cut
let name2 = example4.shift(); //adds in the beginning
console.log(example4);

example4[0] = "Aichurok";
console.log(example4);
example4[1] = 1;
console.log(example4);
console.log(example4.length);

console.log("Hello, my name is " + example4[0]);
console.log("Hello, my name is " + example4[1]);
console.log("Hello, my name is " + example4[4]);

for (let i = 0; i < example4.length; i++) {
  console.log("Hello, my name is " + example4[i] + " Nice to meet you.");
}


let example5 = ["Karakol","Talas", "Jalal-Abad", "Naryn", "Osh", "Batken", "Bishkek"];
console.log(example5);
console.log(example5[0]);
console.log(example5[5]);

// 1 type
example5.push("Cities");
 for (let i =0; i < example5.length; i++) {
  console.log("The beatiful city of KR " + example5[i])
 }

// 2 type
for (let name of example4) {
  console.log("Hello, I'm " + name);
}
// 3 type
for(let i in example4) {
  let name = example4[i];
  console.log("Hello my name is " + name);
}