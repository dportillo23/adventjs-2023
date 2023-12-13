/** @score 25 */
function getIndexsForPalindrome(word: string) {
  const reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) return [];

  for (let i = 0; i < Math.ceil(word.length); i++) {
      for (let j = 0; j < word.length; j++) {
        if (i !== j) {
          const wordArr = word.split("");
          wordArr[i] = word[j];
          wordArr[j] = word[i];
          const newWord = wordArr.join("");

          if (newWord === wordArr.reverse().join("")) {
            return [i, j].sort();
          }
        }
      }
    }
      return null;
}

/** @score 80 */
function getIndexsForPalindrome2(word: string) {
  const lastIndex = word.length - 1
  const reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) return [];

  for (let i = 0; i < Math.ceil(word.length); i++) {
    if (word[i] !== reversedWord[i]) {
      for (let j = 0; j < word.length; j++) {
        if (i !== j) {
          const wordArr = word.split("");
          wordArr[i] = word[j];
          wordArr[j] = word[i];
          const newWord = wordArr.join("");

          if (newWord === wordArr.reverse().join("")) {
            return [i, j];
          }

          const secondWordArr = reversedWord.split("");
          secondWordArr[i] = reversedWord[j];
          secondWordArr[j] = reversedWord[i];
          const anotherWord = secondWordArr.join('')
          const reversed = secondWordArr.reverse().join('')
          
          if (anotherWord === reversed) {
            return [lastIndex - j, lastIndex - i]
          }
        }
      }
      return null;
    }
  }
}
