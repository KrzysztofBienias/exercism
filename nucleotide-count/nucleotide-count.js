export class NucleotideCounts {
  static parse(str) {
    let split = str.split('');
    
    // Checking if str includes invalid nucleotides
    split.filter(v => {
      if (v !== "A" || v !== "C" || v !== "G" || v !== "T") {
        throw new Error('Invalid nucleotide in strand');
      } else {
        return split.sort();
      }
    });

    // return split.sort()

  }
}