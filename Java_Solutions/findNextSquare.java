public class NumberFun {
  public static long findNextSquare(long sq) {
    // Check for negative numbers  
    if (sq < 0) {
      // Return -1 since you cannot take the square root of a negative number
        return -1;
    }
    // Take square root of input
    double sqRoot = Math.sqrt(Double.valueOf(sq));
    // Check for perfect square
    if ((sqRoot - Math.floor(sqRoot)) == 0)
    {
      // Return the next perfect square
      return (long) Math.pow(sqRoot+1, 2);
    } else { // Return -1 because it is not a pefect square
      return -1; 
    }
  }
}
