
// Solved using SWITCH
function pairElement(dnaString){

  // Create an empty array to store the final output
  const complimentaryPairs = [];

  // Iterate through each input array or "dnaString"
  for (let i = 0; i < dnaString.length; i ++){

    // Set the current base equal to each element in input string/dnaString by indexing/"i"
    let currentBase = dnaString[i];

    // Set the complimentary base for each input element or "current base"  
    let complimentaryBase;
    switch (currentBase) { 
      case 'A': complimentaryBase = "T"; break;
      case 'T': complimentaryBase = "A"; break;
      case 'G': complimentaryBase = "C"; break;
      case 'C': complimentaryBase = "G"; break;
      default: return "String Invalid";
    }

    // Push the "current" and "complimentary base" into the array of pre-created place holder "complimentaryPairs" 
    // The array is arrange inform of 2D array "[ , ]"
    complimentaryPairs.push([currentBase, complimentaryBase]);
  }

  // Return the final output form "function pairElement"
  return complimentaryPairs

 }

console.log(pairElement("GCG")) 



/*
// Solved using "Key pair" assigment, .split and .map
function pairElement(dnaString){

  const pairs = {
    A:'T', T:'A', C:'G', G:'C' 
  }

  return dnaString.split("").map(element => [elemet, pairs[element]])
}

console.log(pairElement("TA")*/
