
let user = {
    nameIs: "John",
    age: 20,
    "likes birds": true,
    "favorite movie": "Chitrangada"

}

console.log(user.nameIs, user.age, user["likes birds"], user["favorite movie"]);

let user1 = {
    name: "John",
    age: 30
};

let key = prompt("What do you want to know about the user?", "name", "age");

console.log(user1[key]);


let user = {};
user.name = ["israt"];
user["surname"] = ["Jahan"];
user.name = ["Pete"];
delete user.name;

console.log(user);