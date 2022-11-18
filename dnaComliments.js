const source = "ATGC";

function dnaCompliments(str) {
  
  const complimentsMap = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };

  return str
    .toLocaleUpperCase()
    .split("")
    .reverse()
    .map(char => complimentsMap[char])
    .join("");
}

console.log(dnaCompliments(source));
