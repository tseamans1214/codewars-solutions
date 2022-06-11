import java.util.Arrays;
public class DescendingOrder {
  public static int sortDesc(final int num) {
    // Convert number to string
    String numString = "" + num;
    // Create array of characters from string
    char[] charArray = numString.toCharArray();
    // Sort it in ascending order
    Arrays.sort(charArray);
    String finalString = "";
    // Add the greatest digits to the end of the number
    //  by starting from the end of the array
    //  and adding them to the final string
    for (int i=charArray.length-1; i>=0; i--) {
      finalString += charArray[i];
    }
    return Integer.parseInt(finalString);
  }
}
