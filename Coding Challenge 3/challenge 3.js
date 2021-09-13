 const dolphinsScore = (96 + 108 + 89) / 3;
 const koalasScore = (88 + 91 + 110) / 3;
 const min=100;
 
 console.log("The average score of the dolphins: "+dolphinsScore);
 console.log("The average score of the koalas: "+koalasScore);


 if (dolphinsScore > koalasScore) {
   console.log('Dolphins win the trophy 🏆');
         }
 else if (scoreKoalas > scoreDolphins) {
   console.log('Koalas win the trophy 🏆');
         } 
 else if (scoreDolphins === scoreKoalas) {
   console.log('Both win the trophy!');
        }

console.log("Bonus:")
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;


if (scoreDolphins > scoreKoalas && scoreDolphins >= min) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= min) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= min && scoreKoalas >= min) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}