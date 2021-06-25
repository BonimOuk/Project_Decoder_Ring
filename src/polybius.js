// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let table = [
      ["a", "b", "c","d", "e"],
      ["f", "g","h","i/j","k"],
      ["l", "m", "n","o","p"],
      ["q","r", "s", "t", "u"],
      ["v","w", "x", "y", "z"]
    ];
    let result = "";
    if(encode === false){
      for(let i = 0; i <input.length; i+=2){
      const j = input[i + 1];
        if(input[i] === ' '){
          result += ' ';
          i--;
          continue;
        }
        const k = input[i];
        if(!table[j - 1]) return false;
        const letter = table[j - 1][k - 1];
        result += letter;
              }
      return result;
    }
    for(let i = 0; i <input.length; i++){
      const letter = input[i];
      if(letter === ' '){
        result += ' ';
        continue;
      }
      for(let j = 0; j < 5; j++){
        for(let k = 0; k < 5; k++){
          if(table[j][k].includes(letter)){
            result += `${k+1}${j+1}`
          }
        }
      }
    }
    return result;
  }

  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
