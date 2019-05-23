function isPal(str){
    return [...str].reverse().join('') === str
  }
  
  function isPrime(num){
    if(num === 3 || num === 2) return 'YES';
    if(num === 1) return 'NO';
    if(num % 2 === 0) return 'YES';
    
    for(let i = 3;i<Math.sqrt(num) + 1;i+=2){
      if(num % i === 0) return 'NO';
    }
    return 'YES';
  }
  
  function check(str){
    let l = str.length - 1;
    while(l>1){
      for(let i = 0;i<str.length-l;i++){
        let temp = str.slice(i,l);
        if(isPal(temp)) return isPrime(l)
      }
      l--;
    }
    return 'NO';
  }
  
  console.log(check("random12321random")) //true
//   console.log(check("123454321")) // false