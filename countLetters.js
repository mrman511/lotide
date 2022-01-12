const countLetters = (array) => {
  let lettersArray = array.split('');
  const letterCount = {};
  for (let letter of lettersArray) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter] ++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

console.log(countLetters("today i went to the store"));