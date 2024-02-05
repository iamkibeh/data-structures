// console.log('Starting')
// function solution(A) {
//   var sol = A.filter((y) => y % 4 == 0)
//   console.log(sol)
//   return sol.length ? sol.sort((a, b) => b - a)[0] : null
// }

// console.log(solution([-6, -91, 1011, -100, 84, -22, 0, 1, 473, 20]))

// function solution(S) {
//   console.log('hello')
//   for (let i = 0; i < S.length; i++) {
//     for (let j = i + 1; j < S.length; j++) {
//       for (let k = 0; k < S[i].length; k++) {
//         if (S[i][k] === S[j][k]) {
//           return [i, j, k]
//         }
//       }
//     }
//   }
//   return []
// }

// console.log(solution(['abc', 'bca', 'dbe']))
// function solution(s) {
//   let left = 0
//   let right = 0
//   let longestLength = 0
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '<') {
//       left++
//     } else if (s[i] === '>') {
//       right++
//     }
//     if (left === right) {
//       longestLength = Math.max(longestLength, 2 * left)
//     } else if (left < right) {
//       left = 0
//       right = 0
//     }
//   }
//   left = 0
//   right = 0
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === '<') {
//       left++
//     } else if (s[i] === '>') {
//       right++
//     }
//     if (left === right) {
//       longestLength = Math.max(longestLength, 2 * left)
//     } else if (right < left) {
//       left = 0
//       right = 0
//     }
//   }
//   return longestLength
// }

// console.log(solution('<><??>>'))
// console.log(solution('<<?'))

// function longestSymmetricString(str) {
//   let longestLength = 0
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       let substring = str.substring(i, j)
//       if (isSymmetric(substring) && substring.length > longestLength) {
//         longestLength = substring.length + 1
//       }
//     }
//   }
//   return longestLength
// }

// function isSymmetric(string) {
//   return string === string.split('').reverse().join('')
// }

// console.log(longestSymmetricString('<><??>>'))
// console.log(longestSymmetricString('<<?'))
// console.log(longestSymmetricString('<>??>>'))
// console.log(longestSymmetricString('?<<>>??'))

// console.log(solution('<>??>>'))

// function solution(s) {
//   let left = 0
//   let right = 0
//   let longestLength = 0
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '<') {
//       left++
//     } else if (s[i] === '>') {
//       right++
//     }
//     if (left === right) {
//       longestLength = Math.max(longestLength, 2 * left)
//     } else if (left < right) {
//       left = 0
//       right = 0
//     }
//   }
//   left = 0
//   right = 0
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === '<') {
//       left++
//     } else if (s[i] === '>') {
//       right++
//     }
//     if (left === right) {
//       longestLength = Math.max(longestLength, 2 * left)
//     } else if (right < left) {
//       left = 0
//       right = 0
//     }
//   }
//   return longestLength
// }

// lucy

function solution(S) {
  let stringLength = S.length
  let leftSide = 0
  let rightSide = stringLength - 1
  let longestLength = 0
  let leftCount = 0
  let rightCount = 0
  let leftReplace = 0
  let rightReplace = 0
  // Iterate through the string from both ends
  while (leftSide <= rightSide) {
    // If current characters are "<" or "?"
    if (S[leftSide] === '<' || S[leftSide] === '?') {
      if (S[leftSide] === '?') leftReplace++
      leftCount++
    }
    // If current characters are ">" or "?"
    if (S[rightSide] === '>' || S[rightSide] === '?') {
      if (S[rightSide] === '?') rightReplace++
      rightCount++
    }
    // If leftCount is equal to rightCount
    // this means we have found a symmetric substring
    if (leftCount === rightCount) {
      longestLength = Math.max(longestLength, 2 * leftCount)
    }
    // If
    // If leftCount is not equal to rightCount
    // check if we can use '?' to make them equal
    else if (leftCount - leftReplace === rightCount - rightReplace) {
      longestLength = Math.max(
        longestLength,
        2 * leftCount - (leftReplace + rightReplace)
      )
      rightCount = 0
      leftCount = 0
      leftReplace = 0
      rightReplace = 0
    } else {
      leftCount = 0
      rightCount = 0
      rightReplace = 0
      leftReplace = 0
    }
    leftSide++
    rightSide--
  }
  return longestLength
}

console.log(solution('?<<<>>>?'))
console.log(solution('<>??>>'))
console.log(solution('?<<<>>>?'))
console.log(solution('?<<>>??'))
