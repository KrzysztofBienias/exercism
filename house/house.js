const phrases =[
  ['house that Jack built.', 'lay in'],
  ['malt', 'ate'],
  ['rat', 'killed'],
  ['cat', 'worried'],
  ['dog', 'tossed'],
  ['cow with the crumpled horn', 'milked'],
  ['maiden all forlorn', 'kissed'],
  ['man all tattered and torn', 'married'],
  ['priest all shaven and shorn', 'woke'],
  ['rooster that crowed in the morn', 'kept'],
  ['farmer sowing his corn', 'belonged to'],
  ['horse and the hound and the horn', ''],
]


export class House {
  static verse(val) {
    let verse = [];

    for (let i = 0; i < val; i++) {
      if (i == val - 1) verse.unshift(`This is the ${phrases[i][0]}`);
      else verse.unshift(`that ${phrases[i][1]} the ${phrases[i][0]}`);
    }
    
    return verse;
  }

  static verses(startVerse, endVerse) {
    let verses = [];

    for (let i = startVerse; i <= endVerse; i++) {
      verses.push(...House.verse(i));

      if (i != endVerse) verses.push('');
    }

    return verses;
  }
}
