var reverse = function (x) {
  let myStr = Math.abs(x).toString()
  let str = myStr.split('').reverse().join('') 

  if (str.length >= 10) {
    let c1 = parseInt(str.substring(0, 5))
    let c2 = parseInt(str.substring(5, 10))

    if (c1 > 21474 || c2 > 83647) {
      return 0
    }
  }

  let num = parseInt(str)
  return x < 0 ? -num : num
}

console.log(reverse(-21))
