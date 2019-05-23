var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

//bind - function express like variable = functionname.bind(obj) and pass argumnets to the variable
//bind once after it is defined need to be invoked
var logPokemon = pokemonName.bind(pokemon)

logPokemon("maggi","maths")

// call - function_name.call(obj,<individual arguments)
//unlike bind , it invokes on its own 

// pokemonName.call(pokemon,"call-maggi","call-maths")

//apply  same as call except it takes array to pass to this "this" reference in the function

//pokemonName.call(pokemon,["apply-maggi","apply-maths"])