const makeCase = function(input, second) {
  let string = ''
  if (Array.isArray(second) === true) {
    for (let i = 0; i <second.length; i++) {
      if (second[i] === 'camel') {
       for (let j = 0; j < input.length; j++) {
         if (input[j] === ' ') {
           string +=input[(j+1)].toUpperCase()
           j++
         } else {
           string +=input[j]
         }
       }
      } else if (second[i] === 'pascal') {
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
  } else if (second[i] === 'snake') {
   for (let j = 0; j < input.length; j++) {
     if (input[j] === ' ') {
       string += '_'
     } else {
       string +=input[j]
     }  
   }
  } else if (second[i] === 'kebab') {
   for (let j = 0; j < input.length; j++) {
     if (input[j] === ' ') {
       string += '-'
     } else {
       string +=input[j]
     }  
   }
  } else if (second[i] === 'title') {
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
  } else if (second[i] === 'vowel') {
   for (let j = 0; j < input.length; j++) {
     if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
       string += input[j].toUpperCase()
     } else {
       string +=input[j]
     }  
   }
  } else if (second[i] === 'consonant') {
   for (let j = 0; j < input.length; j++) {
     if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
         string +=input[j]
     } else {
       string += input[j].toUpperCase()
     }  
   }
  } else if (second[i] === 'upper') {
   for (let j = 0; j < input.length; j++) { 
     string += input[j].toUpperCase()
  } 
  } else if (second[i] === 'lower') {
   for (let j = 0; j < input.length; j++) { 
     string += input[j].toLowerCase()
  }
 }
      input =string
 }
 } else {
   if (second === 'camel') {
     for (let j = 0; j < input.length; j++) {
       if (input[j] === ' ') {
         string +=input[(j+1)].toUpperCase()
         j++
       } else {
         string +=input[j]
       }
     }
    } else if (second === 'pascal') {
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
 } else if (second === 'snake') {
 for (let j = 0; j < input.length; j++) {
   if (input[j] === ' ') {
     string += '_'
   } else {
     string +=input[j]
   }  
 }
 } else if (second === 'kebab') {
 for (let j = 0; j < input.length; j++) {
   if (input[j] === ' ') {
     string += '-'
   } else {
     string +=input[j]
   }  
 }
 } else if (second === 'title') {
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
 } else if (second === 'vowel') {
 for (let j = 0; j < input.length; j++) {
   if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
     string += input[j].toUpperCase()
   } else {
     string +=input[j]
   }  
 }
 } else if (second === 'consonant') {
 for (let j = 0; j < input.length; j++) {
   if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
       string +=input[j]
   } else {
     string += input[j].toUpperCase()
   }  
 }
 } else if (second === 'upper') {
   for (let j = 0; j < input.length; j++) { 
     string += input[j].toUpperCase()
  } 
  } else if (second === 'lower') {
   for (let j = 0; j < input.length; j++) { 
     string += input[j].toLowerCase()
  }
 }
 }
  return string
 }
 console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

//edit2 
const makeCase = function(input, second) {
  let string = ''
  let string2 = ''
  if (Array.isArray(second) === true) {
    for (let i = 0; i <second.length; i++) {
      if (i >= 1) {
        input = string
        if (second[i] === 'camel') {
          for (let j = 0; j < input.length; j++) {
            if (input[j] === ' ') {
              string2 +=input[(j+1)].toUpperCase()
              j++
            } else {
              string2 +=input[j]
            }
          }
         } else if (second[i] === 'pascal') {
      for (let j = 0; j < input.length; j++) {
        if (j === 0) {
          string2 = input[j].toUpperCase()
        } else if (input[j] === ' ') {
          string2 +=input[(j+1)].toUpperCase()
          j++
        } else {
          string2 +=input[j]
        }  
      }
     } else if (second[i] === 'snake') {
      for (let j = 0; j < input.length; j++) {
        if (input[j] === ' ') {
          string2 += '_'
        } else {
          string2 +=input[j]
        }  
      }
     } else if (second[i] === 'kebab') {
      for (let j = 0; j < input.length; j++) {
        if (input[j] === ' ') {
          string2 += '-'
        } else {
          string2 +=input[j]
        }  
      }
     } else if (second[i] === 'title') {
      for (let j = 0; j < input.length; j++) {
        if (j === 0) {
          string2 = input[j].toUpperCase()
        } else if (input[j] === ' ') {
          string2 += ' ' + input[(j+1)].toUpperCase()
          j++
        } else {
          string2 +=input[j]
        }  
      }
     } else if (second[i] === 'vowel') {
      for (let j = 0; j < input.length; j++) {
        if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
          string2 += input[j].toUpperCase()
        } else {
          string2 +=input[j]
        }  
      }
     } else if (second[i] === 'consonant') {
      for (let j = 0; j < input.length; j++) {
        if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
            string2 +=input[j]
        } else {
          string2 += input[j].toUpperCase()
        }  
      }
     } else if (second[i] === 'upper') {
      for (let j = 0; j < input.length; j++) { 
        string2 += input[j].toUpperCase()
     } 
     } else if (second[i] === 'lower') {
      for (let j = 0; j < input.length; j++) { 
        string2 += input[j].toLowerCase()
     }
    }
    return string2
    } else {
      if (second[i] === 'camel') {
       for (let j = 0; j < input.length; j++) {
         if (input[j] === ' ') {
           string +=input[(j+1)].toUpperCase()
           j++
         } else {
           string +=input[j]
         }
       }
      } else if (second[i] === 'pascal') {
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
  } else if (second[i] === 'snake') {
   for (let j = 0; j < input.length; j++) {
     if (input[j] === ' ') {
       string += '_'
     } else {
       string +=input[j]
     }  
   }
  } else if (second[i] === 'kebab') {
   for (let j = 0; j < input.length; j++) {
     if (input[j] === ' ') {
       string += '-'
     } else {
       string +=input[j]
     }  
   }
  } else if (second[i] === 'title') {
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
  } else if (second[i] === 'vowel') {
   for (let j = 0; j < input.length; j++) {
     if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
       string += input[j].toUpperCase()
     } else {
       string +=input[j]
     }  
   }
  } else if (second[i] === 'consonant') {
   for (let j = 0; j < input.length; j++) {
     if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
         string +=input[j]
     } else {
       string += input[j].toUpperCase()
     }  
   }
  } else if (second[i] === 'upper') {
   for (let j = 0; j < input.length; j++) { 
     string += input[j].toUpperCase()
  } 
  } else if (second[i] === 'lower') {
   for (let j = 0; j < input.length; j++) { 
     string += input[j].toLowerCase()
  }
 }
 }
}
 } else {
   if (second === 'camel') {
     for (let j = 0; j < input.length; j++) {
       if (input[j] === ' ') {
         string +=input[(j+1)].toUpperCase()
         j++
       } else {
         string +=input[j]
       }
     }
    } else if (second === 'pascal') {
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
 } else if (second === 'snake') {
 for (let j = 0; j < input.length; j++) {
   if (input[j] === ' ') {
     string += '_'
   } else {
     string +=input[j]
   }  
 }
 } else if (second === 'kebab') {
 for (let j = 0; j < input.length; j++) {
   if (input[j] === ' ') {
     string += '-'
   } else {
     string +=input[j]
   }  
 }
 } else if (second === 'title') {
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
 } else if (second === 'vowel') {
 for (let j = 0; j < input.length; j++) {
   if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
     string += input[j].toUpperCase()
   } else {
     string +=input[j]
   }  
 }
 } else if (second === 'consonant') {
 for (let j = 0; j < input.length; j++) {
   if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
       string +=input[j]
   } else {
     string += input[j].toUpperCase()
   }  
 }
 } else if (second === 'upper') {
   for (let j = 0; j < input.length; j++) { 
     string += input[j].toUpperCase()
  } 
  } else if (second === 'lower') {
   for (let j = 0; j < input.length; j++) { 
     string += input[j].toLowerCase()
  }
 }
 return string
 }
 }