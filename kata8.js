const multiplicationTable = function(maxValue) {
  let text = '';
  for (let i = 1; i <= maxValue; i++) {
        for (let j = 1; j <=maxValue; j++) {
            text += (i*j).toString() + ' ' 
        }
      text += '\n'
    }
    return text;
  }






const multiplicationTable = function(maxValue) {
  let xAxis = ''
  let yAxis = ''
  for (let y = 1; y <= maxValue; y++) {
      for (let x = 1; x <=maxValue; x++) {
          xaxis = y*x
      }
  }
}

const multiplicationTable = function(maxValue) {
  let xAxis = ''
  let yAxis = ''
  let xText = ''
  let text = ''
  for (let i = 1; i <= maxValue; i++) {
    yAxis += i + ' '
      for (let j =1; j <=maxValue; j++) {
          xAxis += (i*j).toString() + ' '
      }
    xText += xAxis + '\n'
  }
  text = yAxis + '\n' + xText
  return text
}
console.log(multiplicationTable(5));

const multiplicationTable = function(maxValue) {
  let value = '';
  let table = '';
  let text = '';
  for (let i = 1; i <= maxValue; i++) {
      for (let j = 1; j <=maxValue; j++) {
          value = (i*j).toString()
          text += value + ' ' 
      }
    table += text + '\n'
  }
  return table;
}
console.log(multiplicationTable(5));