const urlEncode = function(text) {
  let string = text.trim();
  let array = [];
  let encodedString = '';
  for(let i = 0; i < string.length; i++){
    array[i] = string[i];
  }
  for(let j = 0; j < array.length; j++){
    if(array[j] === ' '){
      array[j] = '%20';
    }
  }
  for(let k = 0; k < array.length; k++){
    encodedString = encodedString + array[k];
  }
  return encodedString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
