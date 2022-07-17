public class Solution {
  // Parameters
    // int number -> [-inf, inf], only going to be int, no error handling
  // Return
    // return an int that is the sum of numbers less than given number that are multiples of 3 or 5
    // if the given number is negative, return 0
  // Performance
    // O(n) - linear
  public int solution(int number) {
    // if number<=2
    if (number<=2) {
      // return 0
      return 0;
    }
    // create a sum variable
    int sum = 0;
    // loop from number to 0
    for (int i=number-1; i>=0; i--) {
      // if current num % 3 == 0 or num % 5 == 0
      if (i%3 == 0 || i%5 == 0) {
          // sum = sum + currentNum;
        sum = sum + i;
        }
      }
    // return sum
    return sum;
  }
  // solution(10) -> 9 + 6 + 5 + 3 = 23
  // solution(-10) -> 0
  // solution(3) -> 3
}
