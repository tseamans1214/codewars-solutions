import java.util.ArrayList;
import java.util.Arrays;

public class WhichAreIn { 
	
	public static String[] inArray(String[] array1, String[] array2) {
    // Sort array 1
    Arrays.sort(array1);
    ArrayList<String> list = new ArrayList<String>();
    
    // For each string in array 1
		 for (int i=0; i< array1.length; i++) {
       // Check if current string is a substring up any string in array 2
        for (int j=0; j< array2.length; j++) {
          if (array2[j].contains(array1[i])) {
            // if it is a substring add it to the list and break out of current loop
            list.add(array1[i]);
            break;
          }
        }
     }
    return list.toArray(new String [list.size()]);
	}
}
