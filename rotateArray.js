const source = [1, 2, 3, 4, 5];

function rotateArray(arr, rotations) {
  
  let mutatedArr = Array.from(arr);
  
  for (let i=0; i < rotations; i++) {
  	const firstItem = mutatedArr.shift();
    mutatedArr.push(firstItem);
  }
  
  return mutatedArr;
}

console.log(rotateArray(source, 5));