const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))

    //promise setteled with reject

    const doPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          const skills = ['HTML', 'CSS', 'JS']
          if (skills.indexOf('Node') !== -1) {
            resolve('fullstack developer')
          } else {
            reject('Something wrong has happened')
          }
        }, 2000)
      })
      
      doPromise2
        .then(result => {
          console.log(result)
        })
        .catch(error => console.log(error))