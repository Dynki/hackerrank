const source1 = "cde";
const source2 = "abc";

function makeAnagrams(str1, str2) {
  let minDeletions = 0;

  str1Array = [...str1.toLowerCase().replace(/[^a-z]/g,"")];
  str2Array = [...str2.toLowerCase().replace(/[^a-z]/g,"")]

  const str1Frequencies = new Array(26).fill(0);
  const str2Frequencies = new Array(26).fill(0);

  str1Array.forEach(char => {
    str1Frequencies[char.charCodeAt() - 96]++;
  });
  
  str2Array.forEach(char => {
    str2Frequencies[char.charCodeAt() - 96]++;
  });

  for (let i = 0; i < 26; i++) {
    minDeletions += Math.abs(str1Frequencies[i] - str2Frequencies[i]);
  }

  return minDeletions;
}

console.log(makeAnagrams(source1, source2));