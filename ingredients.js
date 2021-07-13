const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
let count = 0;
while(count < ingredients.length){
  console.log(ingredients[count])
  count++;
}
console.log('\n'+'\n');
// Write a for loop that prints out the contents of ingredients:
for(let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i])
}
console.log('\n'+'\n');
// Write any loop (while or for) that prints out the contents of ingredients backwards:
count = ingredients.length -1;
let endOfArray = false;
while(count < ingredients.length && !endOfArray){
  console.log(ingredients[count])
  count--;
  if(count < 0){
    endOfArray = true;
  }
}