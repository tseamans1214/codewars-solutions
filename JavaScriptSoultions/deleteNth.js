function deleteNth(arr,n){
  // Declare count map
  const count = {};
  // Declare new array with removed repeated values
  const newArr = [];

  // For each element in the given array, count each occurence
  for (const element of arr) {
    // If the element is already mapped, increment counter by 1
    if (count[element]) {
      count[element] += 1;
    } else { // else create a new map for the element and start counter at 1
      count[element] = 1;
    }

    // If the element count is less than or equal to the max num given, add it to the final array
    if (count[element] <= n) {
      newArr.push(element);
    }
  }
  return newArr;
}
