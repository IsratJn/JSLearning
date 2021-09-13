
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


let user2 = {};
user2.name = ["israt"];
user2["surname"] = ["Jahan"];
user2.name = ["Pete"];
delete user2.name;

console.log(user2);