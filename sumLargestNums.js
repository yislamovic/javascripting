const sumLargestNumbers = function(data) {
  let firstNum = 0, secondNum = 0;
  for(let i = 0; i < data.length; i++){
    if(firstNum < data[i]){
      firstNum = data[i];
    }
    if(i === data.length - 1){
      data.splice(data.indexOf(firstNum), 1);
    }
  }
  for(let i = 0; i < data.length; i++){
    if(secondNum < data[i]){
      secondNum = data[i];
    }
    if(i === data.length - 1){
      data.splice(data.indexOf(firstNum), 1);
    }
  }
  return firstNum + secondNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));