class Loan {
    constructor(id, applicantName, monthlyIncome, accountBalance, amountRequested) {
        this.id = id;
        this.applicantName = applicantName;
        this.monthlyIncome = monthlyIncome;
        this.accountBalance = accountBalance;
        this.amountRequested = amountRequested;
        this.status = 'Pending'; // Initial status
    }
}

class LoanManager {
    constructor() {
        this.loans = [];
        this.MIN_INCOME = 30000; // Minimum income requirement
        this.MIN_BALANCE = 10000; // Minimum balance requirement
    }

    applyLoan() {
        const applicantName = document.getElementById('applicantName').value;
        const monthlyIncome = Number(document.getElementById('monthlyIncome').value);
        const accountBalance = Number(document.getElementById('accountBalance').value);
        const amountRequested = Number(document.getElementById('amountRequested').value);
        const id = this.loans.length + 1; // Simple ID generation
        const loan = new Loan(id, applicantName, monthlyIncome, accountBalance, amountRequested);
        this.loans.push(loan);
        this.displayLoans();
        this.clearForm();
    }

    approveLoan(id) {
        const loan = this.findLoanById(id);
        if (loan && this.isEligible(loan)) {
            loan.status = 'Approved';
        } else if (loan) {
            loan.status = 'Rejected';
        }
        this.displayLoans();
    }

    rejectLoan(id) {
        const loan = this.findLoanById(id);
        if (loan) {
            loan.status = 'Rejected';
        }
        this.displayLoans();
    }

    isEligible(loan) {
        return loan.monthlyIncome >= this.MIN_INCOME && loan.accountBalance >= this.MIN_BALANCE;
    }

    findLoanById(id) {
        return this.loans.find(loan => loan.id === id);
    }

    displayLoans() {
        const loanList = document.getElementById('loanList');
        loanList.innerHTML = '';
        this.loans.forEach(loan => {
            const li = document.createElement('li');
            li.textContent = `ID: ${loan.id}, Applicant: ${loan.applicantName}, Status: ${loan.status}`;
            loanList.appendChild(li);
        });
    }

    clearForm() {
        document.getElementById('applicantName').value = '';
        document.getElementById('monthlyIncome').value = '';
        document.getElementById('accountBalance').value = '';
        document.getElementById('amountRequested').value = '';
    }
}

const loanManager = new LoanManager();
loanManager.listLoans();