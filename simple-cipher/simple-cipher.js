export class Cipher {
  constructor(key = 'dddddddddd') { this.key = key }
  static alphabet = 'abcdefghijklmnopqrstuvwxyz'; 

  encode = (message) => this.getText(message, true);
  decode = (message) => this.getText(message, false);
  
  getText(message, isEncoding) {
    let text = '';

    for (let i = 0; i < message.length; i++) {
      const indexMessage = Cipher.alphabet.indexOf(message[i]);
      const indexKey = Cipher.alphabet.indexOf(this.key[i % this.key.length])
      const calculateIndex = isEncoding ? (indexMessage + indexKey) : (26 + (indexMessage - indexKey));
      text += Cipher.alphabet[calculateIndex % 26];
    }

    return text;
  }
}