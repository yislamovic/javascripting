function ageCalculator(name, yoB, currentYear){
  let age = currentYear - yoB
  return age;
}
console.log("Suzie is " + ageCalculator("Suzie", 1983, 2015) + " years old.");
console.log("Jack is " + ageCalculator("Jack", 2003, 2015) + " years old.");
console.log("Ali is " + ageCalculator("Ali", 2015, 2015) + " years old.");
