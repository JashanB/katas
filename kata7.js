let camelCase = function(input) {
  let string = ''
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      string +=input[(i+1)].toUpperCase()
      i++
    } else {
      string +=input[i]
    }
  }
  return string
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));