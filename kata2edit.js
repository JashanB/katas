let conditionalSum = function(values, condition) {
  let arrayEven = []
  let arrayOdd = []
  let sum = 0
  if (condition === 'even') {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
          sum += values[i]
        }
      }
  } else if (condition === 'odd') {
    for (let i = 0; i < values.length; i++) {
          sum += values[i]
        }
  } else {
    return 0
  }
  return sum
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));