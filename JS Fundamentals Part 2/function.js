function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1998);
  

  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  
  console.log("My age will be: "+age1);
  console.log("Willson's age will be: "+age2);






console.log("Part 2: Arrow Function");   
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1998);
console.log("Samantha's age :"+ age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1998, 'Israt'));
console.log(yearsUntilRetirement(1980, 'Bob'));





console.log("Part 3: Functions Calling Other Functions");
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
