const queue = function (val ){
    var collection = []
    this.enqueue = function (val)
    {
       collection.push(val)
    }
    this.dequeue =  () => {
      return collection.shift(val)
    }
    this.front = () => {
       return  collection[0]
    }

}

function prioriyqueue ()
{
    var collection = []
    this.printcollection = () => {
        return collection   
    }
    this.enqueue = function(element){
        //step 1 check if empty, if so push 
        //step 2 compare the priority and  splice it to add at the end of compared(if its bigger)

        if ( this.isEmpty )
        {
            collection.push(element)
        }
        var added = false
        for ( var i = 0 ; i < collection.length ; i++)
        {
            if ( element[1] < collection[i][1])
            {
                collection.splice(i,0,element)
                added = true
            }
        }
        if ( !added )
        {
            collection.push(element)
        }

    }
}