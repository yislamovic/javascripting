const repeatNumbers = function(data) {
  let string = '';
  for(let i = 0; i < data.length; i++){
    let numOne = data[i][0];
    let numTwo = data[i][1];
    for(let j = 0; j < numTwo; j++){
      string = string + numOne;
    }
    if(i < data.length - 1){
      string = string + ", ";
    }
  }
  return string;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));