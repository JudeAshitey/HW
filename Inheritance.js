class Person {
  constructor(gender, height, age) {
    this.gender = gender;
    //... more of the same
  }
  //methods
  clockIn(time) {
    console.log(`I clocked in at ${time}`);
  }
  clockOut(timeout) {
    console.log(`I clocked out at ${timeout}`);
  }
}

class PostalWorker extends Person {
  constructor(gender, height, age, job) {
    super(gender, height, age);
    this.job = "Post Office";
  }
  shiFt() {
    console.log("I work 9 to 5");
  }
}

class Chef extends Person {
  constructor(gender, height, age, cookingMenu) {
    super(gender, height, age);
    this.cookingMenu = "Italian Dishes";
  }
  foodTicket(food) {
    console.log(`The first italian dish of the day is ${food}`);
  }
}

// Hungry for more same pattern
// test that their methods actually work by running code
// If statements required in hungry for more

class BankAccount {
  constructor(ownerName, acctNum, balance) {
    console.log("Welcome to the bank");
  }

  deposit(amount1) {
    amount1 += amount1;
    console.log("You deposited " + amount1);
    this.balance += amount1;
  }

  withdraw(amount2) {
    this.balance -= amount2;
    if (balance === 0) {
      console.log(`You have no funds left. Balance = ${balance}`);
      return true;
    } else {
      console.log("Your balance is " + balance);
    }
  }
}

class CheckingAccount extends BankAccount {
  constructor(ownerName, balance, acctNum, overdraftEnabled) {
    super(ownerName, balance, acctNum);
    this.overdraftEnabled = true;
  }
  withdraw() {
    if (this.overdraftEnabled === true || balance <= 0) {
      console.log("You have an overdraft privilege");
    } else {
      console.log(
        "I think you still have some more money. Balance : $" + balance
      );
    }
  }
}

class SavingsAccount extends BankAccount {
  constructor() {}
  withdraw() {
    console.log("Sorry There is no withdrawal allowed");
  }
}
