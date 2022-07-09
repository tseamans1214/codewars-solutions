import java.util.*;
public class MexicanWave {

    public static String[] wave(String str) {
      // Create Arraylist for strings
      List<String> stringWave = new ArrayList<String>();
      // loop through each char in given string
      for (int i=0; i<str.length(); i++) {
        String newString = "";
        // if it is not equal to a " ", captilize the current char and add it to the list
        if (!str.substring(i, i+1).equals(" ")) {
          if (i == 0) { // If it is the first char
            newString = str.substring(i, i+1).toUpperCase() + str.substring(i+1);
          } else if (i == str.length()-1) { // if it is the last char
            newString = str.substring(0, i) + str.substring(i, i+1).toUpperCase();
          } else { // if it is any char in between
            newString = str.substring(0, i) + str.substring(i, i+1).toUpperCase() + str.substring(i+1);
          }
          stringWave.add(newString);
          }
      }
      // Convert arraylist into string array
      String[] arrayWave = stringWave.toArray(String[]::new);
      return arrayWave;
    }
    
}
