const arr = [10,20,30]

// for ( let i = 0 ; i < arr.length ; i++)
// {
//     (function (i){
//     setTimeout(function () {
//         console.log( "print" , arr[i])

//     },3000)})(i)
// }

// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 3000);
// }

for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    })(i);
}