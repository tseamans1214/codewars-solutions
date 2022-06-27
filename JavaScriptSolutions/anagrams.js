function anagrams(word, words) {
  // Splits the word into characters
  //  sorts character in alphebetical order
  //  joins characters back into a string
  var w1 = word.split("").sort().join();
  var anagrams = [];
  // Repeats steps above for each word in words
  words.forEach(w => {
    var w2 = w.split("").sort().join();
    // If the current word in the array of words equals the given word
    //  add it to the anagrams array
    if (w1 === w2) {
      anagrams.push(w);
    }
  });
  return anagrams;
}
