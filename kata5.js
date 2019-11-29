const urlEncode = function(text) {
let index = text.indexOf(' ', 1)
let newArray = []
if (index != 0 && index != -1) {
newArray = text.splice(index, 1, '%20')
}
return newArray
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));


const urlEncode = function(text) {
  let newArray = []
  let index 
  for (let i = 0; i <text.length; i++) {
    if (text[i] === ' ' && text.indexOf(text[i]) != 0 && text.indexOf(text[i]) != -1 ) {
        index = text.indexOf(text[i])
        newArray = text.splice(index, 1, '%20')
      }
    }
  return newArray
}
  console.log(urlEncode("Lighthouse Labs"));
  console.log(urlEncode(" Lighthouse Labs "));

  const urlEncode = function(text) {
    let newArray = []
    for (let i = 0; i <text.length; i++) {
      if (text[i] === ' ') {
        index = text.indexOf(test[i])
        if (text.indexOf(text[i]) != 0 && text.indexOf(text[i]) != -1 ) {
          newArray = text.splice(index, 1, '%20')
        }
      }
  }
  return newArray
}
    console.log(urlEncode("Lighthouse Labs"));
    console.log(urlEncode(" Lighthouse Labs "));

const urlEncode = function(text) {
let url = ''
let newArray = []
for (let i = 0; i <text.length; i++) {
  if (text[i] === ' ' && text.indexOf(text[i]) != 0 && text.indexOf(text[i]) != -1 ) {

}
return newArray
}
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));

const urlEncode = function(text) {
  text = []
  text.forEach(function(num, number, all) {
    if (num === ' ' && (number != 0 && number != -1)) {
      text.splice(number, 1, '%20')
    }
  })
  return text
}

const urlEncode = function(text) {
  let urlName = ''
  text = text.trim()
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      urlName += '%20'
    } else {
      urlName += text[i]
    }
}
return urlName
}
