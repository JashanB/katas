const instructorWithLongestName = function(instructors) {
  instructors = []
  instructors.sort()
  instructors.reverse()
  return instructors[0]
  }
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));

  const instructorWithLongestName = function(instructors) {
    instructors = []
    let newArray = []
    instructors.forEach(function(name, index, all) {
      newArray = instructors.splice()
    })
    return newArray
   }
   console.log(instructorWithLongestName([
     {name: "Samuel", course: "iOS"},
     {name: "Jeremiah", course: "Web"},
     {name: "Ophilia", course: "Web"},
     {name: "Donald", course: "Web"}
   ]));


   const instructorWithLongestName = function(instructors) {
    let newArray = []
    instructors.forEach(function(name, index, all) {
      newArray = instructors.find(name)
    })
    return newArray
   }
   console.log(instructorWithLongestName([
     {name: "Samuel", course: "iOS"},
     {name: "Jeremiah", course: "Web"},
     {name: "Ophilia", course: "Web"},
     {name: "Donald", course: "Web"}
   ]));


   const instructorWithLongestName = function(instructors) {
     let newArray = instructors.toString()
     return newArray
   }

const instructorWithLongestName = function(instructors) {
let newArray = [] ;
let course = []   ;
    for (let i = 0; i < instructors.length; i++) {
      if (newArray.length < instructors[i].name.length) {
        newArray = instructors[i].name
        course = instructors[i].course
      }
    }
    return 'name: ' + newArray + ', course: ' + course
 }
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));