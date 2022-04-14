export const abilityModifier = (val) => {
  if (val > 18) throw new Error('Ability scores can be at most 18');
  if (val < 3) throw new Error('Ability scores must be at least 3');

  return Math.floor((val - 10) / 2);
};

export class Character {

  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  static rollAbility() {
    let abilities = [];

    for (let i = 0; i < 4; i++) {
      abilities.push(Math.ceil(Math.random() * 6));
    }

    return abilities.sort()
                    .slice(1, 4) 
                    .reduce((acc, cur) => acc + cur);
  }
  
}
