Promise.resolve(5)
  .then((x) => x + 2)
  .then((x) => { throw new Error('My Error') })
  .catch(() => 3)
  .then((x) => x + 7)
  .then((x) => console.log(x))
  .catch(console.error)

  