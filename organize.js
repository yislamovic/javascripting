const organizeInstructors = function (instructors) {
  let newObj = {};
  let nameiOS = [];
  let nameWeb = [];
  let nameBlockchain = [];
  for (let i = 0; i < instructors.length; i++) {

    if (instructors[i].course === "iOS") {
      nameiOS.push(instructors[i].name);
      newObj.iOS = nameiOS;
    }
    if (instructors[i].course === "Web") {
      nameWeb.push(instructors[i].name);
      newObj.Web = nameWeb;
    }
    if (instructors[i].course === "Blockchain") {
      nameBlockchain.push(instructors[i].name);
      newObj.Blockchain = nameBlockchain;
    }
  }

  return newObj;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));