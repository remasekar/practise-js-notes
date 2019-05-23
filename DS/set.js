function mySet () {
    var collection = []

    //check the presence of element in array
    this.has = function (element){
        return (collection.indexOf(element) !== -1 )
    }
        // this method will return all the values in the set
     this.values = function () {
         return collection
     }
     //    // this method will add an element to the set
    this.add = function (element)
    {
        if(!this.has(element))
        {
            collection.push(element)
            return true 
        }
        else
        {
            return false
        }
    }
     // this method will remove an element from a set
     this.remove = function (element){
         if (this.has(element))
         {
             index = collection.indexOf(element)
             collection.splice(index,1)
             return true
         }
         else{
             return false
         }
     }
     // this method will return the size of the collection
     this.size = function ()
     {
         return collection.length
     }
      // this method will return the union of two sets
      this.union = function(otherset){
          var firstset = this.values()
          var seconset = otherset.values()
          var unionset = new mySet()
          firstset.forEach(function(e)
          {
              unionset.add(e)
          })
          seconset.forEach(function(e){
              unionset.add(e)
          })
          return unionset
      }

          // this method will return the intersection of two sets as a new set
       this.intersection = function(otherset){
           var intersectionset = new mySet()
           var firstset = this.values()
           firstset.forEach(function(e)
           {
               if ( otherset.has(e))
               {
                   intersectionset.add(e)
               }
           })
           return intersectionset
       }

       // this method will return the difference of two sets as a new set
       this.difference = function(otherset){
           var differenceset = new mySet()
           var firstset = this.values()
           firstset.forEach(function(e)
           {
               if(! otherset.has(e))
               {
                   differenceset.add(e)
               }
           })
           return differenceset
       }
    // this method will test if the set is a subset of a different set
    this.subset = function(otherset)
    {
        var subset = new mySet()
        var firstset = this.values()
        firstset.every(function(value)
        {
            return otherset.has(value)
        })
    }
}