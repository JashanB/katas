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

const makeCase = function(input, case) {
 let string = ''
 if (case.isArray() === true) {
   for (let i = 0; i <case.length; i++) {
     if (case[i] === 'camel') {
      for (let j = 0; j < input.length; j++) {
        if (input[j] === ' ') {
          string +=input[(j+1)].toUpperCase()
          j++
        } else {
          string +=input[j]
        }
      }
     } else if (case[i] === 'pascal') {
  for (let j = 0; j < input.length; j++) {
    if (j === 0) {
      string = input[j].toUpperCase()
    } else if (input[j] === ' ') {
      string +=input[(j+1)].toUpperCase()
      j++
    } else {
      string +=input[j]
    }  
  }
 } else if (case[i] === 'snake') {
  for (let j = 0; j < input.length; j++) {
    if (input[j] === ' ') {
      string += '_'
    } else {
      string +=input[j]
    }  
  }
 } else if (case[i] === 'kebab') {
  for (let j = 0; j < input.length; j++) {
    if (input[j] === ' ') {
      string += '-'
    } else {
      string +=input[j]
    }  
  }
 } else if (case[i] === 'title') {
  for (let j = 0; j < input.length; j++) {
    if (j === 0) {
      string = input[j].toUpperCase()
    } else if (input[j] === ' ') {
      string += ' ' + input[(j+1)].toUpperCase()
      j++
    } else {
      string +=input[j]
    }  
  }
 } else if (case[i] === 'vowel') {
  for (let j = 0; j < input.length; j++) {
    if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
      string += input[j].toUpperCase()
    } else {
      string +=input[j]
    }  
  }
 } else if (case[i] === 'consonant') {
  for (let j = 0; j < input.length; j++) {
    if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
        string +=input[j]
    } else {
      string += input[j].toUpperCase()
    }  
  }
 } else if (case[i] === 'upper') {
  for (let j = 0; j < input.length; j++) { 
    string += input[j].toUpperCase()
 } 
 } else if (case[i] === 'lower') {
  for (let j = 0; j < input.length; j++) { 
    string += input[j].toLowerCase()
 }
}
}
} else {
  if (case === 'camel') {
    for (let j = 0; j < input.length; j++) {
      if (input[j] === ' ') {
        string +=input[(j+1)].toUpperCase()
        j++
      } else {
        string +=input[j]
      }
    }
   } else if (case === 'pascal') {
for (let j = 0; j < input.length; j++) {
  if (j === 0) {
    string = input[j].toUpperCase()
  } else if (input[j] === ' ') {
    string +=input[(j+1)].toUpperCase()
    j++
  } else {
    string +=input[j]
  }  
}
} else if (case === 'snake') {
for (let j = 0; j < input.length; j++) {
  if (input[j] === ' ') {
    string += '_'
  } else {
    string +=input[j]
  }  
}
} else if (case === 'kebab') {
for (let j = 0; j < input.length; j++) {
  if (input[j] === ' ') {
    string += '-'
  } else {
    string +=input[j]
  }  
}
} else if (case === 'title') {
for (let j = 0; j < input.length; j++) {
  if (j === 0) {
    string = input[j].toUpperCase()
  } else if (input[j] === ' ') {
    string += ' ' + input[(j+1)].toUpperCase()
    j++
  } else {
    string +=input[j]
  }  
}
} else if (case === 'vowel') {
for (let j = 0; j < input.length; j++) {
  if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
    string += input[j].toUpperCase()
  } else {
    string +=input[j]
  }  
}
} else if (case === 'consonant') {
for (let j = 0; j < input.length; j++) {
  if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
      string +=input[j]
  } else {
    string += input[j].toUpperCase()
  }  
}
} else if (case[i] === 'upper') {
  for (let j = 0; j < input.length; j++) { 
    string += input[j].toUpperCase()
 } 
 } else if (case[i] === 'lower') {
  for (let j = 0; j < input.length; j++) { 
    string += input[j].toLowerCase()
 }
}
}
}


//Camel case
for (let j = 0; j < input.length; j++) {
  if (input[j] === ' ') {
    string +=input[(j+1)].toUpperCase()
    j++
  } else {
    string +=input[j]
  }
}
//Pascal 
for (let j = 0; j < input.length; j++) {
  if (j === 0) {
    string = input[j].toUpperCase()
  } else if (input[j] === ' ') {
    string +=input[(j+1)].toUpperCase()
    j++
  } else {
    string +=input[j]
  }  
}
//snake
for (let i = 0; i < input.length; i++) {
  if (input[i] === ' ') {
    string += '_'
  } else {
    string +=input[i]
  }  
}
//kebab
for (let i = 0; i < input.length; i++) {
  if (input[i] === ' ') {
    string += '-'
  } else {
    string +=input[i]
  }  
}
//title
for (let i = 0; i < input.length; i++) {
  if (i === 0) {
    string = input[i].toUpperCase()
  } else if (input[i] === ' ') {
    string += ' ' + input[(i+1)].toUpperCase()
    i++
  } else {
    string +=input[i]
  }  
}
//vowel 
for (let i = 0; i < input.length; i++) {
  if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
    string += input[i].toUpperCase()
  } else {
    string +=input[i]
  }  
}
//consonant

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      string +=input[i]
  } else {
    string += input[i].toUpperCase()
  }  
}

