let a = [10,20,30,30,40]

let count = []
a.forEach( function ( ele )
{
   if ( a.indexOf(ele) === a.lastIndexOf(ele)) 
   {
       let temp = {}
       temp[ele] = 1
      count.push(temp)
   }
   else if ( a.indexOf(ele) !== a.lastIndexOf(ele) )  
   {
      let temp = {}
      temp[ele] = occ++
      count.push(temp)
   }
})
console.log(count)
