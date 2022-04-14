export class Series {
  constructor(series) {
    this.series = series;
  }

  slices(num) {

    if (this.series == '') throw "series cannot be empty";
    if (num < 0) throw "slice length cannot be negative";
    if (num == 0) throw "slice length cannot be zero";
    if (this.series.length < num) throw ("slice length cannot be greater than series length");

    let result = [];
    let newSeries = [...this.series].map(Number);
    
    for (let i = 0; i <= newSeries.length - num; i++) {
      result.push([...newSeries.slice(i, i + num)])
    }

    return result;
  }
}