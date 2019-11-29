const urlDecode = function(text) {
  text = text.replace(/%20/g, ' ')
  let object = {}
  let i = text.indexOf('=')
   let first = ''
   let second = ''
   let third = ''
  if (text.includes('&') === true) {

  for (let j = 0; j < i; j++) {
    first += text[j]
  }
  text = text.slice((i +1), (text.length))
  let x = text.indexOf('&')
  for (let z = 0; z < x; z++) {
    second += text[z]
  }
  object[first] = second
  text = text.slice((x+1), (text.length))
  let two = text.indexOf('=')
  for (let z = 0; z < two; z++) {
    third += text[z]
  }
   text = text.slice((two+1), (text.length))
    object[third] = text
    return object
} else {
  for (let j = 0; j < i; j++) {
    first += text[j]
  }
  text = text.slice((i +1), (text.length))
  object[first] = text
  return object
}
}

// const toEqual = function(input) {
//   let i = Array.text.indexOf('=')
//   for (let j = 0; j <= i; j++) {
//      first += text[j]
//      text = text.slice(0, i)
//      object 

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));