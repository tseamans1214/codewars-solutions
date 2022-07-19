import java.util.*;
public class RomanNumerals {
 
  public static String toRoman(int n) {
    // Create Roman String
    String romanString = "";
    // Create LinkedHashMap as a guide for all roman characters
    Map<String, Integer> romanCharGuide = new LinkedHashMap<>();
    romanCharGuide.put("M", 1000);
    romanCharGuide.put("CM", 900);
    romanCharGuide.put("D", 500);
    romanCharGuide.put("CD", 400);
    romanCharGuide.put("C", 100);
    romanCharGuide.put("XC", 90);
    romanCharGuide.put("L", 50);
    romanCharGuide.put("XL", 40);
    romanCharGuide.put("X", 10);
    romanCharGuide.put("IX", 9);
    romanCharGuide.put("V", 5);
    romanCharGuide.put("IV", 4);
    romanCharGuide.put("I", 1);
    // loop through the guide
    for (Map.Entry<String, Integer> guide : romanCharGuide.entrySet()) {
      // While greater than the current value
      while (n >= guide.getValue()) {
        // subtract current value from given number
        n -= guide.getValue();
        // add current roman char to final string
        romanString += guide.getKey();
      }
    }
    return romanString;
  }
  
  public static int fromRoman(String romanNumeral) {
    if (romanNumeral.length() == 1) {
      return romanCharValue(romanNumeral);
    }
    // Create a sum variable
    int sum = 0;
    // Loop through the string
    for (int i=0; i<romanNumeral.length(); i++) {
      int currentCharValue = romanCharValue(romanNumeral.charAt(i) + "");
      // Check if it is the last char
      if (i == romanNumeral.length()-1) {
        // Add character value to sum
        sum += currentCharValue;
      } else {
        // get the next char value
        int nextCharValue = romanCharValue(romanNumeral.charAt(i+1) + "");
        // if the next char value > current value
        if (currentCharValue < nextCharValue) {
          // sum += next char value - current value
          sum += nextCharValue - currentCharValue;
          // move pointer up 1
          i++;
        } else {
          // sum += current value
          sum += currentCharValue;
          }
      }
    }
    return sum;
  }
  // helper function to get values fo roman chars
  public static int romanCharValue(String romanNumber) {
    if (romanNumber.equals("I")) return 1;
    if (romanNumber.equals("V")) return 5;
    if (romanNumber.equals("X")) return 10;
    if (romanNumber.equals("L")) return 50;
    if (romanNumber.equals("C")) return 100;
    if (romanNumber.equals("D")) return 500;
    if (romanNumber.equals("M")) return 1000;
    return -1;
  }
}
