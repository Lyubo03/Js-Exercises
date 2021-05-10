class BankAccount {
    constructor(name, id, balance) {
        this.name = name;
        this.id = id;
        this.balance = balance;
    }
    debit(amount) {
        if (amount < 0) {
            throw new Error('The amount cannot be less than 0!');
        }
        this.balance += amount;
    }
    credit(amount) {
        if (amount < 0) {
            throw new Error('The amount cannot be less than 0!');
        }
        this.balance -= amount;
    }
    isBigger(bankAccount) {
        if (banckAccount === null) {
            throw new Error('The banck account is not valid!');
        }
        return this.balance > bankAccount.balance;
    }
    toString() {
        return `Banck Account name is ${this.name}. Id - ${this.id}. Balance is: ${this.balance.toFixed(2)}`;
    }
}

const banckAccount = new BankAccount("Ivan", 1, 1000.59);
const banckAccount2 = new BankAccount("Georgi", 2, 1200.59);