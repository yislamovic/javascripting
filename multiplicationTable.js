let multiplicationTable = function (maxValue) {
  let num = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      num += i * j + ' ';
    }
    num += '\n';
  }
  return num;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));