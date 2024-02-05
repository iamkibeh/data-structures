// function solution(A,k){
//     let result = [...A];
//     const elementsToRotate = result.splice(result.length-k)
//     // console.log(elementsToRotate)
//     // console.log(result)
//     return [...elementsToRotate, ...result]
// }

function solution(A,k){
    let result = [...A];
    for(let i = 0; i < k; i++){
        const lastElement = result.pop();
        result.unshift(lastElement);
    }
    return result;
}

console.log(solution([1,2,3,4,5], 1))
console.log(solution([1,2,3,4,5], 2))
console.log(solution([1,2,3,4,5], 3))
console.log(solution([1,2,3,4,5], 4))
console.log(solution([1,2,3,4,5], 5))
console.log(solution([1,2,3,4,5], 6))
console.log(solution([1,2,3,4,5], 7))
console.log(solution([1,2,3,4,5], 8))