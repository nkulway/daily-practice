function findAnagram(word, wordsArray) {
    // set up variable to store the anagrams we find
    let anagrams = [];
    // loop over wordsArray
    for(let i = 0; i < wordsArray.length; i++) {
        // check if each word in wordsArray is an anagram of word
        // split the word into an array, sort it, then join back into a string
        const sortedWord = word.split("").sort().join();
        // split each index inside the array, sort instanceof, and put it back together
        const sortedIndex = wordsArray[i].split("").sort().join();
        // compare the given word and the index to test if it is an array
        if (sortedWord === sortedIndex) {
            // push each matching word into a new array to allow for multiple answers
            anagrams.push(wordsArray[i])
        }
    }
    // end the function by joining the matching strings into one string separated by a comma
    return anagrams.join(', ')
}


const answer = ['enlists', 'google', 'inlets', 'banana', 'silent']

console.log(findAnagram('listen', answer))