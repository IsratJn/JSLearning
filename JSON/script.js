/*let obj = {
    name: "Israt",
    passion: "Literature"
}
console.log(obj.name, obj.passion);*/
//Json to JS object
const usersText = `{
    "users":[
      {
        "firstName":"Israt",
        "lastName":"Jahan",
        "age":23
      },
      {
        "firstName":"Zakia",
        "lastName":"Prioty",
        "age":25
        
      },
      {
      "firstName":"Fatema",
      "lastName":"Konka",
      "age":22

      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, undefined, 3);
    console.log(usersObj);
    
   //Using a reviver function 
   
   
   const usersText2 = `{
    "users":[
      {
        "firstName":"Israt",
        "lastName":"Jahan",
        "age":23,
        "email":"israt9626@gmail.com"
      },
      {
        "firstName":"Zakia",
        "lastName":"Prioty",
        "age":25,
        "email":"ZSprioty12@gmail.com"
        
      },
      {
      "firstName":"Fatema",
      "lastName":"Konka",
      "age":22,
      "email":"Konka84@gmail.com"

      }
    ]
    }`
    
    const usersObj2 = JSON.parse(usersText2, (key, value) => {
      let newValue =
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
      return newValue
    })
    console.log(usersObj)
    
    //Converting Object to JSON
    const users = {
        Alex: {
          email: 'alex@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        Asab: {
          email: 'asab@asab.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 25,
          isLoggedIn: false,
          points: 50
        },
        Brook: {
          email: 'daniel@daniel.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        Daniel: {
          email: 'daniel@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        John: {
          email: 'john@john.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          points: 50
        },
        Thomas: {
          email: 'thomas@thomas.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        Paul: {
          email: 'paul@paul.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      }
      
      const txt = JSON.stringify(users, undefined, 4)
      console.log(txt) // text means JSON- because json is a string form of an object.
      