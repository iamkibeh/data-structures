// initiall string s of length n is given . N-1 operations are done. move the first letter to end. How many times is the first letter of s same as the last letter?
// given s= "abbaa" output is 3 ie abbaa - bbaaa  - baaab - aaab - aabba ;

function solution(s) {
  let result = 0
  let firstLetter = s[0]
  let lastLetter = s[s.length - 1]
  if (firstLetter === lastLetter) result++

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[s.length - 1]) {
      result++
    }
    firstLetter = s[i + 1]
    lastLetter = s[i]
  }
  return result
}

function solution(s) {
  let result = 0
  let n = s.length
  if (s[0] === s[n - 1]) result++

  for (let i = 1; i < n; i++) {
    s.substring(i, n) + s.substring(0, i)
    if (s[0] === s[n - 1]) result++
  }
  return result
}

console.log(solution('abbaa')) // 3
console.log(solution('abbaaa')) // 4
console.log(solution('abbaaaa')) // 5
