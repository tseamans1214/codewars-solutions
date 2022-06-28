function spinWords(string){
  var spinString = [];
  // Split the string into words
  var words = string.split(" ");
  // Loop through each word
   words.forEach(word => {
     // If the word has 5 more more characters reverse it
     if (word.length >= 5) {
       // Split string into array of chars, reverse array, join array
       // Push reverse word into new array
       spinString.push(word.split("").reverse().join(""));
     } else { // less than 5 characters
       // Push unchanged word into array
       spinString.push(word);
     }
   });
  
  // Return spin string
  return spinString.join(" ");
}
