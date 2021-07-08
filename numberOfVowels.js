const numberOfVowels = function(data) {
  let count = 0;
  for(let i = 0; i < data.length; i++){
    let letter = data.charAt(i)
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" 
      || letter === "u"){
      count = count + 1;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));