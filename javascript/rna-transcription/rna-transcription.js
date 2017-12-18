const RNACONVERSIONTABLE = {'C':'G', 'G':'C', 'A':'U', 'T':'A' }

function DnaTranscriber(){};

DnaTranscriber.prototype.toRna = function toRna(dnaString) {
  var rna = "";
  for(let i = 0; i < dnaString.length; i++){
    let dna = dnaString[i]
    if(!Object.keys(RNACONVERSIONTABLE).includes(dna)) throw new Error('Invalid input');
    rna += RNACONVERSIONTABLE[dna];
  }
  return rna;
}


module.exports  = DnaTranscriber;
