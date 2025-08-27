function bouncingBall(h,  bounce,  window) {
  //define the result that the function will return
  let passes = -1
  //check if the test is valid
  if (h > 0 && bounce > 0 && bounce < 1 && window < h){
    //a valid test has at least 1 pass by the window as the ball falls
    passes = 1
    //the ball will bounce back 0.66 the original height
    let newh = h * bounce
    //if this is higher than the window, then add two more passes. One for the bounce up and one for the fall down
    while (newh > window){
      passes = passes + 2;
      //check the next bounce
      newh = newh * bounce;
    }
  }
  //return the number of times the ball passed by the window
  return passes;
}