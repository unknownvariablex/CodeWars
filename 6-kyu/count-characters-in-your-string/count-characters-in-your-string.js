function count(string) {
  // Make a new object to count the characters into
  const charCounts = {};
  //iterate through the string and count how many times each chae appears.  Put this into charCounts
  //the key is the char and the value is how many times it appears
  for (const char of string){
    //We check to see if the number has appeared yet, if it has, we increment the number of times it appears
    //or set it to 1
    charCounts[char] = (charCounts[char] || 0) + 1
  }
  //return the object which should print as desired.
  return charCounts;
}