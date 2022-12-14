const source = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

function hourglassSum(arr) {
  const rows = arr.length;
  const columns = arr[0].length;

  let maxSumValue = Number.MIN_VALUE; 

  for (let i = 0; i < columns -2; i++) {
    for (let j = 0; j < rows-2; j++) {
      const sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] +
                  arr[i+1][j] + arr[i+1][j+1] + arr[i+1][j+2] +
                  arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

      if (sum > maxSumValue) {
        maxSumValue = sum;
      }
    }    
  }

  return maxSumValue;
}

console.log(hourglassSum(source));
