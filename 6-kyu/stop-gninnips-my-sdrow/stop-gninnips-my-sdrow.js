function spinWords(string){
    //TODO Have fun :)
  //Make new Array with words from the string
  const words = string.split(" ")
  //Make new array that checks word length and reverses the words that are 5 or more characters long. We will use the map function to do this so 
  //we don't have to worry about iterating over all the words in the array. 
  const reversedWords = words.map((word) => {
    if (word.length >= 5){ 
      //this takes the word, splits it into an array of characters, reverses that array, and joins it back into a string
      return word.split("").reverse().join("")
    }
    //leave short words alone
    return word   
  }) 
  //take the changed words in the new array and join them back into a single string and return
  return reversedWords.join(" ")
}