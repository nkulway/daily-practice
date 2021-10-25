
// manipulation of integers to strings and strings
//     back to integers


let thisnum = 9876;


function squareDigits(num){
let response = '';
  let stringNum = JSON.stringify(num)
  for (let i = 0; i < stringNum.length; i++) {
  let squaredInt = parseInt(stringNum[i]) ** 2;
    response += JSON.stringify(squaredInt);
}
  return response;
}

console.log(squareDigits(thisnum));


// counting vowels in a string 
//     count functionality 


function vowel(word){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
      for (let i = 0; i < word.length; i++){
      let letter = word[i];
      if(vowels.includes(letter)) {
        count += 1;
        }
    }
    return count;
    }


    // write a function that
    //  determins weather or not a string is a palindorme

    function palindrome(str) {
      if (str === str.split("").reverse().join("")){
      return true
      } else{
      return false
      }
    }
    
    console.log(palindrome("deed"));