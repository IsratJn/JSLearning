const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeRed() {
      const p = document.querySelector('p');
      p.style.color = 'red';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello')
    // Interpolated
    console.log('Hello %s There!!','Rahim');
    // Styled
    console.log('%c This is a style text!','font-size : 50px;background:red')
    // warning!
    console.warn('A warning!');
    // Error :|
    console.error('An Error');
    // Info
    console.info('A Info with i')
    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'),'this is false');  
    // clearing
    console.clear();
    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach((dog)=>{
        console.groupCollapsed(`${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`)
        console.groupEnd(`${dog.name}`);
    })
    // counting
    console.count('dog')
    console.count('cat')
    console.count('dog')
    console.count('cat')
    console.count('dog')

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data =>{
            console.timeEnd('fetching data');
            console.log(data);
        })