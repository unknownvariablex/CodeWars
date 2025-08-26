function findOdd(A) {
  //reduce returns a single value from an array.  a ^ a = 0, so all even numbers are cancelled out.
  //0 ^ a = a, so the only number that appears an odd number of times will be returned.
 return A.reduce((a,b) => a ^ b);  
}
​