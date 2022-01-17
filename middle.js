const middle = array => {
  const arrayLength = array.length;
  const middle = [];
  if (arrayLength % 2 === 0) {
    if (arrayLength > 2) {
      const half = arrayLength / 2;
      middle.push(array[half - 1], array[half]);
    }
  } else if (arrayLength > 2) {
    middle.push(array[(arrayLength - 1) / 2]);
  }
  return middle;
};

module.exports = middle;