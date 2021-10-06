//Static Methods of promise class
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(alert);

  let urls = [
    'https://api.github.com/users/IsratJn',
    'https://api.github.com/users/Fazle-Rakib',
    'https://api.github.com/users/konka84'
  ];
  
  // map every url to the promise of the fetch
  let requests = urls.map(url => fetch(url));
  
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => alert(`${response.url}: ${response.status}`)
    ));


let names = ['Israt', 'Rakib', 'Konka'];

let requestName = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requestName)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => alert(user.name)));


  let urls2 = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];
  
  Promise.allSettled(urls2.map(url2 => fetch(url2)))
    .then(results => { // (*)
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          alert(`${urls2[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
          alert(`${urls2[num]}: ${result.reason}`);
        }
      });
    });

  