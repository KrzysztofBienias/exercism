export class HighScores {
  constructor(arr) {
    this.arr = arr;
  }

  get scores() {
    return this.arr;
  }

  get latest() {
    return this.arr.pop();
  }

  get personalBest() {
    return Math.max(...this.arr);
  }

  get personalTopThree() {
    return this.arr.sort((a, b) => b - a).slice(0, 3);
  }
}
