const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;



const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI  is higher than John's!");
  } else {
    console.log("John's BMI is higher than Marks's!");
  }

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}