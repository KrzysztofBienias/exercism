//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const toRna = (str) => {
  const TRANSCRIPTION = { G: 'C', C: 'G', T: 'A', A: 'U'};

  return str
            .split('')
            .map(nucle => TRANSCRIPTION[nucle])
            .join('');
};
