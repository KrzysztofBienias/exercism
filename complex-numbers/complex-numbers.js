export class ComplexNumber {
  constructor(re = 0, im = 0) {
    this.re = re;
    this.im = im;
  }

  get real() {
    return this.re;
  }

  get imag() {
    return this.im;
  }

  add({ re, im }) {
    return new ComplexNumber(this.re + re, this.im + im);
  }

  sub({ re, im }) {
    return new ComplexNumber(this.re - re, this.im - im);
  }

  div({ re, im }) {
    const denominator = re ** 2 + im ** 2;
    return new ComplexNumber(
      (this.re * re + this.im * im) / denominator,
      (this.im * re - this.re * im) / denominator
    );
  }

  mul({ re, im }) {
    return new ComplexNumber(
      this.re * re - this.im * im,
      this.re * im + this.im * re
    );
  }

  get abs() {
    return Math.sqrt(this.re ** 2 + this.im ** 2);
  }
  
  get conj() {
    return new ComplexNumber(this.re, this.im == 0 ? this.im : -this.im);
  }

  get exp() {
    const factor = Math.exp(this.re);
    return new ComplexNumber(
      Math.cos(this.im) * factor,
      Math.sin(this.im) * factor
    );
  }
}
