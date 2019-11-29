let numberOfVowels = function(data) {
 let newString = [] 
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
        newString.push(data[i])
    }
  }
  return newString.length
}
console.log(numberOfVowels("lighthouse labs"));