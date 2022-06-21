function duplicateEncode(word){
    var finalWord = "";
    word = word.toLowerCase();
    for (var i=0; i<word.length; i++) {
      var duplicate = 0;
      for (var j=0; j<word.length; j++) {
        if (word[i] === word[j] && i!=j) {
          duplicate = 1;
          break;
        }
      }
      if (duplicate == 1) {
        finalWord += ")";
      } else {
        finalWord += "(";
      }
    }
  return finalWord;
}
