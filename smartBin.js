const smartGarbage = function (trash, bins) {
  if (trash === 'waste') {
    bins.waste++;
  }
  if (trash === 'recycling') {
    bins.recycling++;
  }
  if (trash === 'compost') {
    bins.compost++;
  }
  var bin =
  {
    waste: bins.waste,
    recycling: bins.recycling,
    compost: bins.compost,
  }
  return bin
};
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));