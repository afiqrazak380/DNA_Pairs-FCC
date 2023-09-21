function pairElement(dnaString) {
  
  const complimentaryPairs = [];

  for (let i = 0; i < dnaString.length; i ++){

    let currentBase = dnaString[i];

    let complimentaryBase;

    switch (currentBase){
      case 'A':
      complimentaryBase = 'T';
      break;

      case 'T':
      complimentaryBase = 'A';
      break;

      case 'C':
      complimentaryBase = 'G';
      break;

      case 'G':
      complimentaryBase = 'C';
      break;

      default:
      return 'Invalid DNA sequence';
    }

    complimentaryPairs.push([currentBase,complimentaryBase]) 

  }

  return complimentaryPairs;
}

const e = pairElement("GCG");
console.log(e)