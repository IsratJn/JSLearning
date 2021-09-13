/*
let user = {
    nameIs: "John",
    age: 20,
    "likes birds": true,
    "favorite movie": "Chitrangada"

}

console.log(user.nameIs, user.age, user["likes birds"], user["favorite movie"]);
//square notation
let user1 = {
    name: "John",
    age: 30
};

let key = prompt("What do you want to know about the user?", "name", "age");

console.log(user1[key]);

//task
let user2 = {};
user2.name = ["israt"];
user2["surname"] = ["Jahan"];
user2.name = ["Pete"];
delete user2.name;

console.log(user2);*/

//cloning
let user = {
    name:"Israt",
    age:23,
    rStatus:"Single"
} 

let userAnother = {};

/*for(let key in user){
    userAnother[key] = user[key]
}*/
 userAnother = Object.assign({},user)

console.log(userAnother.age);

let movies ={
    one:"Chotushkone",
    two:"22 she Srabon"
}

Object.assign(user,movies);//merging
console.log(user);



//this
let userX = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}


userX.f = sayHi;
admin.f = sayHi;

userX.f(); 
admin.f(); 

admin['f']();