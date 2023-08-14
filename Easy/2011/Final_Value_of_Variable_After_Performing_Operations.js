/**
 * Final Value of Variable After Performing Operations
 */
const finalValueAfterOperations = (operations) => operations.reduce((acc, curr) => curr[1] === "+" ? ++acc : --acc, 0)