function human (name)
{
    this.name = name
}
human.prototype = {
    
    talk: function() {
        console.log(`hi im ${this.name}`)
    }
}

function work ( job)
{
    this.job = job
}
work.prototype = {
    work: function() {
        console.log(`and my job is ${this.job}`)
    }
}

function player (name,job)
{
    human.call(this,name)
    work.call(this,job)
}

player.prototype = Object.create(human.prototype)
Object.assign(player.prototype,work.prototype)

const p1 = new player("rema","engineer")

p1.talk()
p1.work()
console.log(p1)