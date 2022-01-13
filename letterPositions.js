const letterPositions = (array) => {
  //let lettersArray = array.split('');
  const result = {};
  for (let i = 0; i < array.length; i++) {
    //console.log(result[array[i]] )
    if (array[i] !== " ") {
      if (result[array[i]]) {
        result[array[i]].push(i);
      } else {
        result[array[i]] = [i];
      }
    }
  }
  return result;
};

console.log(letterPositions("today i went to the store"));