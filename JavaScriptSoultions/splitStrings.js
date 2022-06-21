function solution(str){
   // if str.length is odd, add an underscore to the end.
  if (str.length % 2 != 0) {
    str += "_";
  }
  // create array to store pairs of chars
  let pairArray = [];
  
  // create variable to track array length
  let arrayLength = 0;
  // loop through str chars
  for (var i=0; i<str.length; i+=2) {
    // add next to chars to array
    pairArray[arrayLength] = str[i] + str[i+1];
    arrayLength++;
  }
  return pairArray;
  
}
