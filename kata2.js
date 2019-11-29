let conditionalSum = function(values, condition) {
  values = []
  condition = ""
  for (let i = 0; i < values.length; i++) {
    if (condition === 'even') {
      if (values[i] % 2 === 0) {
        return values[i]
      } 
    } else if (condition === 'odd') {
      if (values[i] % 2 != 0) {
        return values[i]
      }
    }
    }
  }
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));

let conditionalSum = function(values, condition) {
 let sum = 0
  for (let i = 0; i < values.length; i++) {
    if (condition === 'even' && values[i] %2 === 0) {
      sum += values[i]
    } else if (condition === 'false' && values[i] %2 != 0) {
      sum += values[i]
    } else {
      return 0
    }
    return sum
  }
}


let conditionalSum = function(values, condition) {
  let even = []
  let odd = []
  for (let i = 0; i < values.length; i++) {
   if (values[i] %2 === 0) {
    case1.push(values[i])
   } else if (values[i] % 2 != 0) {
     case2.push(values[i])
   }
  if (condition === 'even') {
      for (let j = 0; j < case1.length; j++) {
        even += case1[j]
        return even
  } else if (condition === 'odd') {
    for (let z = 0; z < case2.length; z++) {
      odd += case2[j]
      return odd
    }
  }
 }
  return even
  return odd
}
if (condition === 'even') {
  return even;
} else if (condition === 'odd') {
  return odd;
} else {
  return 0;
}
}
console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));

let conditionalSum = function(values, condition) {
  values = []
  let sum1
  let sum2
  for (let i = 0; i < values.length; i++) {
  let even = values.filter(num => values[i] %2 === 0);
    for (let j = 0; j < even.length; j++) {
      sum1 += even[j]
    }
  let odd = values.filter(num => values[i] %2 != 0);
  for (let z = 0; z < even.length; z++) {
    sum2 += odd[z]
  }
}
if (condition === 'even') {
  return sum1;
} else if (condition === 'odd') {
  return sum2;
} else {
  return 0;
}
}
console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));

let conditionalSum = function(values, condition) {
  values = []
  for (let i = 0; i < values.length; i ++) {
  if (condition === 'even') {
    const even = values.filter(num => )
  } else if (condition === 'odd') {
    return sum2;
  } else {
    return 0;
  }


let conditionalSum = function(values, condition) {
  let even = []
  let odd = []
  if (condition === 'even') {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        even.push(values[i])
      }
    }
  } else if (condition === 'odd') {
    for (let i = 0; i < values.length; i++) {
      if (values[i] %2 != 0) {
        odd.push(values[i])
      }
    }
  } else {
    return 0
  }
}