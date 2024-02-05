function zigzag(s, numRows) {
   let result = ''
   let row = 0
   let goingDown = true
   let arrRows = []

   for (let i = 0; i <= numRows; i++) {
     arrRows.push('')
   }

//    console.log(arrRows)

   for (let i = 0; i < s.length; i++) {
     let currStr = s[i]
        arrRows[row]? arrRows[row] += currStr : arrRows[row] = currStr; 

     if (goingDown) {
       row++
     } else {
       row--
     }
     if (row === 0) goingDown = true
     if (row === numRows - 1) goingDown = false
   }
   console.log(arrRows)

   return result.concat(...arrRows)
}

console.log(zigzag("PAYPALISHIRING", 3));
console.log(zigzag("AB", 1));
console.log(zigzag("ABC", 1));