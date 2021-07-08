const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
const finalPosition = function (moves) {
  var positionX = 0
  var positionY = 0
  for (let i = 0; i < moves.length; i++){
    if(moves[i] === 'north'){
      positionX = positionX + 1
    }
    if(moves[i] === 'south'){
      positionX = positionX - 1
    }
    if(moves[i] === 'east'){
      positionY = positionY + 1
    }
    if(moves[i] === 'west'){
      positionY = positionY - 1
    }
  }
  let position = [positionY, positionX]
  return position;
}
console.log(finalPosition(moves));