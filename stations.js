const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
const chooseStations = function (stations) {
  let goodStation = []
  for (let station of stations){
    if (station[1]>=20){
      if(station[2] === 'school' || station[2] === 'community centre'){
        goodStation.push(station[0])
      }
    }
  }
  return goodStation;
}
console.log(chooseStations(stations));