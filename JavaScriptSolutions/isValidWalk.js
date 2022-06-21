function isValidWalk(walk) {
  // Each block takes a minute
  //  if they walk more or less than 10 mins, return false
  if (walk.length !=10) {
    return false;
  }
  // Number of times moved either e or w
  //  Negative = more west
  //  Positive = more east
  //  Zero = same horizontal positon as start
  var horizontalCount = 0;
  // Number of times moved either n or s
  //  Negative = more south
  //  Positive = more north
  //  Zero = same vertical positon as start
  var verticalCount = 0;
  for (var i=0; i<walk.length; i++) {
    if (walk[i] === "n") {
      verticalCount++;
    } else if (walk[i] === "s") {
      verticalCount--;
    } else if (walk[i] === "e") {
      horizontalCount++;
    } else if (walk[i] === "w") {
      horizontalCount--;
    }
  }
  // If at the same spot, return true, else false
  if (horizontalCount === 0 && verticalCount === 0) {
    return true;
  } else {
    false;
  }
}
