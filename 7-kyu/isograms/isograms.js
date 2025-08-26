function isIsogram(str){
  //make an array of letters all turned to lower case from the original string
  const letterArray = str.toLowerCase().split("");
  //make a set of unique letters from the new lower case array
  const uniqueletters = new Set(letterArray);
  //compare the size of the array to the set. If there are repeats, the set will be smaller than the 
  //array and return false as expected
  return letterArray.length == uniqueletters.size;
}