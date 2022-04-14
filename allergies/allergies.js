const allergies = {
  'cats': 128,
  'pollen': 64,
  'chocolate': 32,
  'tomatoes': 16,
  'strawberries': 8,
  'shellfish': 4,
  'peanuts': 2,
  'eggs': 1
}


export class Allergies {
  constructor(value) {
    // Escaping value < 256
    this.value = value % 256;
  }

  list() {
    const alergens = [];

    for (const key in allergies) {
      if (this.value >= allergies[key]) {
        this.value -= allergies[key];
        alergens.push(key);
      }
    }

    return alergens.reverse();
  }
  
  allergicTo(name) {
    return this.list().includes(name);
  }
}