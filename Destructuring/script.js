const numbers = [1, 2, 3]
  let [numOne, numTwo, numThree] = numbers;

  console.log(numOne, numTwo, numThree);

  /*const names = ['Satyajit', 'Mrinal', 'Tapan', 'Ritwick']
  let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

  console.log(firstPerson, secondPerson,thirdPerson, fourthPerson);*/


  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack;
  
  console.log(frontEnd);
  console.log(backEnd) ;

  const num = [1, 2, 3]
  let [numO, , numT] = num;

  console.log(numO, numT);

  const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

//during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}

//Destrucuring Object
/*const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter)*/

  //renaming during destructuring

  const rect = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width: w, heigh: h, area: a, perimeter: p } = rect
  
  console.log(w, h, a, p)
  
  const rectangle = {
    width: 30,
    height: 10,
    area: 200,
    perimeter: 80
  }
  let { width, height, area, perimeter = 60 } = rectangle
  console.log(width, height, area, perimeter) 
  
  //object parameter without destructuring

  
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }
  // Lets create a function which give information about the person object without destructuring
  
  const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
      obj.age
    } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
  
  console.log(getPersonInfo(person))
  
 //Destructuring object during iteraton
 
 const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]
    
    for (const {task, time, completed} of todoList){
      console.log(task, time, completed)
    }
    