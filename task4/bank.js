class BankAccount {
    constructor(accountNumber, accountHolderName) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += parseFloat(amount);
        this.displayBalance();
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= parseFloat(amount);
        } else {
            alert('Insufficient balance');
        }
        this.displayBalance();
    }

    checkBalance() {
        return this.balance.toFixed(2);
    }

    displayBalance() {
        document.getElementById('resultText').innerText = `Current Balance: $${this.checkBalance()}`;
    }
}

let account;

function deposit() {
    const accountNumber = document.getElementById('accountNumber').value;
    const accountHolderName = document.getElementById('accountHolderName').value;
    const depositAmount = document.getElementById('depositAmount').value;

    if (!account) {
        account = new BankAccount(accountNumber, accountHolderName);
    }
    account.deposit(depositAmount);
}

function withdraw() {
    const withdrawAmount = document.getElementById('withdrawAmount').value;

    if (account) {
        account.withdraw(withdrawAmount);
    } else {
        alert('Please create an account first.');
    }
}

function checkBalance() {
    if (account) {
        account.displayBalance();
    } else {
        alert('Please create an account first.');
    }
}