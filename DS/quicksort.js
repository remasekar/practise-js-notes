function quicksort( arr)
{
    if ( arr.length <= 1 )
    {
        return arr 
    }
    const [ pivot,...rest ] = arr
    const  left = []
    const right = []
    rest.forEach ( el => el < pivot ? left.push(el) : right.push(el))
    return quicksort(left).concat(pivot).concat(quicksort(right))
}


console.log(quicksort( [1,5,34,1,7,10,3,1] ) )