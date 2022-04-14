//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  check() {
    return (this.a + this.b > this.c && this.b + this.c > this.a) === true ? this.a + this.c > this.b : false;
  }

  get isEquilateral() {
    return this.check() === true && this.a === this.b && this.b === this.c ? true : false;
  }

  get isIsosceles() {
    return this.check() === true ? (this.a === this.b && this.b === this.c || this.a === this.b || this.a === this.c || this.b === this.c) : false;
  }

  get isScalene() {
    return this.check() === true ? (this.a != this.b && this.a != this.c && this.b != this.c) : false;
  }
}