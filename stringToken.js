const source = "He is a very good boy isn't he?";

function printTokens(str) {
  const mutatedStr = str.replace(/[^A-za-z]/gi, '');
  console.log(mutatedStr);
}

printTokens(source);
