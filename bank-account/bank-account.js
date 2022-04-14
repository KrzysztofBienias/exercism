export class BankAccount {
  constructor() {
    this.isOpen = false;
  }

  open() {
    if (this.isOpen) {
      throw new ValueError();
    }

    this.isOpen = true;
    this.amount = 0; 
  }

  close() {
    if (!this.isOpen) {
      throw new ValueError();
    } 

    this.isOpen = false;
    this.amount = 0;
  }

  deposit(amount) {
    if (!this.isOpen) {
      throw new ValueError();
    }

    if (amount < 0) {
      throw new ValueError();
    }

    this.amount += amount;
  }

  withdraw(amount) {
    if (!this.isOpen) {
      throw new ValueError();
    }

    if (amount > this.amount)  {
      throw new ValueError();
    } else if (amount < 0) {
      throw new ValueError();
    }

    this.amount -= amount;
  }

  get balance() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    
    return this.amount;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
