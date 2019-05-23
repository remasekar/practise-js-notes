const pokemon = function (name,age) {
    this.name = name
    this.age = age

    this.getname = function (){
        console.log(`hi ${this.name} ${this.age}`)
    }
}

//static method doesnt exist on child objects
pokemon.changename = function (namein)
{
    this.namein = namein
}

//instance method
pokemon.prototype.setname = function (name)
{
    this.name = name
    return this.name
}



var piku = new pokemon('blu', 22)

pokemon.changename('dora')
// piku.changename('dora')
piku.getname()

console.log(piku.setname('boo'))