const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;



const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log("For test data 1:");
console.log("The BMI of mark is: "+ BMIMark);
console.log("The BMI of john is: "+ BMIJohn);
console.log("The BMI of mark is greater than John: "+ markHigherBMI);


/*let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;

console.log("For test data 2:");
console.log("The BMI of mark is: "+ BMIMark);
console.log("The BMI of john is: "+ BMIJohn);
console.log("The BMI of mark is greater than John: "+ markHigherBMI);*/

