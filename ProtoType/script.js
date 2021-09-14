let animal = {
    eats: true,
    sleeps:true,
    love(){
        console.log("Animals love unconditionally!!!");
    },
   /* walk(){

    }*/
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