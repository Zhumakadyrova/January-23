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
example4[1] = "Azira";
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
// 4 type
example4.forEach(function (name, i) {
  console.log("Hello... " + name);
});
// 5 type rounds
//  while (example4.length > 0) {
//   console.log(example4.pop());
//  }

console.log(example4)
example4.forEach(function (name, i) {
  console.log(" the length is " + name.length)
})

console.log(example4)
example4.forEach(function (name, i) {
  console.log(name.toUpperCase())
})

example5.forEach(function (city, i) {
  console.log(city.toUpperCase())
})

let example6 = ["I", "love", "Karakol"];
let result = "";
for (let i = 0; i , i < example6.length; i++) {
  result = result + example6[i] + " ";
}
console.log(result);

let example7 = [54, 11, 14, 21, 3, 110];
let sum = 0;
for (let i = 0; i < example7.length; i++) {
  sum = sum + example7[i];
}
console.log(sum);

function getSum(a, b) {
  console.log(a + b)
}
getSum(5, 6);

function getNumber(a, b) {
  console.log(a ** b)
}
getNumber(6, 2);

function getDiv(a, b) {
  console.log(a / b)
}
getDiv(100, 5);
 function displayMessage() {
  console.log("hello it's me.")
 }
 displayMessage();
 function findSquare(num) {
  return num*num
 }
 console.log(findSquare(5))

 function findSquare(degree) {
  return degree ** degree
 }
 console.log(findSquare(6));

 function calFahrenheit(cel) {
  return (cel*9/5)+32;
 }
 console.log(calFahrenheit(6))
 console.log(calFahrenheit(8))

 function rectangleArea (a, b) {
  return "The area of rectangle is " + a * b
 }
 console.log(rectangleArea(10, 5))

 function rectangleArea (a, b) {
  return "The area of rectangle is " + a * b
 }
 console.log(rectangleArea(9))

 function reverseNum(num) {
  var reverse = 0;
  while(num != 0)
  {
    reverse = reverse * 10;
    reverse = reverse + num%10;
    num = Math.trunc(num/10);
  }
  return reverse;
 }

 console.log(reverseNum(567))