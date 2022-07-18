public class BitCounting {

	public static int countBits(int n){
    String binaryString = Integer.toBinaryString(n);
    String [] stringArray = binaryString.split("");
    int numOnes = 0;
    for (int i=0; i<stringArray.length; i++)
    {
      if (stringArray[i].equals("1") == true) {
        numOnes++;
      }  
    }
    return numOnes;
	}
	
}
