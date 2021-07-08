const judgeVegetable = function (vegetables, metric) {
  var winner;
  if (metric === 'redness') {
    var red1 = vegetables[0].redness, red2 = vegetables[1].redness, red3 = vegetables[2].redness;
    if(red1 > red2 && red3){
      return vegetables[0].submitter;
    }
    if(red2 > red1 && red3){
      return vegetables[1].submitter;
    }
    else{
      return vegetables[2].submitter;
    }
  }
  return winner;
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));