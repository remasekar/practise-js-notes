let arr=[5, 5, 5, 2, 2, 2, 2, 2, 9, 4] 

let a = arr.reduce((acc,curr) => {

    if ( !acc[curr] )
    {
       acc[curr] = 1 
    }
    else
    {
        acc[curr] += 1
    }
    return acc

},{})

console.log(a)