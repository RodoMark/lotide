// I built this function to automate my testing criteria for arrays

const buildSequence = function (number, iterator) {
  let array = [];
  for (let i = 0; i < number; i += iterator) array.push(i);
  return array;
};

module.exports = buildSequence;
