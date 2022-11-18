const source = [4, 1, 2, 3];

function minimumSwaps(arr) {
  let swapCount = 0;

  let i = 0;
  while (i < arr.length) {
    const indexPosition = arr[i]-1;

    if (arr[i] != arr[indexPosition]) {
      const tempValue = arr[indexPosition];
      arr[indexPosition] = arr[i];
      arr[i] = tempValue;
      swapCount +=1;
    } else {
      i++;
    }   
  }

  return swapCount;
}

console.log(minimumSwaps(source));
