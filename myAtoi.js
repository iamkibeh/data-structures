var myAtoi = function (s) {
  let str = s.trim()
  let numbers = parseInt(str.match(/[-]?[0-9]/gi).join(''), 10)
  return numbers
}

console.log(myAtoi('helssc lo  -123'))
