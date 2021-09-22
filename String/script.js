//backticks
function sum(a, b) {
    return a + b;
  }
  
  console.log(`1 + 2 = ${sum(1, 2)}.`);

  let guestList = `Guests:
  1.John
  2.Pete
  3.Mary
 `;
 
console.log(guestList);  

let str = `Hello`;

// the first character
console.log( str[0] ); 
console.log( str.charAt(0) );

// the last character
console.log( str[str.length - 1] );

let line = 'Widget with id';

console.log( line.indexOf('Widget')); 
console.log( line.indexOf('widget') ); 
console.log( line.indexOf("id") ); 

let str1 = 'As sly as a fox, as strong as an ox';

let target = 'as';

let pos = 0;
while (true) {
  let foundPos = str1.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

let str2 = "Widget with id";

if (str2.indexOf("Widget") != -1) {
    console.log("We found it"); 
}
//getting a substring
let str3 = "Ekmuthogolap";
console.log( str3.slice(0, 7) ); // 
console.log( str3.slice(7, 12) );

//tasks
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") );

 //check for spam
 
 function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  console.log( checkSpam('buy ViAgRA now') );
  console.log( checkSpam('free xxxxx') );
  console.log( checkSpam("innocent rabbit") );

  