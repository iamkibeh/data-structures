function solution(A) {
    // minimum number of trees we have to plant in order to make every foeled

    let minTrees = 0
    for (let i = 0; i < A.length; i++) {
      if (A[i] < 0) {
        minTrees += Math.abs(A[i])
        A[i] = 0
      }

      if (i < A.length - 1) {
        A[i + 1] += A[i]
      }
    }
    return minTrees
}
console.log(solution([1,-3,2]))