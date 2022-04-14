export class Squares {
  constructor(value) {
    this.value = value;
    this.arr = Array.from({length: this.value}, (v, i) => i + 1);
  }
  
  get sumOfSquares() {
    return this.arr.map(v => v ** 2).reduce((a, b) => a + b);
  }

  get squareOfSum() {
    return this.arr.reduce((a, b) => a + b) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}