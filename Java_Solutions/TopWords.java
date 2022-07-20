import java.util.List;
import java.util.*;
import java.util.Map;
import java.util.Map.Entry;

public class TopWords {
    
    // Parameters
      // String s
        // Any string of characters or words which may contain special characters
        // Can be an empty string
    // Returns
      // List<String> -> the top three reaccuring words in string in descending order
        // If list is empty, return empty list
        // If less than 3 words return only those words
    // Note
      // Apostrophes are okay
      // all other special characters are to be treated like white space
      // all characters should be lowercase when calculating top words
    public static List<String> top3(String s) {
      // Remove all special characters except apostrophes (') from String s
      s = s.replaceAll("[~!@#$%^&*()_+{}\\[\\]:;,.<>/?-]", " ");
      // remove tabs and new lines
      s = s.replaceAll("[\\t\\n\\r]+","");
      // reduce extra spaces to 1 space
      s = s.replaceAll("\\s+", " ");
      // lower case all letters
      s = s.toLowerCase();
      // trim extra spaces around string
      s = s.trim();
      System.out.println("String s:'" + s + "'");
      //System.out.println("" + s.matches("[a-zA-Z]+"));
      // Check if there is at least one alphebetical letter
      if (s.matches(".*[a-z]+.*") == false) {
        return Collections.emptyList();
      }
      // Split string s into array of words
      String [] words = s.split(" ");
      for (int i=0; i<words.length; i++) {
        System.out.println("word: " + words[i]);
      }
      Map<String, Integer> wordMap = new HashMap<String, Integer>();
      
      // Loop through words, place words into HashMap<String, Integer>
      // Example: TopWords.top3("a a a  b  c c  d d d d  e e e e e")
      // a: 3
      // b: 1
      // c: 2
      // d: 4
      // e: 5
      for (int i=0; i<words.length; i++) {
        if (wordMap.get(words[i]) != null) {
          wordMap.put(words[i], wordMap.get(words[i]) + 1);
        } else {
          wordMap.put(words[i], 1);
        }
      }
      
      // Sort the map by count
      List<Entry<String, Integer>> list = new ArrayList<>(wordMap.entrySet());
		  list.sort(Entry.comparingByValue());
      // Create array out of top 3 reoccuring
      List <String> topThree = new ArrayList<String>();
      int count = 0;
      for (int i=list.size()-1; i>=0; i--) {
        //topThree.add(list.get(i));
        topThree.add(list.get(i).getKey());
        //System.out.println("i: " + i + " Key:" + list.get(i).getKey() + " Value: " + list.get(i).getValue());
        count++;
        if (count == 3) {
          break;
        }
      }
      
      // return array
        return topThree;
    }
  
  
}
