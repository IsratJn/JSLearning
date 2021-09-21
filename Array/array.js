/*const favoriteMovies = ['Asha Jawar Majhe', 'Wake up sid', 'Titli'];
console.log("The first element:" + favoriteMovies[0]);
console.log("The last element:" + favoriteMovies[favoriteMovies.length - 1]);
console.log(favoriteMovies);


const Israt = ['Israt', 2021 - 1998, favoriteMovies];
console.log("Name:" + Israt[0]);
console.log("Age:" + Israt[1]);
console.log("Favorite movies are:" + Israt[Israt.length - 1]);

//Function practice
function addTwoNumbers(a, b) {
    let sum = a + b
    return sum
}
console.log(addTwoNumbers(5, 5));

function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum;
}

console.log(sumTwoNumbers(10, 20));

//function with many parameter

function sumOfArrays(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumOfArrays(numbers));

//function with unlimited numbers

function sumOfNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
console.log(sumOfNumbers(10, 20, 40, 50));

//arrow function ;
const square = n => {
    return n * n
}

console.log(square(3));

const changeToUpperCase = arr => {
    const newArr = [];
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr;
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))



//array can hold mixed data

let array2 = [1,5,"Israt",function () 
{alert("Salamu alaikum");
}
];
console.log(array2[1]);
array2[3]();*/

//methods that work at the end of an array

let fruits = ["Apple","Guava","Banana","Berry","Litchi"];
fruits.pop();//Last element ta se soray felbe
alert("After popping: " +fruits);

fruits.push("WaterMelon");
alert("After pushing: " +fruits);

// methods thaat work at the begining of an array

//fruits.shift();
//alert("After shifting: " +fruits);//first element shoray felse

fruits.unshift("Dragon fruit");
alert("After unshifting: " +fruits);

let pracObject = {
    nameF:"Israt",
    nameL:"Jahan"
}
console.log(pracObject.nameF,pracObject.nameL);




