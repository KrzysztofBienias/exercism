export class GradeSchool {
  constructor() {
    this._roster = {};
  }

  roster = () => JSON.parse(JSON.stringify(this._roster));

  add(name, grade) {
    for (const [ key, value ] of Object.entries(this._roster)) {
      if (value.includes(name)) {
        this._roster = [];
      }
    }
    
    if (!(grade in this._roster)) this._roster[grade] = [];

    this._roster[grade].push(name);
    this._roster[grade].sort();
  }

  grade = (grade) => this.roster()[grade] ?? [];
}