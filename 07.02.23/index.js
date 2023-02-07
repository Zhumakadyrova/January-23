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