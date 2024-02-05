const getAllDays = (begin, end) => {
  const days = []
  console.log("this is days",begin.setDate(begin.getDate() + 1))

  for (let d = begin; d <= end; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d))
  }

  return days
}

console.log(getAllDays(new Date(2019, 0, 1), new Date(2019, 0, 5)))
