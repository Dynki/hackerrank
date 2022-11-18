const source = "abba";

function sherlockAndAnagrams(str) {
  const substrings = {};

  for (let i = 0; i< str.length; i++) {
	  for (let j = 0; j< str.length; j++) {
    
      let combination = str.substr(i,j+1);
      combination = combination.split().sort((a, b) => (a > b) - (a < b));

      if (substrings[combination]) {

        substrings[combination] = substrings[combination] +=1;
      } else {
        substrings[combination] = 1;
      }    
    }
  }

  const filteredKeys = Object.keys(substrings).filter(key => ((substrings[key]-1)/2)>0);

  return filteredKeys.length;
}

console.log(sherlockAndAnagrams(source));
