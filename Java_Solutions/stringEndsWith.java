public class Kata {
  public static boolean solution(String str, String ending) {
    // Check if the ending string has a greater length than the given string (str)
    if (ending.length() > str.length()) {
      // Return false because it is not possible
      return false;
    }
    
    String strEnding = str.substring(str.length()-ending.length(),str.length());
    System.out.println(strEnding);
    if (strEnding.equals(ending)) {
      return true;
    }
    return false;
  }
}
