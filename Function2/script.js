//1
function fullName(){
    let firstName = "Israt";
    let lastName = "jahan";
    console.log(firstName+" "+lastName);
}

fullName();

//2

function fullName2(firstName2, lastName2){
   let Name = firstName2 + " "+ lastName2;
   return Name;

}
console.log(fullName2("Fatema","Konka"));

//3
function addNumbers(one , two)
{
    let sum = one + two;
    return sum;
}
let variable = addNumbers(4,8);
console.log(variable);

//4
function area(length,width)
{
     let a= length*width;
     return a;
}
console.log("The area of a rectangle is:"+ area(10,5));

//10

function speed (distance, time){
    let s= distance/time;
    return s;
}
console.log("The speed of a object is:"+ speed(1000,100));

//BMI
function bmi(weight, height)
{
   let bmiOfAPerson = weight/(height*height);
   if(bmiOfAPerson < 18.5)
    {
        console.log('Underweight');
    }
    else if(bmiOfAPerson < 24.9)
    {
        console.log('Normal');
    }
    else if(bmiOfAPerson < 29.9)
    {
        console.log('Overweight');
    }
    else
    {
        console.log('Obese');
    }
}
bmi(70,1.9);

//14

function checkSeason(month)
{
    if(month == "Jan"|| month == "Feb" || month == "Dec"){
        let season = "Winter";
        return  season;
    }
    else if(month == "March"|| month == "April" || month == "May"){
        let season = "Summer";
        return  season;
    }
    else if(month == "June"|| month == "July" || month == "August"){
        let season = "Autumn";
        return  season;
    }
    else{
        let season = "Spring";
        return  season;
    }
}

console.log(checkSeason("July"));
console.log(checkSeason("Feb"));

//level 2
//3
function printArray(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
        //console.log('\n');
    }

}
const realArray = [9,8,7,6,5,4,3,2,1,0];
printArray(realArray);

