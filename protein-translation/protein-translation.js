//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (input) => {
  if (!input) return [];
  const CODONS = input.match(/.{1,3}/g);
  const POLY = [];

  for (const CODON of CODONS) {
    if (['UAA', 'UAG', 'UGA'].includes(CODON)) break;
    switch (CODON) {
      case 'AUG':
        POLY.push('Methionine');
        break;
      case 'UUU':
      case 'UUC':
        POLY.push('Phenylalanine');
        break;
      case 'UUA':
      case 'UUG':
        POLY.push('Leucine');
        break;
      case 'UCU':
      case 'UCC':
      case 'UCA':
      case 'UCG':
        POLY.push('Serine');
        break;
      case 'UAU':
      case 'UAC':
        POLY.push('Tyrosine');
        break;
      case 'UGU':
      case 'UGC':
        POLY.push('Cysteine');
        break;
      case 'UGG':
        POLY.push('Tryptophan');
        break;
      default:
        throw new Error('Invalid codon');
    }
  }
  return POLY;
};
