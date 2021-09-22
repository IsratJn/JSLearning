let user = {
    name: "Israt",
    age: 23,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };
  
  console.log(user); 

  let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); 
  
  console.log(json);

  let room = {
    number: 23
  };
 //Replacer 
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room 
  };
  
  room.occupiedBy = meetup;
  
  console.log( JSON.stringify(meetup, ['title', 'participants']) );
  
//Formatting Spacer
  let user2 = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };
  
  console.log(JSON.stringify(user2, null, 2));

  //Using reviver

  let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;
  
  schedule = JSON.parse(schedule, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });
  
  alert( schedule.meetups[1].date.getDate() );