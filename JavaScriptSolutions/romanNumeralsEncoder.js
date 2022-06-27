function romanNumeralsEncoder(number){
  var romanNumber = "";
  // Guild for roman numerals
  var guide = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  var i;
  for (i in guide) {
    // while the number is greater than the current Roman Numeral
    while ( number >= guide[i] ) {
      // Add that Roman Numeral to the result
      romanNumber += i;
      // Subtract the value of the roman numeral from the given number
      number -= guide[i];
    }
  }
  return romanNumber;
}
