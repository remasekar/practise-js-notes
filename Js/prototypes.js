
let arr = 10

function particle ()
{   
    this.x = 100,
    this.y = 200
     this.greet = function () {
        return x
    }
}
function confetti ()
{
    particle.call(this)
}

particle.prototype.show = function() {
    point(  this.x,this.y) 
}
p = new particle()
let v = new particle()
v.x=20



let c = new confetti()

// BELOW IS THE REASON WHY WE NEED TO HAVE SHARED FUNCTION UNDER PROTOTYPE
//p
// particle {x: 100, y: 200, greet: ƒ}
// v 
// particle {x: 20, y: 200, greet: ƒ}
//from console
// p.hasOwnProperty('x')
// true
// p.hasOwnProperty('show') => WILL BE ABLE TO CHECK IF THAT IS FROM OBJECT INSTANCE OR FROM PROTOTYPE
// false


// new key word executes the function as constructor function and make new object

//INHERTANCE

//create prototype based on the particlet but not overwritten
// if we use this confetti.prototype = particle.prototype will override
// so use object.create()
// confetti.prototype = object.create(particle.prototype)

// to get its own constructor it should have confetti.prototype.constructor = confetti
