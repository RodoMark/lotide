// I built this function to automate my testing criteria for arrays

const buildSequence = function (number, multiple) {
  let array = [];
  for (let i = 0; i < number; i += multiple) array.push(i);
  return array;
};

module.exports = buildSequence;
