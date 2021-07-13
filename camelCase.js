const camelCase = function (input) {
  let indexToCap;
  let newString = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      indexToCap = i + 1;
      newString = newString + input.charAt(indexToCap).toUpperCase();
      i = i + 1;
    }
    else {
      newString = newString + input[i];
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));