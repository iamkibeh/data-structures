function longestPalindromeSubString(str) {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length; j > i; j--) {
      let subStr = str.slice(i, j);
      if (isPalindrome(subStr) && subStr.length > longest.length) {
        longest = subStr;
        break; // Added a break statement to exit the loop early if a longer palindrome is found
      }
    }
  }
  return longest;
}

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(longestPalindromeSubString("abaxyzzyxf"));
console.log(longestPalindromeSubString("a"));
console.log(longestPalindromeSubString("aa"));
console.log(longestPalindromeSubString("aba"));
console.log(longestPalindromeSubString("ababa"));
console.log(longestPalindromeSubString("babad"))