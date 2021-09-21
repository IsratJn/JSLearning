/*let animal = {
    eats: true,
    sleeps:true,
    love(){
        console.log("Animals love unconditionally!!!");
    },
    walk(){

    }
  };
  let rabbit = {
    jumps: true,
    __proto__:animal
  };

  let longEar = {
      earLength:10,
      __proto__:rabbit

  }
  
  //rabbit.__proto__=animal;
  
  // we can find both properties in rabbit now:
  console.log("Rabits eat: "+ rabbit.eats ); 
  console.log("Rabits jump: "+ rabbit.jumps); 
  rabbit.love();
  longEar.love();
  
  rabbit.walk = function() {
    alert("Rabbit! Bounce-bounce!");
  };
  
  rabbit.walk();

  //getter and setter

  let user ={
      name:"Konka",
      surName:"Vaiya",
      get fullName(){
          return `${this.name} ${this.surName}`
      }
  }

  console.log(user.fullName);*/

//this is not affected by prototype

let animal = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  animal.sleep();
  alert(animal.isSleeping);

  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  
  // modifies rabbit.isSleeping
  //rabbit.sleep();
  
  
  //alert(rabbit.isSleeping); // true
   // undefined (no such property in the prototype)


  /*
  //for..each
  let animals = {
    eats: true
  };
  
  let monkey = {
    jumps: true,
    __proto__: animal
  };
  
  for(let prop in monkey) {
    let isOwn = monkey.hasOwnProperty(prop);
  
    if (isOwn) {
      alert(`Our: ${prop}`); // Our: jumps
    } else {
      alert(`Inherited: ${prop}`); // Inherited: eats
    }
  }*/