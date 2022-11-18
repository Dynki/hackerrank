const source1 = ["hello", "world"];
const source2 = ["hi", "world"];

function twoStrings(string1, string2) {
  const map = {};
  
  for (let i = 0; i < string1.length; i++) {
    const letter = string1[i];
    map[letter] = true;
  }

  for (let i = 0; i < string2.length; i++) {
    const letter = string2[i];

    if (map[letter]) {
      return "YES";
    }
  }

  return "NO";
}

console.log(twoStrings(source1[0], source1[1]));
console.log(twoStrings(source2[0], source2[1]));
