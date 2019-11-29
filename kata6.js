const repeatNumbers = function(data) {
  let string = ''
  let multiplyBy
  let number
  let stringString = ''
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      multiplyBy = data[j].pop()
      number = data[j].shift()
      for (let z = 0; z < multiplyBy; z ++) {
        string += number 
      }
    }
    if (i < data.length -1) {
      string += ', '
    }
  }
  return string
}
