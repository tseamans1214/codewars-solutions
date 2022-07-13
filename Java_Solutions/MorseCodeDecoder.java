public class MorseCodeDecoder {
    public static String decode(String morseCode) {
      //MorseCode.get(code) - it takes morsecode and returns character it represents
      // Possible Paramters
      // morseCode = "...--- --. -.-   --.-- --."
      // morseCode = "...---"
      // morseCode = "   ...--- --  "
      
      // Remove trailing spaces from beginning and end
      morseCode = morseCode.trim();
      // String result = "";
      String result = "";
      
      // Check if morseCode contains "   "
      if (morseCode.contains("   ")) {
        //  Split the String morseCode into words by the delimeter "   "
        // Create Array of strings the represent each word
        String [] words = morseCode.split("   ");
      // For each word, result += decode(word);
        for (int i=0; i<words.length; i++) {
          result += decode(words[i]) + " ";
        }
      } else if (morseCode.contains(" ")) { // Check if morseCode contains " "
        //  Split each word into separate characters forming new array of characters
        String [] characters = morseCode.split(" ");
        //    For each character, result += decode(character);
        for (int i=0; i<characters.length; i++) {
          result += decode(characters[i]);
        }
      } else { // else return the MorseCode.get(morseCodeChar[i])
          return MorseCode.get(morseCode);
      }
      
      // Check if there is a space for the last character in the result
      if (result.substring(result.length()-1, result.length()).equals(" ")) {
          return result.substring(0, result.length()-1);
      } else { // No space on the end, return result
          return result;
        }
      
    }
}

// Test Cases
// decode("....") -> "H"
// decode(".... .") -> "HE"
// decode("  .... . -.--   .--- ") -> "HEY J"
