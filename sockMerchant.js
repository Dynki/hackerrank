const source = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function countThePairs(n, array) {

  if (array.length === 0) return 0;

  const sockMap = new Set();
  let pairCount = 0;

  for (let i = 0; i < array.length; i++) {
    const sockColour = array[i];

    if (sockMap.has(sockColour)) {
      pairCount++;
      sockMap.delete(sockColour);
    } else {
      sockMap.add(sockColour);
    }

  }

  return pairCount;
}

console.log(countThePairs(1, source));
