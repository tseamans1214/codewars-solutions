import java.util.ArrayList;
import java.util.Arrays;

public class DirReduction {
    // Possible Parameters
      // arr = ["NORTH", "SOUTH", "EAST", "WEST"]
      // arr =  ["NORTH", "WEST", "SOUTH", "EAST"]
      // arr = []
    public static String[] dirReduc(String[] arr) {
      
      // if nothing in array return arr
      if (arr.length == 0 || arr.length == 1) {
        return arr;
      }
      
      // Create an ArrayList out of arr
      ArrayList<String> list = new ArrayList<String>(Arrays.asList(arr));
      // Loop trough the ArrayList
      for (int i=0; i<list.size()-1; i++) {
      //  Check if list[i].equals("NORTH") && list[i+1].equals("SOUTH")
        if (list.get(i).equals("NORTH") && list.get(i+1).equals("SOUTH")) {
          //    Remove list[i]
          list.remove(i);
          //    Remove list[i]
          list.remove(i);
          //    Set i = -1
          i = -1;
        } else if (list.get(i).equals("SOUTH") && list.get(i+1).equals("NORTH")) { //  Check if list[i].equals("SOUTH") && list[i+1].equals("NORTH")
          //    Remove list[i]
          list.remove(i);
          //    Remove list[i]
          list.remove(i);
          //    Set i = -1
          i = -1;
        } else if (list.get(i).equals("EAST") && list.get(i+1).equals("WEST")) { //  Check if list[i].equals("EAST") && list[i+1].equals("WEST")
          //    Remove list[i]
          list.remove(i);
          //    Remove list[i]
          list.remove(i);
          //    Set i = -1
          i = -1;
        } else if (list.get(i).equals("WEST") && list.get(i+1).equals("EAST")) { //  Check if list[i].equals("WEST") && list[i+1].equals("EAST")
          //    Remove list[i]
          list.remove(i);
          //    Remove list[i]
          list.remove(i);
          //    Set i = -1
          i = -1;
        }
        System.out.println("list.size()=" + list.size());
        System.out.println("i= " + i + " Current List: " + list.toString());
      }
      // return ArrayList as a String Array
      arr = list.toArray(new String[list.size()]);
      System.out.println(Arrays.toString(arr));
      return arr;
    }
  
    // Test Cases
    //dirReduc(["NORTH", "SOUTH", "EAST", "WEST"]) -> []
    //dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]) -> ["WEST", "WEST"]
    //dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) -> ["NORTH", "WEST", "SOUTH", "EAST"]
    //dirReduc([]) -> []
}
