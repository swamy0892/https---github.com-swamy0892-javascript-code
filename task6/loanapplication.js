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

    applyLoan(applicantName, monthlyIncome, accountBalance, amountRequested) {
        const id = this.loans.length + 1; // Simple ID generation
        const loan = new Loan(id, applicantName, monthlyIncome, accountBalance, amountRequested);
        this.loans.push(loan);
        console.log(`Loan application submitted for ${applicantName}`);
    }

    approveLoan(id) {
        const loan = this.findLoanById(id);
        if (!loan) return;

        if (this.isEligible(loan)) {
            loan.status = 'Approved';
            console.log(`Loan application for ${loan.applicantName} approved.`);
        } else {
            console.log(`Loan application for ${loan.applicantName} rejected due to eligibility criteria.`);
        }
    }

    rejectLoan(id) {
        const loan = this.findLoanById(id);
        if (!loan) return;

        loan.status = 'Rejected';
        console.log(`Loan application for ${loan.applicantName} rejected.`);
    }

    isEligible(loan) {
        return loan.monthlyIncome >= this.MIN_INCOME && loan.accountBalance >= this.MIN_BALANCE;
    }

    findLoanById(id) {
        const loan = this.loans.find(loan => loan.id === id);
        if (!loan) {
            console.log(`Loan application with ID ${id} not found.`);
        }
        return loan;
    }

    listLoans() {
        console.log("Current Loans:");
        this.loans.forEach(loan => {
            console.log(`ID: ${loan.id}, Applicant: ${loan.applicantName}, Status: ${loan.status}`);
        });
    }
}

// Example Usage
const loanManager = new LoanManager();
loanManager.applyLoan('swamy', 32000, 15000, 50000);
loanManager.applyLoan('ravi', 25000, 5000, 30000);
loanManager.applyLoan('ram', 35000, 20000, 100000);

loanManager.listLoans();

loanManager.approveLoan(1); // Should approve
loanManager.approveLoan(2); // Should reject
loanManager.rejectLoan(3); // Rejecting manually

loanManager.listLoans();
