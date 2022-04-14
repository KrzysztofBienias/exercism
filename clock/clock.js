export class Clock {
  constructor(hour, min) {
    this.hour = hour;
    this.min = min;
  }

  toString() {
    // Positive numbers
    if (this.min >= 60 && this.min % 60 == 0) {               // If minutes are more thean 60 without rest
      this.hour += this.min / 60;
      this.min = '0';
    }
    if (this.min >= 60 && this.min % 60 != 0) {               // If minutes are more thean 60 with rest
      this.hour += Math.floor(this.min / 60);
      this.min = this.min % 60;
    }

    // Megative minutes 
    if (this.min < 0 && this.min % 60 == 0) {                 // If minutes are less than 0 without rest
      this.hour += this.min / 60;
      this.min = '0';
    }
    if (this.min < 0 && this.min % 60 != 0) {                 // If minutes are less than 0 with rest
      this.hour += Math.floor(this.min / 60);
      this.min = 60 + (this.min % 60);
    }

    // Positive hours
    if (this.hour >= 24) this.hour = this.hour % 24;          // If hour is more than or equal to 24
    // Negative hours
    if (this.hour < 0) this.hour = 24 + (this.hour % 24);     // If hour is less or equal to 0 

    // Adding 0
    let hours = (this.hour <= 9 && this.hour >= 0) ? '0' + this.hour : this.hour;           // Adding 0 before if hour consists of 1 digit
    let mins = (this.min <= 9 && this.min >= 0) ? '0' + this.min : (this.min == undefined) ? '00' : this.min;           // Adding 0 before if hour consists of 1 digit

    // Result
    return `${hours}:${mins}`;
  }

  plus(min) {
    this.min += min;                                          // Adding minutes to given hour
    return this;
  }

  minus(min) {
    this.min -= min;                                          // Substracting minutes from given hour
    return this;
  }

  equals(newClock) {
    return this.toString() == newClock.toString();            // Comparing hours
  }
}