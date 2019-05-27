
function add ()
{
    let total = 0
    for (let i =0; i < arguments.length; i++)
    {
        total += arguments[i]
    }
    return total
}

console.log(add(10,20))
console.log(add(10,20,30,40))


