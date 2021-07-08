const instructorWithLongestName = function (instructors) {
  let name = '';
  let course = '';
  let object = {};
  for (let j = 0; j < instructors.length; j++) {
    if(name.length < instructors[j].name.length){
      name = instructors[j].name;
      course = instructors[j].course;
    }
  }
  return object = {name: name, course: course};
};
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

