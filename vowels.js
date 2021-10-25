function tripleChar(string) {
  //what are the vowels?
  const vowels = ["a", "e", "i", "o", "u"];
  //check each letter
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    let word = "";
    //if the current letter is a vowel
    if (vowels.includes(currentChar)) {
      // triple it
      word += currentChar.repeat(3);
    } else {
      // if it isn't, leave it alone
      word += currentChar;
    }
  }
  // return new word
  return word;
}


console.log(tripleChar("Hello"));