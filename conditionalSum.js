const conditionalSum = function(values, condition) {
  let totalEven = 0, totalOdd = 0;
  for(let i = 0; i < values.length; i++){
    if(values[i] % 2 === 0){
      totalEven = totalEven+ values[i];
    }
    else{
      totalOdd = totalOdd+ values[i];
    }
  }
  return (condition === 'even') ? totalEven : totalOdd;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));