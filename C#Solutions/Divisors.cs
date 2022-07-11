using System.Collections;

public class Kata
{
  public static int[] Divisors(int n)
  {
    ArrayList divisors = new ArrayList();
    // Check each number from 2 to n if there are any divisors
    for (int i=2; i<=n/2; i++) {
      // if the remainder of n/i is 0, i is a divisor
      if (n%i == 0) {
        divisors.Add(i);
      }
    }
    // if there were no divisors, return null
    if (divisors.Count == 0) {
      return null;
    } else { // return array of int divisors
      return (int[]) divisors.ToArray(typeof(int));
    }
  }
}
