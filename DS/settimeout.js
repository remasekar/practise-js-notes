for ( var i = 0 ; i < 5 ; i++)
{
    setTimeout(function(){
        console.log(i)
    },
    5000)
}
//prints only "5" 5 times
//only one shared binding for all of your loop iterations - i.e. the i in every setTimeout callback means the same variable that finally is equal to 6 after the loop iteration ends.

for ( let i = 0 ; i < 5 ; i++)
{
    setTimeout(function(){
        console.log(i)
    },
    5000)
}
//0 1 2 3 4 ()
//With let you have a block scope and when used in the for loop you get a new binding for each iteration - i.e. the i in every setTimeout callback means a different variable, each of which has a different value: the first one is 0, the next one is 1 etc.

for ( var i = 0 ; i < 5 ; i++)
{
    (function(i){
    setTimeout(function(){
        console.log(i)
    },
    5000)})(i)
}

//0 1 2 3 4 ()