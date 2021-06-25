// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
    if(shift < -25 || shift > 25 || shift === 0){
      return false;
    }
    // 
    var solved = "";
    // Capital letters can be ignored.
    var word = input.toLowerCase();
    if(!encode) shift *= -1;
    for (var i = 0; i < word.length; i++) {
      var asciNum = word[i].charCodeAt(); // ascii number for each letter
      var newAsciNum = asciNum + shift;
      if(asciNum < 97){
        solved += String.fromCharCode(asciNum);
      } else {
        if(newAsciNum > 122){
          // is asciNum goes past z (122) then it needs to go back to a.
          solved += String.fromCharCode(newAsciNum - 26);
          // So we add the shift and then take away 26
        } else if(newAsciNum < 97){ // if it goes before a
          solved += String.fromCharCode(newAsciNum + 26); // get to correct letter
         
        } else {
          solved += String.fromCharCode(newAsciNum);
        }
      }  
    }
    return solved; 
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
