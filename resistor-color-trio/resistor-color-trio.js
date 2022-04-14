const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export class ResistorColorTrio {
  constructor(arr) {
    this.arr = arr;
    this.unit = 'ohms'
    
    // Total value with zeros
    this.value = `${COLORS.indexOf(this.arr[0])}${COLORS.indexOf(this.arr[1])}${'0'.repeat(COLORS.indexOf(this.arr[2]))}`

    // Cases
    if (!this.arr.every(col => COLORS.includes(col))) throw '/invalid color/';

    if (Number(this.value) % 1000 == 0) {
      this.unit = 'kiloohms';
      this.value = this.value / 1000;
    }

    // Final result
    this.label = `Resistor value: ${this.value} ${this.unit}`;
  }
}
