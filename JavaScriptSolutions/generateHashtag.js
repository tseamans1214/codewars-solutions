function generateHashtag (str) {
  // If the string is empty or filled with spaces return false
  if (str === "" || str.trim() === "" || str.length === 0 ) {
    return false;
  }
  var finalString = "";
  
  // if it is only one word
  if (str.includes(" ") != true) {
    // Check if the string has a hastag already
    if (str[0] === '#') {
      // if it does, capitalize the 2nd letter
      finalString = str[0] + str[1].toUpperCase() + str.substring(2);
    } else { // Else it doesn't have a hastag
      // Uppercase the first letter
      str = str[0].toUpperCase() + str.substring(1);
      // Add hastag to the beginning of the string
      finalString = "#" + str;
    }
    // Check if final result is greater than 140 characters
    if (finalString.length > 140) {
      return false;
    } else { // return true if it is less than 140 characters
      return finalString;
    }
  }
  // If it has more than one word--------------------------
  // Split array into separate words
  var stringArray = str.split(" ");
  // Capitalize the first letter of each word
  stringArray = capitalizeWords(stringArray);
  // Add a hastag to the beginning of the word
  //  and add all the words from the array together
  finalString = "#" + stringArray.reduce((prevVal, curVal) => prevVal + curVal);
  
  // If final string is longer than 140 characters return false
  if (finalString.length > 140) {
    return false;
  } else { // return string!
    return finalString;
  }
  
  
}

function capitalizeWords(arr) {
  return arr.map(element => {
    element = element.trim();
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
  });
}
