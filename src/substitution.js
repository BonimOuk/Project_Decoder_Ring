// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length != 26) return false;
    const table = alphabet.toLowerCase();
    let result = "";
    let count = {};
    input = input.toLowerCase();
    for(let i = 0; i < alphabet.length; i++){
      if(count[alphabet[i]]){
        return false;
      }
      count[alphabet[i]] = true;
    }
    console.log(input, table);
    
    if(encode === false){
      for(let i = 0; i < input.length; i++){
        if(input[i]=== ' '){
        result += ' ';
        continue;
      }
        const letter = table.split("").findIndex(c=> c == input[i]);
        console.log(letter);
        result += String.fromCharCode(letter + 97);
      }
     return result; 
    }
    for(let i = 0; i < input.length; i++){
      const letter = input.charCodeAt(i) - 97;
      if(input[i]=== ' '){
        result += ' ';
        continue;
      }
      result += alphabet[letter];
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
