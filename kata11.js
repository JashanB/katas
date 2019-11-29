const organizeInstructors = function(instructors) {
  let object = {

  } 
  instructors.forEach(function(x) {
    object[x.course] = []
    for (let i = 0; i < instructors.length; i++) {
        object[x.course].push(x.name)
    }
  })
  return object
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

nameArray += x.name + ', '
    object[x.course].push(nameArray)

    const organizeInstructors = function(instructors) {
      let object = {
    
      } 
      let nameArray = []
      let courseArray = []
      instructors.forEach(function(x) {
        object[x.course] += Array.from(x.name)
        for (let i = 0; i < instructors.length; i++) {
          object[x.course].push
        }
      })
      return object 
    };
    const organizeInstructors = function(instructors) {
      let object = {
    
      } 
      let nameArray = []
      let courseArray = []
      instructors.forEach(function(x) {
        object[x.course] = []
        for (let i = 0; i < instructors.length; i++) {
          object[x.course].push(instructors[i].name)
        }
      })
      return object 
    };

const organizeInstructors = function(instructors) {
  let object = {}; 
  instructors.forEach(function(x) {
    object[x.course] = [];
  })
  for (let i = 0; i < instructors.length; i++) {
    object[instructors[i].course].push(instructors[i].name);
  }
  return object;
};