function Player (name,age){
    this.name = name
    this.age = age
    this.greet =  function()
    {
        console.log (`hi ${this.name} ${this.age}`)
    }
}

const p1 = new Player('virat', 30)
const p2 = new p1.greet()

p1.greet()
console.log(p2)