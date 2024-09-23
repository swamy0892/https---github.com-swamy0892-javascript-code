const LoanManager = (function() {
    const loans = [];

    const MIN_INCOME = 30000;
    const MIN_BALANCE = 1000;

    function applyForLoan(loanApplication) {
        const status = evaluateLoan(loanApplication);
        loans.push({ ...loanApplication, status });
    }

    function evaluateLoan(loanApplication) {
        if (loanApplication.income >= MIN_INCOME && loanApplication.balance >= MIN_BALANCE) {
            return 'Approved';
        } else {
            return 'Rejected';
        }
    }

    function getAllLoans() {
        return loans;
    }

    return {
        applyForLoan,
        getAllLoans
    };
})();
