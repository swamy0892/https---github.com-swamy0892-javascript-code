class Loan {
    constructor(loanAmount, interestRate, loanTerm) {
        this.loanAmount = parseFloat(loanAmount);
        this.interestRate = parseFloat(interestRate) / 100;
        this.loanTerm = parseInt(loanTerm, 10);
        this.monthlyPayment = 0;
    }

    calculateMonthlyPayment() {
        const r = this.interestRate / 12;
        const n = this.loanTerm;
        this.monthlyPayment = this.loanAmount * r / (1 - Math.pow(1 + r, -n));
        return this.monthlyPayment.toFixed(2);
    }

    checkLoanStatus(paidEmis) {
        const r = this.interestRate / 12;
        const n = this.loanTerm;
        const monthlyPayment = this.monthlyPayment;
        const remainingPayments = n - paidEmis;

        if (remainingPayments <= 0) {
            return "Loan is fully paid.";
        }

        const totalPaid = paidEmis * monthlyPayment;
        const totalLoanAmount = monthlyPayment * n;
        const remainingAmount = totalLoanAmount - totalPaid;

        return `EMIs Paid: ${paidEmis}, Remaining Amount: $${remainingAmount.toFixed(2)}`;
    }
}

let loan;

function calculateMonthlyPayment() {
    const loanAmount = document.getElementById('loanAmount').value;
    const interestRate = document.getElementById('interestRate').value;
    const loanTerm = document.getElementById('loanTerm').value;

    if (loanAmount && interestRate && loanTerm) {
        loan = new Loan(loanAmount, interestRate, loanTerm);
        const monthlyPayment = loan.calculateMonthlyPayment();
        document.getElementById('resultText').innerText = `Monthly Payment (EMI): $${monthlyPayment}`;
    } else {
        alert('Please fill out all loan details.');
    }
}

function checkLoanStatus() {
    const paidEmis = document.getElementById('paidEmis').value;

    if (loan && paidEmis !== '') {
        const status = loan.checkLoanStatus(paidEmis);
        document.getElementById('resultText').innerText = status;
    } else {
        alert('Please calculate the monthly payment and enter the number of paid EMIs.');
    }
}