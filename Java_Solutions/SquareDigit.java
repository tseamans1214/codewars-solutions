import java.util.Arrays;
public class SquareDigit {

  public int squareDigits(int n) {
    // Make a string out of the given int
    String numString = "" + n;
    // Create char array out of string
    char [] charArray = numString.toCharArray();
    String finalNumString = "";
    // Loop through char array and turn each char into an int
    //  then square each int
    //  and put each int into the final string
    for (int i=0; i<charArray.length; i++) {
      int num = (Integer.parseInt("" + charArray[i]));
      num = num * num;
      finalNumString += "" + num;
    }
    // convert final string to num
    return Integer.parseInt(finalNumString);
  }

}
