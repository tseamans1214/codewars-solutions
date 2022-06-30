function findNb(m) {
    var numCubes = 0;
    // Starting from the top cube
    //  subtract the volume of each cube down from the total volume
    //  counting how many cubes it takes before the total volume<=0
    while (m > 0) {
      m = m - Math.pow(numCubes+1,3);
      numCubes++;
    }
  // If the total volume is less than 0, return -1
  if (m < 0) {
    return -1;
  } else { // else return number of cubes used
    return numCubes;
  }
}
