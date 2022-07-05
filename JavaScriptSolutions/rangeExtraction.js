function solution(list){
 var startNum; // beginning number of an interval
  var endNum; // last number of an interval
  var intervalCount = 0;
  var stringSolution = "";
  for (var i=0; i<list.length; i++) {

    if (intervalCount == 0) { // Check if it is the first number
      startNum = list[i]; // set number to start number of interval
      stringSolution += list[i] + ","; // Add the number to the solution with a , just in case it isn't an interval
      intervalCount++; // increment counter by 1
    } else if (list[i] == (startNum + intervalCount)) { // Check if the current number is part of the current interval
        intervalCount++; // if it is increment the counter
        if (i == list.length-1) { // if this is the last number in the array
          if (intervalCount >= 3) { // Check if it is a valid interval
            endNum = startNum + intervalCount-1; // Get the last number of the interval
            stringSolution = stringSolution.slice(0,-1); // Remove the comma after startNum
            stringSolution += "-" + endNum; // Add the final interval
          } else { // Else interval count is equal to 2 (not a valid interval)
            stringSolution += "" + list[i]; // Just add the current number to solution
          }
        }
    } else { // Else the current number is not part of the interval
      if (intervalCount >= 3) { // Check if the past numbers are a valid interval
        endNum = startNum + intervalCount-1; // Get end num by adding the intervalCount to startNum
        stringSolution = stringSolution.slice(0,-1); // Remove the comma before adding to solution
        stringSolution += "-" + endNum + ","; // Add inteval to solution
        startNum = list[i]; // Set interval start to current number
        stringSolution += list[i] + ","; // Add current number to solution
        intervalCount = 1; // Start counter at 1 (since current number counts)
      } else if (intervalCount == 2) { // Else the past nubers are not valid interval being only 2
        stringSolution += "" + list[i-1] + ","; // Add last number
        stringSolution += "" + list[i] + ","; // Add current number
        startNum = list[i]; // Set current number to startNum
        intervalCount = 1;
      } else { // Else interval was only 1
        stringSolution += "" + list[i] + ","; // Add current number
        startNum = list[i];
        intervalCount = 1;
      }
    }
  }
  if (stringSolution.charAt(stringSolution.length-1) == ',') { // Check for trailing comma
    return stringSolution.slice(0, -1); // return solution without comma
  } else {
    return stringSolution;
  }
  
}
