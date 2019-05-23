function solution(A) {
    let  sortedOb={};
    let biggest=0;
    A.forEach(el=>{
        if(el>0)
        {
             sortedOb[el]=0;
              biggest =  el>biggest? el:biggest
        }
    });
    let arr = Object.keys(sortedOb).map(el=>+el);
    if(arr.length==0)
    return 1;
    for(let i = 1; i<=biggest; i ++){
        if(sortedOb[i] === undefined)
        return i
    }
    return biggest+1
}

console.log(solution([1, 3, 6, 4, 1, 2],))