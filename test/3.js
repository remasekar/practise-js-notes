
function solution(M) {
    M = JSON.parse(M)
    console.log(M)
    
    // M is now your relationship matrix SxS
    let numCircles = 0
    const visited = new Set ()
    M.forEach ((row, i) => {
        if (visited.has(i)) return
        numCircles++
        const queue = row.map((x, i) => x ? i : -1) . filter ((x) => x > -1)
        while (queue.length > 0) {
            const f = queue.pop ()
            if (!visited.has(f)) {
                visited.add (f)
                queue.push(... M[f].map((x, i) => x ? i : -1) . filter ((x) => x > -1))
            }
        }
    })
    return numCircles
}

let M = [ [1,1,0], [1,1,0], [0,0,1] ]
console.log(solution(M))