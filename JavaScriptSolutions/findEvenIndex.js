function findEvenIndex(arr)
{
  // loop through each index with at least one number on each side
  for (var i=0; i<arr.length; i++) {
    // Sum left side
    var leftSum = 0;
    for (var j=0; j<i; j++) {
      leftSum += arr[j];
    }
    // Sum right side
    var rightSum = 0;
    for (var j=i+1; j<arr.length; j++) {
      rightSum += arr[j];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}
