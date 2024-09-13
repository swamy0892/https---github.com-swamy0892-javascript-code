function validateAge(age) {
    if (age < 0) {
        throw new RangeError("Age cannot be negative.");
    }
}
try {
    validateAge(-1);
} catch (error) {
    console.error("Validation error:", error.message);
}

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError"; // Custom name for the error
    }
}
try {
    throw new CustomError("This is a custom error message.");
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Caught a custom error:", error.message);
    } else {
        console.error("Caught an error:", error.message);
    }
}

