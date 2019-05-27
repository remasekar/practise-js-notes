// callabcks are nothing but higher order functions

add = function ( a,b)
{
    return a+ b
}

let calc = function ( n1,n2,callback)
{
    return callback(n1,n2)
}

console.log(calc(10,20,add))

