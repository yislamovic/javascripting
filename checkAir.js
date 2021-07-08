const checkAir = function (samples, threshold) {
  let dirty = 0;
  let tolerence = 0;
  for(let i = 0; i < samples.length; i++){
    if(samples[i] === 'dirty'){
      dirty++
    }
  }
  tolerence = threshold * samples.length;
  return (tolerence > dirty) ? 'Clean' : 'Polluted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))