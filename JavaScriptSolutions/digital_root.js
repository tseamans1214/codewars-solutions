function digital_root(n) {
  // Turn number into string
  var stringNum = "" + n;
  // If length > 1, split string into array of characters(digits) and sum the digits
  if (stringNum.length > 1) {
    var charArray = stringNum.split("");
    // Sum the digits by converting each character into a number and summing them
    var sum = charArray.reduce((acc, cur) => acc + Number(cur), 0);
    // Set n to recursive call on the sum, continues until digits are reduced to 1
    n = digital_root(sum);
  }
  return n;
}
